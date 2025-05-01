import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls
} from "@wordpress/block-editor";
import { PanelBody, RadioControl } from "@wordpress/components";
import { useEffect } from "@wordpress/element";
import { useSelect, useDispatch } from '@wordpress/data';
import "./editor.scss";
import clsx from "clsx";
import { getSectionsPaddingClasses, getSectionsMarginClasses, getUrlToStaticImages } from "../../utils/utils";
import { DefaultSectionsControls } from "../../components/default-sections-controls/DefaultSectionsControls";
import { SectionsDecorPicker } from "../../components/section-decor-picker/SectionsDecorPicker";
import { SectionDecor } from "../../ui/section-decor/SectionDecor";

export default function Edit({ attributes, setAttributes, clientId }) {
	const { isHide, padding, margin, background, className, decor, directions } = attributes;
	const { updateBlockAttributes } = useDispatch('core/block-editor');
	const innerBlocks = useSelect((select) => select('core/block-editor').getBlocks(clientId), [clientId]);

	const blockProps = useBlockProps({
		className: clsx(
			'cards-with-cions-and-text-section rounded-[20px] md:rounded-[30px] relative',
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
				classes: 'lg:order-1',
				simpleWrapper: true,
				options: {
					template: [
						['t4u/sup-title', {}],
						['t4u/heading', { classes: "mt-[16px] md:mt-[20px] text-dark-primary" }],
						['t4u/simple-text', {
							classes: "mt-[20px] lg:mt-[30px]",
							fontSize: "md",
							container: 'sm'
						}],
					],
					allowedBlocks: []
				}

			}],
			['t4u/inner-block', {
				classes: "min-h-[100px] lg:order-2 mt-[30px] md:mt-[50px] lg:mt-0 grid gap-[10px] md:gap-[20px] lg:gap-[24px] 4xl:gap-[30px] grid-cols-2 lg:row-span-2",
				canAddItem: true,
				options: {
					template: [
						['t4u/card-with-icon-item', {}]
					],
					allowedBlocks: ['t4u/card-with-icon-item']
				}
			}],
			["t4u/buttons-group", {
				classes: "order-3 mt-[40px] xl:mt-[50px] 4xl:mt-[60px] button-group",
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

	useEffect(() => {
		const head = innerBlocks[0];
		const cardsList = innerBlocks[1];

		head && updateBlockAttributes(head.clientId, {
			classes: clsx({
				'lg:order-1': directions === 'right',
				'order-2 lg:order-2 mt-[40px] lg:mt-0': directions === 'left',
			})
		})
		cardsList && updateBlockAttributes(cardsList.clientId, {
			classes: clsx(
				'grid gap-[10px] md:gap-[20px] lg:gap-[24px] 4xl:gap-[30px] grid-cols-2 lg:row-span-2',
				{
					'lg:order-2 mt-[30px] md:mt-[50px] lg:mt-0 ': directions === 'right',
					'order-1 lg:order-1': directions === 'left',
				})
		})

	}, [directions]);

	return (
		<>
			<InspectorControls>
				<DefaultSectionsControls attributes={attributes} setAttributes={setAttributes} />
				<PanelBody title="Відображення секції" initialOpen={true}>
					<RadioControl
						selected={directions}
						options={[
							{
								label: <img className="!h-[100px] w-auto" src={getUrlToStaticImages(`general/cards-with-cions-and-text-left.jpg`)} alt="icon" />,
								value: 'left'
							},
							{
								label: <img className="!h-[100px] w-auto" src={getUrlToStaticImages(`general/cards-with-cions-and-text-right.jpg`)} alt="icon" />,
								value: 'right'
							},
						]}
						onChange={(value) => setAttributes({ directions: value })}
					/>
				</PanelBody>
				<SectionsDecorPicker decor={decor} setDecor={(value) => setAttributes({ decor: value })} />
			</InspectorControls>
			<section {...blockProps}>
				<SectionDecor decor={decor} />
				<div className={clsx(
					'container relative z-2 grid lg:items-start lg:grid-rows-[auto_1fr] lg:gap-x-[40px] 2xl:gap-x-[60px] 4xl:gap-x-[70px]',
					{
						'lg:grid-cols-[1fr_49%]': directions === 'right',
						'lg:grid-cols-[49%_1fr]': directions === 'left'
					}
				)}>
					{children}
				</div>
			</section>
		</>
	);
}
