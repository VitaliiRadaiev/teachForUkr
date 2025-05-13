import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
} from "@wordpress/block-editor";
import "./editor.scss";
import clsx from "clsx";
import { getMarginClasses, getUrlToStaticImages } from "../../utils/utils";
import { IsHide } from "../../components/is-hide/IsHide";
import { MarginYControl } from "../../components/space-control/MarginYControl";

export default function Edit({ attributes, setAttributes }) {
	const { isHide, margin, classes, className, preview } = attributes;

	const blockProps = useBlockProps({
		className: clsx(
			'article-box nested-bg-item rounded-[12px] p-[20px] md:p-[30px]',
			classes,
			className,
			getMarginClasses(margin),
			{
				['hide-block']: isHide,
			}
		)
	});

	const { children } = useInnerBlocksProps({}, {
		template: [
			['t4u/simple-text', {}]
		],
		allowedBlocks: [],

	});

	if (preview) {
		return <img src={getUrlToStaticImages(preview)} />
	}
	return (
		<>
			<InspectorControls>
				<IsHide isHide={isHide} setIsHide={(val) => setAttributes({ isHide: val })} />
				<MarginYControl size={margin} setSize={(s) => setAttributes({ margin: s })} />
			</InspectorControls>
			<div {...blockProps}>
				{children}
			</div>
		</>
	);
}


