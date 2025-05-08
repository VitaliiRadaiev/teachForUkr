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
			'cta-leave-request-section rounded-[20px] md:rounded-[30px] relative',
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
				classes: 'relative z-2 pt-[40px] px-[16px] md:px-[40px] xl:p-[20px] xl:flex xl:justify-between xl:gap-[50px] xl:pointer-events-none',
				simpleWrapper: true,
				options: {
					template: [
						['t4u/inner-block', {
							classes: 'xl-max:mx-auto max-w-[584px] xl:max-w-[520px] 4xl:max-w-[645px] xl:pl-[40px] xl:py-[40px] xl:pointer-events-auto flex flex-col items-start xl:gap-[40px]',
							simpleWrapper: true,
							options: {
								template: [
									['t4u/inner-block', {
										simpleWrapper: true,
										options: {
											template: [
												['t4u/sup-title', {
													acfField: 'cta_form_suptitle'
												}],
												['t4u/heading', {
													classes: "mt-[16px] md:mt-[20px] text-dark-primary without-break-word",
													acfField: 'cta_form_title'
												}],
												['t4u/simple-text', {
													classes: "mt-[16px] md:mt-[20px] text-white",
													canAddItem: true,
													acfField: 'cta_form_text'
												}]
											],
											allowedBlocks: []
										}
									}],
									['t4u/cta-leave-request-decor-buttons', {
										classes: 'pt-[44px] mt-auto cta-form-decor-buttons hidden xl:block'
									}]
								],
								allowedBlocks: []
							}
						}],
						['t4u/inner-block', {
							classes: 'mt-[30px] relative xl:mt-0 bg-light-primary rounded-[12px] py-[30px] px-[16px] md:p-[40px] w-full max-w-[470px] xl-max:mx-auto xl:w-[470px] xl:min-h-[565px] 4xl:min-h-[594px] xl:pointer-events-auto overflow-hidden flex flex-col justify-center',
							simpleWrapper: true,
							dataAttributes: {
								'data-feedback-form': ''
							},
							options: {
								template: [
									['t4u/heading', {
										classes: "text-dark-primary",
										fontSize: 'lg',
										acfField: 'cta_form_second-title',
										aligment: 'center'
									}],
									['t4u/simple-text', {
										classes: "mt-[5px] font-bold",
										canAddItem: false,
										aligment: 'center',
										acfField: 'cta_form_second-text'
									}],
									['t4u/inner-block', {
										classes: 'mt-[20px]',
										simpleWrapper: true,
										options: {
											template: [
												['t4u/cta-leave-request-form', {}]
											],
											allowedBlocks: []
										}
									}]	
								],
								allowedBlocks: []
							}
						}]
					],
					allowedBlocks: []
				}

			}],
			['t4u/inner-block', {
				classes: 'mt-[24px] md:mt-[52px] xl:mt-0 relative h-[226px] md:h-[409px] xl:h-[550px] 4xl:h-[574px] xl:absolute xl:z-1 xl:left-1/2 xl:bottom-0 xl:-translate-x-1/2 xl:w-full',
				simpleWrapper: true,
				options: {
					template: [
						['t4u/static-image', {
							classes: 'absolute z-1 top-[52px] md:top-[56px] xl:top-[120px] left-1/2 -translate-x-1/2 h-[242px] md:h-[431px] xl:h-[492px] w-auto max-w-none',
							url: 'general/cta-decor.svg'
						}],
						['t4u/image', {
							classes: 'absolute z-2 top-0 left-1/2 translate-x-[-30%] md:translate-x-[-50%] w-[282px] md:w-[513px] xl:w-[653px] h-auto max-w-none',
							acfField: 'cta_form_image'
						}],
						['t4u/cta-leave-request-decor-buttons', {
							classes: 'cta-form-decor-buttons absolute z-3 left-1/2 translate-x-[-77%] md:translate-x-[-123%] bottom-[28px] md:bottom-[40px] xl:hidden'
						}]
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
						"rounded-[20px] md:rounded-[30px] relative overflow-hidden",
						colorBackground
					)}>
						{children}
					</div>
				</div>
			</section>
		</>
	);
}
