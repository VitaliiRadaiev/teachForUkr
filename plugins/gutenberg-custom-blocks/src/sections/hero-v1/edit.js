import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls
} from "@wordpress/block-editor";
import { PanelBody, RadioControl } from "@wordpress/components";
import { useSelect, useDispatch } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
import "./editor.scss";
import clsx from "clsx";
import { getSectionsMarginClasses, getUrlToStaticImages } from "../../utils/utils";
import { IsHide } from "../../components/is-hide/IsHide";
import { MarginYControl } from "../../components/space-control/MarginYControl";
import { SECTIONS_MARGIN_MAP } from "../../global/global";

const decor1_classes = {
	'1': 'absolute z-2 accent-first-filter w-[13.7%] h-auto top-0 right-[11.96%]',
	'2': 'absolute z-2 accent-first-filter w-[9.83%] h-auto top-[1%] right-[11.96%] rotate-[54deg]',
	'3': 'absolute z-2 accent-first-filter w-[9.83%] h-auto top-[4%] left-[4%] rotate-[-45deg]',
	'4': 'absolute z-2 accent-second-filter w-[9.83%] h-auto top-[4%] right-[7%] rotate-[54deg]',
};
const decor1_urls = {
	'1': 'icons/circle.svg',
	'2': 'icons/rectangle-short.svg',
	'3': 'icons/rectangle-short.svg',
	'4': 'icons/rectangle-short.svg',
}
const image_classes = {
	'1': 'ibg image-mask image-mask-1 image-mask-right-center z-1 bg-light-primary-60',
	'2': 'ibg image-mask image-mask-2 image-mask-right-center z-1 bg-light-primary-60',
	'3': 'ibg image-mask image-mask-3 image-mask-right-center z-1 bg-light-primary-60',
	'4': 'ibg image-mask image-mask-4 image-mask-right-center z-1 bg-light-primary-60',
};
const decor2_classes = {
	'1': 'absolute z-3 accent-second-filter w-[9.83%] h-auto left-0 bottom-[9%] origin-bottom-left rotate-[54deg]',
	'2': 'absolute z-3 accent-second-filter w-[14.75%] h-auto left-0 top-1/2 -translate-y-1/2',
	'3': 'absolute z-3 accent-second-filter w-[14.75%] h-auto left-[54%] bottom-0 -translate-x-1/2',
	'4': 'absolute z-3 accent-first-filter w-[14.75%] h-auto left-0 bottom-[16%]',
};
const decor2_urls = {
	'1': 'icons/rectangle.svg',
	'2': 'icons/circle.svg',
	'3': 'icons/circle.svg',
	'4': 'icons/pac-man.svg',
};

