import {
	useBlockProps,
	useInnerBlocksProps,
} from "@wordpress/block-editor";
import "./editor.scss";
import clsx from "clsx";
import { combineString, getMarginClasses } from "../../utils/utils";

//'gap-y-[5px]  gap-y-[10px] gap-y-[15px] gap-y-[20px]';

export default function Edit({ attributes, setAttributes }) {
	const { margin, classes, className, accent, fontSize, aligment } = attributes;
	const blockProps = useBlockProps({
		className: clsx(
			'ul-square',
			classes,
			className,
			accent,
			getMarginClasses(margin),
			combineString({ prefix: 'text-'}, fontSize),
			combineString({ prefix: 'text-'}, aligment),
		)
	});

	const { children } = useInnerBlocksProps({}, {
		template: [],
		allowedBlocks: []
	});

	return (
		<div {...blockProps} >
			{children}
		</div>
	);
}
