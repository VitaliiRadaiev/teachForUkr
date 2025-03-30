import {
	useBlockProps,
	useInnerBlocksProps
} from "@wordpress/block-editor";
import clsx from 'clsx';
import { Fragment } from "@wordpress/element";
import "./editor.scss";


export default function Edit({ attributes, setAttributes }) {
	const { options, classes, wrapper, simpleWrapper, canAddItem } = attributes;

	const blockProps = useBlockProps({
		className: clsx(classes, { 'canAddItem': canAddItem })
	});

	const { children } = useInnerBlocksProps(blockProps, options);

	if (wrapper) {
		return (
			<div {...(simpleWrapper ? { className: classes } : blockProps)}>
				{children}
			</div>
		);
	} else {
		return (
			<Fragment>
				{children}
			</Fragment>
		);
	}
}
