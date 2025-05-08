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
import { CtaBgColorPallet } from "../../components/cta-bg-color-pallet/CtaBgColorPallet";

export default function Edit({ attributes, setAttributes }) {
	const { preview, isHide, padding, margin, background, colorBackground, className, decor } = attributes;
	const blockProps = useBlockProps({
		className: clsx(
			'subscribe-section rounded-[20px] md:rounded-[30px] relative',
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
				classes: 'shrink-0 grow-0 xl:w-[646px] 4xl:w-[830px]',
				simpleWrapper: true,
				options: {
					template: [
						['t4u/heading', {
							classes: 'text-dark-primary',
							acfField: 'subscribe_title'
						}]
					],
					allowedBlocks: []
				}
			}],
			['t4u/inner-block', {
				classes: 'shrink grow xl:w-full xl:max-w-[460px] 4xl:max-w-[600px]',
				simpleWrapper: true,
				options: {
					template: [
						['t4u/heading', {
							classes: 'text-light-primary !font-normal',
							htmlTeg: 'span',
							fontSize: 'md',
							acfField: 'subscribe_form_title'
						}],
						['t4u/inner-block', {
							classes: 'mt-[16px]',
							simpleWrapper: true,
							options: {
								template: [
									['t4u/subscribe-form', {}]
								],
								allowedBlocks: []
							}
						}],
					],
					allowedBlocks: []
				}
			}]
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
				<CtaBgColorPallet color={colorBackground} setColor={(colorName) => setAttributes({ colorBackground: colorName })} />
				<SectionsDecorPicker decor={decor} setDecor={(value) => setAttributes({ decor: value })} />
			</InspectorControls>
			<section {...blockProps}>
				<SectionDecor decor={decor} />
				<div className="container relative z-2">
					<div className={clsx(
						'rounded-[20px] md:rounded-[30px] py-[40px] xl:py-[32px] px-[16px] xl:px-[30px] flex flex-col xl:flex-row xl:justify-between gap-[30px] xl:gap-[40px] min-h-[160px] overflow-hidden',
						colorBackground
					)}>
						{children}
					</div>
				</div>
			</section>
		</>
	);
}
