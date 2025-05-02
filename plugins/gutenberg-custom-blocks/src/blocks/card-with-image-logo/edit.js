import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls
} from "@wordpress/block-editor";
import { PanelBody, RadioControl } from "@wordpress/components";
import "./editor.scss";
import clsx from "clsx";


export default function Edit({ attributes, setAttributes }) {
	const { classes, className, columns } = attributes;
	const blockProps = useBlockProps({
		className: clsx(
			'card-with-image-logo shrink-0 grow-0 relative nested-bg-item rounded-[12px] p-[5px] flex flex-col',
			classes,
			className,
			columns
		)
	});

	const { children } = useInnerBlocksProps({}, {
		template: [
			['t4u/inner-block', {
				classes: 'aspect-[1/0.597] grow-0 shrink-0 rounded-[8px] bg-dark-primary-10 overflow-hidden relative',
				simpleWrapper: true,
				options: {
					template: [
						['t4u/image', {
							classes: 'ibg'
						}]
					],
					allowedBlocks: []
				}
			}],
			['t4u/inner-block', {
				classes: 'grow shrink mt-[16px] md:mt-[20px] xl:mt-[30px] pb-[11px] px-[11px] md:pb-[15px] md:px-[15px] flex flex-col first-no-margin last-no-margin sm-max:[&_.btn:not(.btn-with-arrow)]:w-full [&_.btn]:self-start',
				simpleWrapper: true,
				options: {
					template: [
						['t4u/inner-block', {
							classes: 'h-[30px] flex items-center [&_img:not([src])]:w-[140px]',
							options: {
								template: [
									['t4u/image', {
										classes: 'h-auto w-auto max-h-full max-w-full'
									}]
								],
								allowedBlocks: []
							}
						}],
						['t4u/heading', {
							classes: 'mt-[16px] text-dark-primary',
							fontSize: 'lg'
						}],
						['t4u/simple-text', {
							classes: 'mt-[5px] mb-[20px]',
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
	});

	return (
		<>
			<InspectorControls>
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
