import { useEffect, useRef } from "@wordpress/element";
import "./editor.scss";
import clsx from "clsx";


export default function Edit({ attributes }) {
	const { html } = attributes;
	const ref = useRef(null);

	useEffect(() => {
		if(ref?.current) {
			ref.current.insertAdjacentHTML('afterEnd', html);
			ref.current.remove();
		}
	}, [ref])

	return (
		<div ref={ref} ></div>
	);
}
