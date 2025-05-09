import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls
} from "@wordpress/block-editor";
import "./editor.scss";
import clsx from "clsx";
import { getSectionsPaddingClasses, getSectionsMarginClasses, getUrlToStaticImages } from "../../utils/utils";
import { DefaultSectionsControls } from "../../components/default-sections-controls/DefaultSectionsControls";
import { SectionsDecorPicker } from "../../components/section-decor-picker/SectionsDecorPicker";
import { SectionDecor } from "../../ui/section-decor/SectionDecor";

export default function Edit({ attributes, setAttributes }) {
	const { preview, isHide, padding, margin, background, className, decor } = attributes;
	const blockProps = useBlockProps({
		className: clsx(
			'cards-info-section rounded-[20px] md:rounded-[30px] relative',
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
				classes: "",
			}],
			['t4u/inner-block', {
				classes: 'min-h-[100px] mt-[30px] md:mt-[40px] lg:mt-[50px] flex flex-col gap-[10px] md:gap-[20px] lg:gap-[24px] 4xl:gap-[30px] first-child-no-margin',
				canAddItem: true,
				options: {
					template: [
						['t4u/cards-info-item', {}],
						['t4u/cards-info-item', {}]
					],
					allowedBlocks: ['t4u/cards-info-item'],
				}

			}],
			['t4u/heading', {
				classes: 'mt-[30px] md:mt-[40px] lg:mt-[50px] first-child-no-margin text-dark-primary',
				container: 'lg',
				aligment: 'center',
				fontSize: 'lg'
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

	if (preview) {
		return <img src={getUrlToStaticImages(preview)} />
	}

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
