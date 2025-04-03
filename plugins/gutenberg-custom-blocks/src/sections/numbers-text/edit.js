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
				classes: 'max-w-[500px] xl:max-w-[614px] 4xl:max-w-[810px] md:order-1',
				simpleWrapper: true,
				options: {
					template: [
						['t4u/sup-title', {}],
						['t4u/heading', { classes: "mt-[16px] md:mt-[20px] text-dark-primary" }],
						['t4u/simple-text', {
							classes: "mt-[20px] lg:mt-[30px] lg:max-w-[26.5rem] 4xl:max-w-[30.75rem]",
							fontSize: "xl"
						}],
					],
					allowedBlocks: []
				}

			}],
			['t4u/inner-block', {
				classes: "mt-[30px] md:mt-[50px] lg:mt-0 grid gap-[10px] md:gap-[20px] lg:gap-[10px] md:order-3 lg:order-2 lg:row-span-2 xl:table xl:border-spacing-y-[10px] 4xl:border-spacing-y-[20px] xl:mt-[-10px] 4xl:mt-[-20px] xl:w-full",
				canAddItem: true,
				options: {
					template: [
						['t4u/numbers-card', {}]
					],
					allowedBlocks: ['t4u/numbers-card']
				}
			}],
			["t4u/buttons-group", {
				classes: "mt-[40px] xl:mt-[50px] 4xl:mt-[60px] button-group md:order-2 lg:order-3",
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
	})

	return (
		<>
			<InspectorControls>
				<DefaultSectionsControls attributes={attributes} setAttributes={setAttributes} />
			</InspectorControls>
			<section {...blockProps}>
				<div className="container md:grid lg:grid-rows-[auto_1fr] lg:grid-cols-[48%_1fr] lg:gap-x-[40px] 4xl:gap-x-[50px] lg:items-start">
					{children}
				</div>
			</section>
		</>
	);
}
