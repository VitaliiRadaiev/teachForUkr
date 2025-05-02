import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls
} from "@wordpress/block-editor";
import "./editor.scss";
import clsx from "clsx";
import { getSectionsPaddingClasses, getSectionsMarginClasses } from "../../utils/utils";
import { DefaultSectionsControls } from "../../components/default-sections-controls/DefaultSectionsControls";
import { SectionsDecorPicker } from "../../components/section-decor-picker/SectionsDecorPicker";
import { SectionDecor } from "../../ui/section-decor/SectionDecor";


export default function Edit({ attributes, setAttributes }) {
	const { isHide, padding, margin, background, className, decor } = attributes;
	const blockProps = useBlockProps({
		className: clsx(
			'cards-with-animate-icons-section rounded-[20px] md:rounded-[30px] relative',
			className,
			background,
			getSectionsMarginClasses(margin),
			getSectionsPaddingClasses(padding),
			{ ['hide-block']: isHide }
		)
	});

	const { children } = useInnerBlocksProps({}, {
		template: [
			['t4u/head-block', {
				container: "lg",
			}],
			['t4u/inner-block', {
				classes: 'mt-[30px] md:mt-[40px] xl:mt-[50px] grid md:grid-cols-2 lg:grid-cols-12 gap-[10px] md:gap-[20px] xl:gap-[24px] 4xl:gap-[30px] first-child-no-margin',
				canAddItem: true,
				options: {
					template: [
						['t4u/cards-with-animate-icons-item', {}],
					],
					allowedBlocks: ['t4u/cards-with-animate-icons-item']
				},
				allowedBlocks: []
			}],
			["t4u/buttons-group", {
				classes: 'mt-[40px] xl:mt-[50px]',
				alignment: 'center',
				options: {
					template: [
						["t4u/button", {}],
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
				<SectionsDecorPicker decor={decor} setDecor={(value) => setAttributes({ decor: value })} />
			</InspectorControls>
			<section {...blockProps}>
				<SectionDecor decor={decor} />
				<div className="container relative z-2">
					{children}
				</div>
			</section>
		</>
	);
}
