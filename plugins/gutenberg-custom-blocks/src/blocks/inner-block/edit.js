import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls
} from "@wordpress/block-editor";
import clsx from 'clsx';
import { Fragment } from "@wordpress/element";
import "./editor.scss";
import { IsHide } from "../../components/is-hide/IsHide";


export default function Edit({ attributes, setAttributes }) {
	const { isHide, options, classes, className, dataAttributes, wrapper, simpleWrapper, canAddItem } = attributes;

	const blockProps = useBlockProps({
		className: clsx(classes, className,
			{
				'canAddItem': canAddItem,
				'hide-block': isHide
			}
		)
	});

	const { children } = useInnerBlocksProps(blockProps, options);

	if (wrapper) {
		return (
			<>
				<InspectorControls>
					<IsHide isHide={isHide} setIsHide={(val) => setAttributes({ isHide: val })} />
				</InspectorControls>
				<div {...(simpleWrapper ? { className: classes } : blockProps)} {...dataAttributes}>
					{children}
				</div>
			</>
		);
	} else {
		return (
			<Fragment>
				{children}
			</Fragment>
		);
	}
}
