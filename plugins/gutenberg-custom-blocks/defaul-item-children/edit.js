import {
	useBlockProps,
	useInnerBlocksProps,
	RichText
} from "@wordpress/block-editor";
import "./editor.scss";


export default function Edit({ attributes, setAttributes }) {
	const { classes, text } = attributes;
	const blockProps = useBlockProps();

	return (
		<div {...blockProps}></div>
	);
}
