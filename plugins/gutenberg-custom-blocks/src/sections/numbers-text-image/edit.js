import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls
} from "@wordpress/block-editor";
import "./editor.scss";
import clsx from "clsx";
import { getSectionsPaddingClasses, getSectionsMarginClasses } from "../../utils/utils";
import { DefaultSectionsControls } from "../../components/default-sections-controls/DefaultSectionsControls";


export default function Edit({ attributes, setAttributes }) {
	const { isHide, padding, margin, background, className } = attributes;
	const blockProps = useBlockProps({
		className: clsx(
			'numbers-text-image-section rounded-[20px] md:rounded-[30px] overflow-hidden',
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
				classes: 'lg:shrink-0 lg:grow-0 lg:w-[49%] lg:max-w-[468px] xl:max-w-[865px]',
				simpleWrapper: true,
				options: {
					template: [
						['t4u/sup-title', {}],
						['t4u/heading', { 
							classes: "mt-[16px] md:mt-[20px] text-dark-primary",
							fontSize: "lg"
						}],
						['t4u/simple-text', {
							classes: "mt-[10px] md:mt-[20px] 4xl:mt-[30px]",
							fontSize: "sm",
						}],
						['t4u/inner-block', {
							classes: "mt-[30px] 4xl:mt-[40px] grid gap-[10px] md:gap-[20px] lg:gap-[10px] xl:table xl:border-spacing-y-[10px] 4xl:border-spacing-y-[20px]",
							canAddItem: true,
							options: {
								template: [
									['t4u/numbers-card', {}]
								],
								allowedBlocks: ['t4u/numbers-card']
							}
						}],
						["t4u/buttons-group", {
							classes: 'mt-[40px] xl:mt-[50px]',
							options: {
								template: [
									["t4u/button", {
										acfField: 'link_become_partner'
									}],
								],
								allowedBlocks: ['t4u/button']
							}
						}],
					],
					allowedBlocks: []
				}

			}],
			['t4u/inner-block', {
				classes: "mt-[30px] md:mt-[40px] lg:mt-0 relative aspect-[1/0.9] lg:aspect-auto lg:min-h-[536px] 4xl:min-h-[730px] lg:shrink lg:grow",
				simpleWrapper: true,
				options: {
					template: [
						['t4u/image', {
							classes: "ibg rounded-[12px] z-1"
						}],
						['t4u/simple-image', {
							classes: "absolute z-2 top-0 h-[138px] md:h-[245px] w-auto right-[-64px] md:right-[-125px] lg:right-[-165px] aos-rotate-right",
							url: "general/rectangle-turn-right.svg"
						}]
					],
					allowedBlocks: []
				}
			}]
		],
		allowedBlocks: []
	})

	return (
		<>
			<InspectorControls>
				<DefaultSectionsControls attributes={attributes} setAttributes={setAttributes}/>
			</InspectorControls>
			<section {...blockProps}>
				<div className="container lg:flex lg:flex-row lg:gap-x-[40px] 4xl:gap-x-[65px]">
					{children}
				</div>
			</section>
		</>
	);
}
