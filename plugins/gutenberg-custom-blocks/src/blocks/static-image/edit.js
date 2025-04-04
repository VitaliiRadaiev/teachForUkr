import "./editor.scss";
import clsx from "clsx";
import { getUrlToStaticImages } from "../../utils/utils";


export default function Edit({ attributes }) {
	const { classes, url } = attributes;

	return (
		<img className={clsx(classes)} src={getUrlToStaticImages(url)} alt="decor" />
	);
}
