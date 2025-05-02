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
			'cards-with-image-slider-grid-section rounded-[20px] md:rounded-[30px] relative',
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
				classes: ""
			}],
			['t4u/inner-block', {
				classes: 'mt-[30px] md:mt-[40px] lg:mt-[50px] relative first-child-no-margin',
				simpleWrapper: true,
				dataAttributes: {
					'data-slider': 'cards-with-image-slider',
					'data-slider-init': 'mobile-only'
				},
				options: {
					template: [
						['t4u/inner-block', {
							classes: 'swiper [&.swiper]:overflow-visible [&:not(.swiper-initialized)_.swiper-wrapper]:gap-[10px] md:[&:not(.swiper-initialized)_.swiper-wrapper]:gap-[20px] xl:[&:not(.swiper-initialized)_.swiper-wrapper]:gap-[24px] 4xl:[&:not(.swiper-initialized)_.swiper-wrapper]:gap-[30px] lg-max:[&_.card-with-image-logo]:w-[323px]',
							simpleWrapper: true,
							options: {
								template: [
									['t4u/inner-block', {
										classes: 'swiper-wrapper min-h-[100px] lg:!grid lg:grid-cols-12 lg:gap-[20px] xl:gap-[24px] 4xl:gap-[30px]',
										canAddItem: true,
										options: {
											template: [
												['t4u/card-with-image-logo', {}]
											],
											allowedBlocks: ['t4u/card-with-image-logo'],
											templateLock: false
										}
									}],
								],
								allowedBlocks: [],
							}
						}],
						['t4u/inner-block', {
							classes: 'mt-[20px] md:mt-[30px] flex justify-center [&:has(.swiper-pagination-lock)]:hidden lg:hidden',
							simpleWrapper: true,
							options: {
								template: [
									['t4u/simple-html', {
										html: '<div class="slider-bullets"></div>'
									}],
								],
								allowedBlocks: []
							}
						}],
					],
					allowedBlocks: []
				}

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
