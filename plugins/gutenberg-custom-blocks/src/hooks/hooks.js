import { useState, useEffect, useRef } from "react";

const useFetchOnVisible = (fetchCallback, deps = [], shouldFetch = true) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isFetched, setIsFetched] = useState(false);
    const ref = useRef(null);
    const observerRef = useRef(null);

    useEffect(() => {
        if (!shouldFetch) return;

        observerRef.current = new IntersectionObserver(
            ([entry], observer) => {
                if (entry.isIntersecting && !isFetched && typeof fetchCallback === 'function') {
                    fetchCallback()
                        ?.then((result) => {
                            setData(result);
                            setIsFetched(true);
                            observer.disconnect();
                        })
                        ?.catch(setError);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observerRef.current.observe(ref.current);
        }

        return () => observerRef.current?.disconnect();
    }, [isFetched, shouldFetch, ...deps]);

    return { ref, data, error };
};

export default useFetchOnVisible;
