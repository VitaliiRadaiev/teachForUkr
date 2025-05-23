import { useState, useEffect, useRef } from "react";

const useFetchOnVisible = (fetchCallback, deps = [], shouldFetch = true) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isFetched, setIsFetched] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const ref = useRef(null);
    const observerRef = useRef(null);

    useEffect(() => {
        if (!shouldFetch) return;

        observerRef.current = new IntersectionObserver(
            ([entry], observer) => {
                if (entry.isIntersecting && !isFetched && typeof fetchCallback === 'function') {
                    setIsLoading(true);
                    fetchCallback()
                        ?.then((result) => {
                            setData(result);
                            setIsFetched(true);
                            setIsLoading(false);
                            observer.disconnect();
                        })
                        ?.catch((err) => {
                            setError(err);
                            setIsLoading(false);
                        });
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observerRef.current.observe(ref.current);
        }

        return () => observerRef.current?.disconnect();
    }, [isFetched, shouldFetch, ...deps]);

    const refetch = (fetchCallback) => {
        setIsLoading(true);
        fetchCallback()
            ?.then((result) => {
                setData(result);
                setIsFetched(true);
                setIsLoading(false);
                observer.disconnect();
            })
            ?.catch((err) => {
                setError(err);
                setIsLoading(false);
            });
    }

    return { ref, data, error, isFetched, isLoading, refetch };
};

export default useFetchOnVisible;
