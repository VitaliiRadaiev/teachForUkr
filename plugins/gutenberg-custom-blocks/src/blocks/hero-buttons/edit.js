import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
} from "@wordpress/block-editor";
import { getMarginClasses } from "../../utils/utils";
import { IsHide } from "../../components/is-hide/IsHide";
import { MarginYControl } from "../../components/space-control/MarginYControl";
import "./editor.scss";
import clsx from "clsx";



export default function Edit({ attributes, setAttributes }) {
	const { isHide, margin, classes } = attributes;
	const blockProps = useBlockProps({
		className: clsx(
			'canAddItem',
			'mx-[-16px] md:mx-[-40px] h-[59px] md:h-[87px] lg:h-auto lg-max:overflow-y-hidden',
			getMarginClasses(margin),
			classes,
			{
				['hide-block']: isHide
			}
		)
	});
	const { children } = useInnerBlocksProps({}, {
		template: [
			['t4u/hero-button', {}],
			['t4u/hero-button', {}],
			['t4u/hero-button', {}],
		],
		allowedBlocks: ['t4u/hero-button']
	});


	return (
		<>
			<InspectorControls>
				<IsHide isHide={isHide} setIsHide={(val) => setAttributes({ isHide: val })} />
				<MarginYControl size={margin} setSize={(s) => setAttributes({ margin: s })} />
			</InspectorControls>
			<div {...blockProps}>
				<div className="px-[16px] md:px-[40px] pb-[20px] min-h-[59px] md:min-h-[87px] lg:pb-0 flex lg:flex-wrap gap-[10px] md:gap-[24px] lg-max:overflow-auto">
					{children}
				</div>
			</div>
		</>
	);
}
