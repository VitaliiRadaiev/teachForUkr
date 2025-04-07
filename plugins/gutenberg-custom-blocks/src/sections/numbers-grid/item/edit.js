import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls
} from "@wordpress/block-editor";
import { PanelBody, RadioControl } from "@wordpress/components";
import { useSelect, useDispatch } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
import { getUrlToStaticImages } from "../../../utils/utils";
import "./editor.scss";
import clsx from "clsx";


export default function Edit({ attributes, setAttributes, clientId }) {
	const { columns, rows, variants } = attributes;

	const { updateBlockAttributes } = useDispatch('core/block-editor');

	const innerBlocks = useSelect((select) => select('core/block-editor').getBlocks(clientId), [clientId]);

	const blockProps = useBlockProps({
		className: clsx(
			"numbers-grid-card nested-bg-item p-[5px] rounded-[12px] flex flex-col gap-[5px] lg:gap-y-[15px] md-and-lg-max:[&:last-child:nth-child(odd)]:col-span-2",
			rows,
			columns,
			{
				'lg:row-span-2': variants === 'top',
				'lg:flex-row': variants === 'left',
				'lg:flex-row-reverse': variants === 'right',
			}
		)
	});

	const { children } = useInnerBlocksProps({}, {
		template: [
			['t4u/inner-block', {
				classes: 'grow-0 shrink-0',
				simpleWrapper: true,
				options: {
					template: [
						['t4u/inner-block', {
							classes: 'aspect-[1/0.48] md:aspect-[1/0.346] relative lg:aspect-auto lg:pb-[34.6%]',
							simpleWrapper: true,
							options: {
								template: [
									['t4u/image', {
										classes: "ibg rounded-[8px]"
									}],
								],
								allowedBlocks: []
							},
							allowedBlocks: []
						}],
					],
					allowedBlocks: []
				},
				allowedBlocks: []
			}],
			['t4u/inner-block', {
				classes: 'p-[15px] grow shrink',
				simpleWrapper: true,
				options: {
					template: [
						['t4u/heading', {
							htmlTeg: "span",
						}],
						['t4u/heading', {
							classes: "mt-[16px] md:mt-[20px] first-child-no-margin",
							htmlTeg: "span",
							fontSize: "lg"
						}],
						['t4u/simple-text', {
							classes: "mt-[7px] first-child-no-margin",
							canAddItem: false
						}],
					],
					allowedBlocks: []
				},
				allowedBlocks: []
			}],
		],
		allowedBlocks: []
	})

	useEffect(() => {
		const imageFlexContainer = innerBlocks[0];
		const imageContaienr = innerBlocks[0]?.innerBlocks[0];

		imageFlexContainer && updateBlockAttributes(
			imageFlexContainer.clientId, { 
				classes: clsx({
					'grow-0 shrink-0': variants === 'top',
					'grow-0 shrink-0 lg:w-[32.45%]': (variants === 'left' || variants === 'right')
				})
			}
		);

		imageContaienr && updateBlockAttributes(
			imageContaienr.clientId, { 
				classes: clsx({
					'aspect-[1/0.48] md:aspect-[1/0.346] relative lg:aspect-auto lg:pb-[34.6%]': variants === 'top',
					'aspect-[1/0.48] md:aspect-[1/0.346] relative lg:aspect-auto lg:pb-[86.9%] lg:min-h-full': (variants === 'left' || variants === 'right')
				})
			}
		);

	}, [variants]);

	return (
		<>
			<InspectorControls>
				<PanelBody title="Варіанти відображення" initialOpen={true}>
					<RadioControl
						selected={variants}
						options={[
							{
								label: <img className="" src={getUrlToStaticImages(`general/numbers-grid-item-top.jpg`)} alt="icon" />,
								value: 'top'
							},
							{
								label: <img className="" src={getUrlToStaticImages(`general/numbers-grid-item-left.jpg`)} alt="icon" />,
								value: 'left'
							},
							{
								label: <img className="" src={getUrlToStaticImages(`general/numbers-grid-item-right.jpg`)} alt="icon" />,
								value: 'right'
							},
						]}
						onChange={(value) => setAttributes({ variants: value })}
					/>
				</PanelBody>
				<PanelBody title="Розмір карточки" initialOpen={true}>
					<RadioControl
						selected={columns}
						options={[
							{
								label: <span>1/2</span>,
								value: ''
							},
							{
								label: <span>1/1</span>,
								value: 'lg:col-span-2'
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