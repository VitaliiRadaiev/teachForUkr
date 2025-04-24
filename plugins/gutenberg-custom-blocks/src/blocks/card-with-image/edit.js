import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, PanelRow, FormToggle, RadioControl } from "@wordpress/components";
import { useSelect, useDispatch } from '@wordpress/data';
import { useEffect, useRef, useState } from "@wordpress/element";
import "./editor.scss";
import clsx from "clsx";
import { getUrlToStaticImages } from '../../utils/utils';
import { IconPicker } from "../../components/icon-picker/IconPicker";

export default function Edit({ attributes, setAttributes, clientId }) {
	const { classes, className, columns, mask, info, icon } = attributes;
	const { updateBlockAttributes } = useDispatch('core/block-editor');
	const innerBlocks = useSelect((select) => select('core/block-editor').getBlocks(clientId), [clientId]);
	const [isInfoShow, setIsInfoShow] = useState(false);
	const ref = useRef(null);
	const blockProps = useBlockProps({
		ref,
		className: clsx(
			'card-with-image card-rotate md-and-lg-max:[&:last-child:nth-child(odd)]:col-span-2',
			{ 'active': isInfoShow },
			classes,
			className,
			columns
		),
		onClick: (e) => {
			if (e.target.closest('[data-action="show-details"]')) {
				setIsInfoShow(true);
			}

			if (e.target.closest('[data-action="close-details"]')) {
				setIsInfoShow(false);
			}
		}
	});

	const { children } = useInnerBlocksProps({}, {
		template: [
			['t4u/inner-block', {
				classes: 'card-rotate-front nested-bg-item h-full rounded-[12px] flex flex-col md-max:flex-row-reverse gap-y-[15px] 4xl:gap-y-[20px]',
				simpleWrapper: true,
				options: {
					template: [
						['t4u/inner-block', {
							classes: 'hidden absolute z-3 top-[16px] lg:top-[30px] right-[16px] lg:right-[30px] cursor-pointer hover:scale-105 transition-transform',
							dataAttributes: {
								'data-action': 'show-details'
							},
							tag: 'button',
							simpleWrapper: true,
							options: {
								template: [
									['t4u/static-image', {
										classes: 'h-[30px] w-[30px] object-contain',
										url: 'icons/info.svg'
									}]
								],
								allowedBlocks: []
							}
						}],
						['t4u/inner-block', {
							classes: 'grow-0 shrink-0 md-max:pr-[16px] md:p-0',
							simpleWrapper: true,
							options: {
								template: [
									['t4u/inner-block', {
										classes: 'aspect-square md:aspect-[1/1.136] w-[144px] md:w-[61.49%] md:mx-auto relative',
										simpleWrapper: true,
										options: {
											template: [
												['t4u/inner-block', {
													classes: 'decor-icon absolute z-2 aspect-square w-[27%] md:w-[30.3%] top-[16px] md:top-[20px] 4xl:top-[30px] right-0 md:right-[-10%] flex items-center justify-center rounded-full bg-accent-first',
													simpleWrapper: true,
													options: {
														template: [
															['t4u/static-image', {
																classes: 'aspect-square w-[55%] object-cover color-light-primary-filter',
																url: 'icons/decor-icon-1.svg'
															}]
														],
														allowedBlocks: []
													}
												}],
												['t4u/image', {
													classes: 'ibg card-image-mask card-image-mask-1 image-mask-bottom-center z-1'
												}],
												['t4u/static-image', {
													classes: 'decor absolute z-2 accent-second-filter w-[13.88%] md:w-[15.15%] h-auto left-[13%] bottom-[10%]',
													url: 'icons/rectangle-middle.svg'
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
							classes: 'grow shrink p-[16px] md:px-[20px] md:pb-[20px] md:pt-0 flex flex-col sm-max:[&_.btn:not(.btn-with-arrow)]:w-full [&_.btn]:self-start',
							simpleWrapper: true,
							options: {
								template: [
									['t4u/heading', {
										classes: 'mb-[5px] text-dark-primary',
										htmlTeg: 'span',
										fontSize: 'lg'
									}],
									['t4u/simple-text', {
										classes: 'mb-[20px]',
										canAddItem: false
									}],
									['t4u/button', {
										classes: 'btn mt-auto',
										wrapperClasses: 'btn mt-auto',
										variant: 'btn-with-arrow', 
										acfField: 'text_more_details',
										acfFieldType: 'text'
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
				classes: 'card-rotate-back absolute top-0 left-0 h-full w-full nested-bg-item rounded-[12px] flex flex-col p-[20px] pt-[64px] sm-max:[&_.btn:not(.btn-with-arrow)]:w-full [&_.btn]:self-start',
				simpleWrapper: true,
				options: {
					template: [
						['t4u/simple-html', {
							html: '<button data-action="close-details" class="absolute top-[20px] right-[20px] icon-x-mark flex items-center justify-center h-[44px] w-[44px] rounded-[8px] bg-dark-primary text-light-primary text-sm transition-colors hover:bg-dark-primary-80"></button>'
						}],
						['t4u/heading', {
							classes: 'text-dark-primary',
							htmlTeg: 'span',
							fontSize: 'lg'
						}],
						['t4u/inner-block', {
							classes: 'mt-[10px] lg:mt-[20px] mb-[20px] h-full overflow-auto',
							simpleWrapper: true,
							options: {
								template: [
									['t4u/inner-block', {
										classes: 'max-h-full [&_.swiper-scrollbar]:right-0',
										dataAttributes: {
											'data-scroll-container': null
										},
										simpleWrapper: true,
										options: {
											template: [
												['t4u/simple-text', {
													classes: 'text-dark-primary pr-[10px]',
												}],
											],
											allowedBlocks: []
										}
									}]
								],
								allowedBlocks: []
							}
						}],
						['t4u/button', {
							classes: 'btn',
							variant: 'btn-with-enter-arrow'
						}]
					],
					allowedBlocks: []
				}
			}]
		],
		allowedBlocks: []
	})

	const toggleShowInfoBtn = () => {
		const btn = innerBlocks[0]?.innerBlocks[0];
		if (btn) {
			updateBlockAttributes(btn.clientId, {
				classes: clsx(
					'absolute z-3 top-[16px] lg:top-[30px] right-[16px] lg:right-[30px] cursor-pointer hover:scale-105 transition-transform',
					{
						'hidden': info
					}
				)
			});
		}
	}

	const setIcon = (iconUrl) => {
		const staticImage = innerBlocks[0]?.innerBlocks[1]?.innerBlocks[0]?.innerBlocks[0]?.innerBlocks[0];
		staticImage && updateBlockAttributes(staticImage.clientId, {
			url: iconUrl
		})
	}

	useEffect(() => {
		const cardRotateRront = innerBlocks[0];
		const imageWrap = innerBlocks[0]?.innerBlocks[1];
		const imageContainer = innerBlocks[0]?.innerBlocks[1]?.innerBlocks[0];
		const decorIcon = innerBlocks[0]?.innerBlocks[1]?.innerBlocks[0]?.innerBlocks[0];
		const img = innerBlocks[0]?.innerBlocks[1]?.innerBlocks[0]?.innerBlocks[1];
		const decor = innerBlocks[0]?.innerBlocks[1]?.innerBlocks[0]?.innerBlocks[2];
		const textWrapper = innerBlocks[0]?.innerBlocks[2];

		cardRotateRront && updateBlockAttributes(cardRotateRront.clientId, {
			classes: clsx(
				'card-rotate-front nested-bg-item h-full rounded-[12px] flex flex-col not-hover gap-y-[15px]',
				{
					'md-max:flex-row-reverse': !info,
					'4xl:gap-y-[20px]': columns === 'lg:col-span-3',
					'lg:gap-y-[30px] 4xl:gap-y-[40px]': columns === 'lg:col-span-6' || columns === 'lg:col-span-4'
				}
			)
		});

		imageWrap && updateBlockAttributes(imageWrap.clientId, {
			classes: clsx(
				'grow-0 shrink-0',
				{ 'md-max:pr-[16px] md:p-0': !info }
			)
		});

		imageContainer && updateBlockAttributes(imageContainer.clientId, {
			classes: clsx(
				'relative',
				{
					'aspect-square w-[144px]': !info,
					'md:aspect-[1/1.136] md:w-[61.49%] md:mx-auto': !info && (mask === 1),
					'aspect-[1/1.136] w-[61.49%] mx-auto': info && (mask === 1),

					'md:aspect-[1/0.7] md:w-[73%] md:mx-auto': !info && (mask === 2),
					'aspect-[1/0.7] w-[73%] mx-auto': info && (mask === 2),
				}
			)
		});

		decorIcon && updateBlockAttributes(decorIcon.clientId, {
			classes: clsx(
				'decor-icon absolute z-2 aspect-square flex items-center justify-center rounded-full bg-accent-first md:right-[-10%]',
				{
					'w-[27%] right-0 top-[16px] md:top-[20px] 4xl:top-[30px]': !info,
					'w-[18.95%] right-[10%] top-[16px] md:top-[20px] 4xl:top-[30px]': info && (mask === 1),

					'w-[16.39%] right-0 top-[63%] right-[20%] md:top-[62%] md:right-[10%] lg:top-[20px]': info && (mask === 2),

					'md:w-[30.3%] md:right-0': mask === 1,
					'md:w-[25.53%]': mask === 2,

					'lg:w-[22.98%] lg:right-[6%]': (mask === 1) && (columns === 'lg:col-span-4'),
					'lg:w-[15.07%] lg:right-[16%]': (mask === 1) && (columns === 'lg:col-span-6'),

					'lg:w-[19.35%] lg:right-0': (mask === 2) && (columns === 'lg:col-span-4'),
					'lg:w-[12.37%] lg:right-[7%]': (mask === 2) && (columns === 'lg:col-span-6'),
				}
			)
		});

		decor && updateBlockAttributes(decor.clientId, {
			classes: clsx(
				'decor absolute z-2 accent-second-filter h-auto',
				{
					'w-[13.88%] left-[13%] bottom-[10%]': !info,

					'w-[9.47%] left-[15%] bottom-[13%]': info && (mask === 1),
					'w-[8.19%] left-[9%] bottom-[6%]': info && (mask === 2),

					'md:w-[15.15%] md:left-[13%] md:bottom-[10%]': mask === 1,
					'md:w-[12.76%] md:left-[6%] md:bottom-0': mask === 2,

					'lg:w-[11.49%]': (mask === 1) && (columns === 'lg:col-span-4'),
					'lg:w-[7.53%] lg:left-[17%] lg:bottom-[13%]': (mask === 1) && (columns === 'lg:col-span-6'),

					'lg:w-[9.67%] lg:left-[14%]': (mask === 2) && (columns === 'lg:col-span-4'),
					'lg:w-[6.18%] lg:left-[16%] lg:bottom-[5%]': (mask === 2) && (columns === 'lg:col-span-6'),
				}

			)
		});

		img && updateBlockAttributes(img.clientId, {
			classes: clsx(
				'ibg card-image-mask z-1',
				{
					'card-image-mask-1 image-mask-bottom-center': mask === 1,
					'card-image-mask-2 image-mask-center md:image-mask-bottom-center': (mask === 2) && !info,
					'card-image-mask-2 image-mask-bottom-center': (mask === 2) && info,
				}
			)
		});

		textWrapper && updateBlockAttributes(textWrapper.clientId, {
			classes: clsx(
				'grow shrink p-[16px] md:px-[20px] md:pb-[20px] md:pt-0 flex flex-col sm-max:[&_.btn:not(.btn-with-arrow)]:w-full [&_.btn]:self-start',
				{
					'pt-0': info
				}
			)
		});

	}, [columns, mask, info]);


	return (
		<>
			<InspectorControls>
				<PanelBody opened={true}>
					<PanelRow>
						<label className="flex items-center gap-x-[10px] cursor-pointer">
							<FormToggle
								checked={info}
								onChange={() => {
									setAttributes({ info: !info });
									toggleShowInfoBtn();
								}}
							/>
							<span className="text-sm">Додати інформацію на розвороті</span>
						</label>
					</PanelRow>
				</PanelBody>
				<PanelBody title="Варіанти масок" initialOpen={false}>
					<RadioControl
						selected={mask}
						options={[
							{
								label: <img className="!h-[100px] w-auto" src={getUrlToStaticImages('general/card-image-mask-1.svg')} />,
								value: 1
							},
							{
								label: <img className="!h-[100px] w-auto" src={getUrlToStaticImages('general/card-image-mask-2.svg')} />,
								value: 2
							},
						]}
						onChange={(value) => setAttributes({ mask: +value })}
					/>
				</PanelBody>
				<PanelBody title="Розмір карточки" initialOpen={false}>
					<RadioControl
						selected={columns}
						options={[
							{
								label: <span>1/4</span>,
								value: 'lg:col-span-3'
							},
							{
								label: <span>1/3</span>,
								value: 'lg:col-span-4'
							},
							{
								label: <span>1/2</span>,
								value: 'lg:col-span-6'
							}
						]}
						onChange={(value) => setAttributes({ columns: value })}
					/>
				</PanelBody>
				<IconPicker iconUrl={icon} setIconUrl={(iconUrl) => {
					setAttributes({ icon: iconUrl });
					setIcon(iconUrl);
				}} />
			</InspectorControls>
			<div {...blockProps}>
				{children}
			</div>
		</>
	);
}
