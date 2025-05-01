import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls
} from "@wordpress/block-editor";
import { useEffect } from "@wordpress/element";
import { PanelBody, RadioControl } from "@wordpress/components";
import { useSelect, useDispatch } from '@wordpress/data';
import "./editor.scss";
import clsx from "clsx";
import { getUrlToStaticImages } from "../../utils/utils";


export default function Edit({ attributes, setAttributes, clientId }) {
	const { classes, className, columns, direction } = attributes;

	const { updateBlockAttributes } = useDispatch('core/block-editor');
	const { blockIndex, innerBlocks } = useSelect((select) => {
		const { getBlocks, getBlockIndex } = select('core/block-editor')
		return { blockIndex: getBlockIndex(clientId), innerBlocks: getBlocks(clientId) }
	}, [clientId]);

	const formattedIndex = blockIndex < 9 ? `0${blockIndex + 1}` : `${blockIndex + 1}`;

	const blockProps = useBlockProps({
		className: clsx(
			'card-with-number nested-bg-item rounded-[12px] p-[16px] md:p-[20px] flex gap-y-[20px] md:gap-y-[40px] gap-x-[14px] md:gap-x-[20px] md-and-lg-max:[&:last-child:nth-child(odd)]:col-span-2',
			classes,
			className,
			columns,
			direction
		)
	});

	const { children } = useInnerBlocksProps({}, {
		template: [
			['t4u/inner-block', {
				classes: 'grow-0 shrink-0 h-[44px] w-[44px] pt-[2px] rounded-full border border-accent-first bg-accent-first-10 flex items-center justify-center font-bold text-md text-accent-first',
				simpleWrapper: true,
				options: {
					template: [
						['t4u/simple-html', {
							text: '01'
						}]
					],
					allowedBlocks: []
				}
			}],
			['t4u/inner-block', {
				classes: 'shrink grow flex flex-col first-no-margin last-no-margin sm-max:[&_.btn:not(.btn-with-arrow)]:w-full [&_.btn]:self-start [&:not(:has(.btn)):not(:has(.title))]:self-center',
				simpleWrapper: true,
				options: {
					template: [
						['t4u/heading', {
							classes: 'text-dark-primary mb-[10px] title',
							htmlTeg: 'span',
							fontSize: 'lg'
						}],
						['t4u/simple-text', {
							classes: 'mb-[20px] text-dark-primary shrink grow',
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
			}],
		],
		allowedBlocks: []
	});

	useEffect(() => {
		const simpleHtml = innerBlocks[0]?.innerBlocks[0];

		simpleHtml && updateBlockAttributes(simpleHtml.clientId, {
			text: formattedIndex
		})
	}, [formattedIndex, innerBlocks]);

	return (
		<>
			<InspectorControls>
				<PanelBody title="Варіанти відображення" initialOpen={true}>
					<RadioControl
						selected={direction}
						options={[
							{
								label: <img className="" src={getUrlToStaticImages(`general/card-with-icon-col.jpg`)} alt="icon" />,
								value: 'flex-col'
							},
							{
								label: <img className="" src={getUrlToStaticImages(`general/card-with-icon-row.jpg`)} alt="icon" />,
								value: 'flex-row'
							}
						]}
						onChange={(value) => setAttributes({ direction: value })}
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
							},
							{
								label: <span>1/1</span>,
								value: 'lg:col-span-12'
							},
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
