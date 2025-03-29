import {
	useBlockProps,
	useInnerBlocksProps,
	RichText
} from "@wordpress/block-editor";
import { forwardRef } from "@wordpress/element";


export default function Edit({ attributes, setAttributes }) {
	const { classes, text } = attributes;
	const blockProps = useBlockProps();

	const TextEl = () => (<RichText
		placeholder="Короткий опис"
		value={text}
		//allowedFormats={RICH_TEXT_FORMATS}
		tagName="div"
		className=""
		onChange={(value) => {
			setAttributes({
				text: value
			})
		}}
	/>);

	return (
		<>
			<div {...blockProps}>
				lorem ipsum
			</div>
			<TextEl />

		</>
	);
}
