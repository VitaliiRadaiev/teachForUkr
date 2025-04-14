import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls
} from "@wordpress/block-editor";
import { PanelBody, PanelRow, FormToggle, RadioControl } from "@wordpress/components";
import { useSelect, useDispatch } from '@wordpress/data';
import { useEffect, useRef } from "@wordpress/element";
import "./editor.scss";
import clsx from "clsx";


export default function Edit({ attributes, setAttributes, clientId }) {
	const { classes, className, columns, mask, info } = attributes;
	const { updateBlockAttributes } = useDispatch('core/block-editor');
	const innerBlocks = useSelect((select) => select('core/block-editor').getBlocks(clientId), [clientId]);

	const blockProps = useBlockProps({
		className: clsx(
			'card-with-image card-rotate md-and-lg-max:[&:last-child:nth-child(odd)]:col-span-2',
			classes,
			className,
			columns
		)
	});

	const { children } = useInnerBlocksProps({}, {
		template: [
			['t4u/inner-block', {
				classes: 'card-rotate-front nested-bg-item h-full rounded-[12px] flex flex-col md-max:flex-row-reverse gap-y-[15px] 4xl:gap-y-[20px]',
				simpleWrapper: true,
				options: {
					template: [
						['t4u/inner-block', {
							classes: 'absolute z-3 top-[16px] lg:top-[30px] right-[16px] lg:right-[30px] cursor-pointer hover:scale-105 transition-transform',
							dataAttributes: {
								'data-action': 'show-details'
							},
							tag: 'button',
							simpleWrapper: true,
							options: {
								template: [
									['t4u/static-image', {
										classes: 'hidden h-[44px] lg:h-[30px] w-[44px] lg:w-[30px] object-contain',
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
										classes: 'mt-auto',
										variant: 'btn-with-arrow'
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
									console.log(innerBlocks);
									
								}}
							/>
							<span>Додати інформацію на розвороті</span>
						</label>
					</PanelRow>
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
							},
							{
								label: <span>1/1</span>,
								value: 'lg:col-span-12'
							}
						]}
						onChange={(value) => setAttributes({ columns: value })}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				{children}
			</div>
		</>
	);
}