const template1 = ['t4u/inner-block', {
	classes: 'mt-[16px] md:mt-[20px] pb-[30px] 4xl:pb-[40px] lg:flex lg:gap-x-[20px] 4xl:gap-x-[40px] lg:justify-between',
	simpleWrapper: true,
	options: {
		template: [
			['t4u/inner-block', {
				classes: 'shrink grow lg:self-center',
				simpleWrapper: true,
				options: {
					template: [
						['t4u/sup-title', {}],
						['t4u/heading', {
							classes: "mt-[16px] md:mt-[20px] xl:mt-[30px] text-dark-primary",
							htmlTeg: "h1",
							fontSize: "2xl",
							container: "full"
						}],
						['t4u/simple-text', {
							classes: "mt-[20px] text-dark-primary",
							fontSize: "lg",
							container: "sm"
						}],
						['t4u/inner-block', {
							classes: 'mt-[40px] md:mt-[50px] xl:mt-[65px] 4xl:mt-[80px] button-group flex items-center flex-wrap gap-y-[16px] gap-x-[30px]',
							options: {
								template: [
									["t4u/button", {
										acfField: 'link_join',
										classes: 'md:min-w-[312px]'
									}],
									["t4u/paragraph", {
										classes: "mt-0 text-dark-primary lg:max-w-[315px] 4xl:max-w-[360px]",
										fontSize: "lg"
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
				classes: 'mt-[40px] lg:mt-0 aspect-[1/0.724] relative shrink-0 grow-0 lg:self-start lg:w-[400px] xl:w-[500px] 2xl:w-[610px] 4xl:w-[760px]',
				simpleWrapper: true,
				options: {
					template: [
						['t4u/static-image', {
							classes: "absolute z-2 accent-first-filter w-[13.7%] h-auto top-0 right-[11.96%]",
							url: "icons/circle.svg"
						}],
						['t4u/image', {
							classes: "ibg image-mask image-mask-1 image-mask-right-center z-1 bg-light-primary-60"
						}],
						['t4u/static-image', {
							classes: "absolute z-3 accent-second-filter w-[9.83%] h-auto left-0 bottom-[9%] origin-bottom-left rotate-[54deg]",
							url: "icons/rectangle.svg"
						}],
					],
					allowedBlocks: []
				}
			}],
		],
		allowedBlocks: []
	}

}];
const template2 = ['t4u/inner-block', {
	classes: 'mt-[16px] md:mt-[20px] pb-[30px] 4xl:pb-[40px] lg:flex lg:gap-x-[20px] 4xl:gap-x-[40px] lg:justify-between',
	simpleWrapper: true,
	options: {
		template: [
			['t4u/inner-block', {
				classes: 'shrink grow lg:self-center',
				simpleWrapper: true,
				options: {
					template: [
						['t4u/sup-title', { isHide: true }],
						['t4u/heading', {
							classes: "mt-[16px] md:mt-[20px] xl:mt-[30px] text-dark-primary",
							htmlTeg: "h1",
							fontSize: "2xl",
							container: "full"
						}],
						['t4u/heading', {
							classes: "mt-[10px] text-dark-primary",
							htmlTeg: "span",
							fontSize: "lg",
							container: "full"
						}],
						['t4u/simple-text', {
							classes: "mt-[20px] text-dark-primary",
							fontSize: "lg",
							container: "sm"
						}],
						['t4u/inner-block', {
							classes: "mt-[40px] md:mt-[50px] xl:mt-[65px] 4xl:mt-[80px]",
							simpleWrapper: true,
							options: {
								template: [
									['t4u/heading', {
										classes: "text-dark-primary",
										htmlTeg: "span",
										fontSize: "md",
									}],
									["t4u/buttons-group", {
										classes: 'mt-[20px] md-max:buttons-dance',
										gap: { y: "sm", x: "sm" },
										options: {
											template: [
												["t4u/button", {
													acfField: 'link_paypal',
													variant: "btn-primary"
												}],
												["t4u/button", {
													acfField: 'link_wayforpay',
													variant: "btn-primary"
												}],
												["t4u/button", {
													acfField: 'link_banktransfer',
													variant: "btn-primary"
												}],
											],
											allowedBlocks: ['t4u/button']
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
				classes: 'mt-[40px] lg:mt-0 aspect-[1/0.724] relative shrink-0 grow-0 lg:self-start lg:w-[400px] xl:w-[500px] 2xl:w-[610px] 4xl:w-[760px]',
				simpleWrapper: true,
				options: {
					template: [
						['t4u/static-image', {
							classes: "absolute z-2 accent-first-filter w-[9.83%] h-auto top-[1%] right-[11.96%] rotate-[54deg]",
							url: "icons/rectangle-short.svg "
						}],
						['t4u/image', {
							classes: "ibg image-mask image-mask-2 image-mask-right-center z-1 bg-light-primary-60"
						}],
						['t4u/static-image', {
							classes: "absolute z-3 accent-second-filter w-[14.75%] h-auto left-0 top-1/2 -translate-y-1/2",
							url: "icons/circle.svg"
						}],
					],
					allowedBlocks: []
				}
			}],
		],
		allowedBlocks: []
	}

}];

export default function Edit({ attributes, setAttributes, clientId }) {
	const { isHide, margin, className, mask, variants } = attributes;

	const { updateBlockAttributes, insertBlock, removeBlock, selectBlock } = useDispatch('core/block-editor');

	const innerBlocks = useSelect((select) => select('core/block-editor').getBlocks(clientId), [clientId]);

	const blockProps = useBlockProps({
		className: clsx(
			'hero-v1-section pt-[100px] md:pt-[127px] xl:pt-[112px] overflow-hidden ',
			className,
			getSectionsMarginClasses(margin),
			{ ['hide-block']: isHide }
		)
	});

	const { children } = useInnerBlocksProps({}, {
		template: [
			['t4u/breadcrumbs', {
				classes: "text-sm"
			}],
			template1,
			['t4u/hero-buttons', {}]
		],
		allowedBlocks: ['t4u/inner-block']
	});

	const changeTemplate = (variants) => {
		if (variants === 1) {
			const container = innerBlocks[1];
			const buttons = innerBlocks[2];

			removeBlock(container.clientId);
			buttons && updateBlockAttributes(
				buttons.clientId, {
				isHide: false
			});
			setAttributes({ mask: 1 });

			const newBlock = wp.blocks.createBlock(...template1);
			insertBlock(newBlock, 1, clientId, false);
		}

		if (variants === 2) {
			const container = innerBlocks[1];
			const buttons = innerBlocks[2];

			removeBlock(container.clientId);
			buttons && updateBlockAttributes(
				buttons.clientId, {
				isHide: true
			});
			setAttributes({ mask: 2 });

			const newBlock = wp.blocks.createBlock(...template2);
			insertBlock(newBlock, 1, clientId, false);
		}

		selectBlock(clientId);
	}

	useEffect(() => {
		const decor1 = innerBlocks[1]?.innerBlocks[1]?.innerBlocks[0];
		const image = innerBlocks[1]?.innerBlocks[1]?.innerBlocks[1];
		const decor2 = innerBlocks[1]?.innerBlocks[1]?.innerBlocks[2];

		decor1 && updateBlockAttributes(
			decor1.clientId, {
			classes: decor1_classes[mask],
			url: decor1_urls[mask]
		});

		image && updateBlockAttributes(
			image.clientId, {
			classes: image_classes[mask]
		});

		decor2 && updateBlockAttributes(
			decor2.clientId, {
			classes: decor2_classes[mask],
			url: decor2_urls[mask]
		});
	}, [mask]);

	return (
		<>
			<InspectorControls>
				<IsHide isHide={isHide} setIsHide={(val) => setAttributes({ isHide: val })} />
				<MarginYControl
					size={margin}
					setSize={(s) => setAttributes({ margin: s })}
					sizesMap={SECTIONS_MARGIN_MAP}
				/>
				<PanelBody title="Варіанти відображення" initialOpen={true}>
					<RadioControl
						selected={variants}
						options={[
							{
								label: <img className="!h-[100px]" src={getUrlToStaticImages('general/preview-section-hero-v1.jpg')} />,
								value: 1
							},
							{
								label: <img className="!h-[100px]" src={getUrlToStaticImages('general/preview-section-hero-v2.jpg')} />,
								value: 2
							},
						]}
						onChange={(value) => {
							setAttributes({ variants: +value });
							changeTemplate(+value);
						}}
					/>
				</PanelBody>
				<PanelBody title="Варіанти масок" initialOpen={false}>
					<RadioControl
						selected={mask}
						options={[
							{
								label: <div className="aspect-[1/0.724] relative w-[100px]">
									<img className="absolute z-2 accent-first-filter w-[13.7%] h-auto top-0 right-[11.96%]" src={getUrlToStaticImages('icons/circle.svg')} />
									<img className="ibg image-mask image-mask-1 image-mask-right-center z-1 bg-light-primary-60" />
									<img className="absolute z-3 accent-second-filter w-[9.83%] h-auto left-0 bottom-[9%] origin-bottom-left rotate-[54deg]" src={getUrlToStaticImages('icons/rectangle.svg')} />
								</div>,
								value: 1
							},
							{
								label: <div className="aspect-[1/0.724] relative w-[100px]">
									<img className="absolute z-2 accent-first-filter w-[9.83%] h-auto top-[1%] right-[11.96%] rotate-[54deg]" src={getUrlToStaticImages('icons/rectangle-short.svg')} />
									<img className="ibg image-mask image-mask-2 image-mask-right-center z-1 bg-light-primary-60" />
									<img className="absolute z-3 accent-second-filter w-[14.75%] h-auto left-0 top-1/2 -translate-y-1/2" src={getUrlToStaticImages('icons/circle.svg')} />
								</div>,
								value: 2
							},
							{
								label: <div className="aspect-[1/0.724] relative w-[100px]">
									<img className="absolute z-2 accent-first-filter w-[9.83%] h-auto top-[4%] left-[4%] rotate-[-45deg]" src={getUrlToStaticImages('icons/rectangle-short.svg')} />
									<img className="ibg image-mask image-mask-3 image-mask-right-center z-1 bg-light-primary-60" />
									<img className="absolute z-3 accent-second-filter w-[14.75%] h-auto left-[54%] bottom-0 -translate-x-1/2" src={getUrlToStaticImages('icons/circle.svg')} />
								</div>,
								value: 3
							},
							{
								label: <div className="aspect-[1/0.724] relative w-[100px]">
									<img className="absolute z-2 accent-second-filter w-[9.83%] h-auto top-[4%] right-[7%] rotate-[54deg]" src={getUrlToStaticImages('icons/rectangle-short.svg')} />
									<img className="ibg image-mask image-mask-4 image-mask-right-center z-1 bg-light-primary-60" />
									<img className="absolute z-3 accent-first-filter w-[14.75%] h-auto left-0 bottom-[16%]" src={getUrlToStaticImages('icons/pac-man.svg')} />
								</div>,
								value: 4
							},
						]}
						onChange={(value) => setAttributes({ mask: +value })}
					/>
				</PanelBody>
			</InspectorControls>
			<section {...blockProps}>
				<div className="container pb-[30px] md:pb-[40px]">
					{children}
				</div>
			</section>
		</>
	);
}
