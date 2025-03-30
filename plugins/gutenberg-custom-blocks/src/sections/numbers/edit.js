import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls
} from "@wordpress/block-editor";
import "./editor.scss";
import clsx from "clsx";
import { IsHide } from "../../components/is-hide/IsHide";
import { getSectionsPaddingClasses, getSectionsMarginClasses } from "../../utils/utils";
import { MarginYControl } from "../../components/space-control/MarginYControl";
import { PaddingYControl } from "../../components/space-control/PaddingYControl";

import { SECTIONS_MARGIN_MAP, SECTIONS_PADDING_MAP } from "../../global/global";
import { SectionsBgColorPallet } from "../../components/sections-bg-color-pallet/SectionsBgColorPallet";


export default function Edit({ attributes, setAttributes }) {
	const { isHide, padding, margin, background, className } = attributes;
	const blockProps = useBlockProps({
		className: clsx(
			'numbers-section rounded-[20px] md:rounded-[30px]',
			className,
			background,
			getSectionsMarginClasses(margin),
			getSectionsPaddingClasses(padding),
			{ ['hide-block']: isHide }
		)
	});

	const { children } = useInnerBlocksProps({}, {
		template: [
			['t4u/inner-block', { 
				classes: 'text-center max-w-[30.5rem] xl:max-w-[45.5rem] 4xl:max-w-[59.125rem] mx-auto',
				simpleWrapper: true,
				options: {
					template: [
						['t4u/sup-title', {}],
						['t4u/heading', { classes: "mt-[16px] md:mt-[20px] text-dark-primary" }],
					],
					allowedBlocks: []
				}

			}],
			['t4u/inner-block', {
				classes: 'mt-[30px] md:mt-[40px] xl:mt-[50px] grid xl:grid-cols-3 gap-[10px] md:gap-[20px] xl:gap-[24px] 4xl:gap-[30px]',
				canAddItem: true,
				options: {
					template: [
						['t4u/numbers-item', {}],
					],
					allowedBlocks: ['t4u/numbers-item']
				},
				allowedBlocks: []
			}]
		],
		allowedBlocks: []
	})

	return (
		<>
			<InspectorControls>
				<IsHide isHide={isHide} setIsHide={(val) => setAttributes({ isHide: val })} />
				<SectionsBgColorPallet 
					color={background}
					setColor={(val) => setAttributes({ background: val })}
				/>
				<PaddingYControl
					size={padding}
					setSize={(s) => setAttributes({ padding: s })}
					sizesMap={SECTIONS_PADDING_MAP}
				/>
				<MarginYControl
					size={margin}
					setSize={(s) => setAttributes({ margin: s })}
					sizesMap={SECTIONS_MARGIN_MAP}
				/>
			</InspectorControls>
			<section {...blockProps}>
				<div className="container">
					{children}
				</div>
			</section>
		</>
	);
}
