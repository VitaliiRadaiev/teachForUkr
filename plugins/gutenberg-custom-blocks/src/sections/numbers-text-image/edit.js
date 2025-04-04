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
import { getSectionsPaddingClasses, getSectionsMarginClasses, getUrlToStaticImages } from "../../utils/utils";
import { DefaultSectionsControls } from "../../components/default-sections-controls/DefaultSectionsControls";


export default function Edit({ attributes, setAttributes, clientId }) {
	const { isHide, padding, margin, background, className, directions } = attributes;
	const blockProps = useBlockProps({
		className: clsx(
			'numbers-text-image-section rounded-[20px] md:rounded-[30px] overflow-hidden',
			className,
			background,
			getSectionsMarginClasses(margin),
			getSectionsPaddingClasses(padding),
			{ ['hide-block']: isHide }
		)
	});

	const { updateBlockAttributes } = useDispatch('core/block-editor');

	const innerBlocks = useSelect((select) => select('core/block-editor').getBlocks(clientId), [clientId]);

	const { children } = useInnerBlocksProps({}, {
		template: [
			['t4u/inner-block', {
				classes: 'lg:shrink-0 lg:grow-0 lg:w-[49%] lg:max-w-[468px] xl:max-w-[865px]',
				simpleWrapper: true,
				options: {
					template: [
						['t4u/sup-title', {}],
						['t4u/heading', {
							classes: "mt-[16px] md:mt-[20px] text-dark-primary",
							fontSize: "lg"
						}],
						['t4u/simple-text', {
							classes: "mt-[10px] md:mt-[20px] 4xl:mt-[30px]",
							fontSize: "sm",
						}],
						['t4u/inner-block', {
							classes: "mt-[30px] 4xl:mt-[40px] grid gap-[10px] md:gap-[20px] lg:gap-[10px] xl:table xl:border-spacing-y-[10px] 4xl:border-spacing-y-[20px]",
							canAddItem: true,
							options: {
								template: [
									['t4u/numbers-card', {}]
								],
								allowedBlocks: ['t4u/numbers-card']
							}
						}],
						["t4u/buttons-group", {
							classes: 'mt-[40px] xl:mt-[50px]',
							options: {
								template: [
									["t4u/button", {
										acfField: 'link_become_partner'
									}],
								],
								allowedBlocks: ['t4u/button']
							}
						}],
					],
					allowedBlocks: []
				}

			}],
			['t4u/inner-block', {
				classes: "mt-[30px] md:mt-[40px] lg:mt-0 relative aspect-[1/0.9] lg:aspect-auto lg:min-h-[536px] 4xl:min-h-[730px] lg:shrink lg:grow",
				simpleWrapper: true,
				options: {
					template: [
						['t4u/image', {
							classes: "ibg rounded-[12px] z-1"
						}],
						['t4u/static-image', {
							classes: 'absolute z-2 top-0 h-[138px] md:h-[245px] w-auto left-[-64px] md:left-[-125px] lg:left-[-165px] aos-rotate-left',
							url: "general/rectangle-turn-left.svg"
						}]
					],
					allowedBlocks: []
				}
			}]
		],
		allowedBlocks: []
	})

	useEffect(() => {
		if (innerBlocks[1]?.innerBlocks[1]?.name === 't4u/static-image') {
			updateBlockAttributes(innerBlocks[1].innerBlocks[1].clientId, {
				classes: clsx(
					'absolute z-2 top-0 h-[138px] md:h-[245px] w-auto',
					{
						'left-[-64px] md:left-[-125px] lg:left-[-165px] aos-rotate-left': directions === 'left',
						'right-[-64px] md:right-[-125px] lg:right-[-165px] aos-rotate-right': directions === 'right'
					}
				),
				url: clsx({
					'general/rectangle-turn-left.svg': directions === 'left',
					'general/rectangle-turn-right.svg': directions === 'right',
				})
			});
		}
	}, [directions]);

	return (
		<>
			<InspectorControls>
				<DefaultSectionsControls attributes={attributes} setAttributes={setAttributes} />
				<PanelBody title="Відображення секції" initialOpen={false}>
					<RadioControl
						selected={directions}
						options={[
							{
								label: <img className="!h-[100px] w-auto" src={getUrlToStaticImages(`general/preview-section-numbers-text-image-left.jpg`)} alt="icon" />,
								value: 'left'
							},
							{
								label: <img className="!h-[100px] w-auto" src={getUrlToStaticImages(`general/preview-section-numbers-text-image.jpg`)} alt="icon" />,
								value: 'right'
							},
						]}
						onChange={(value) => setAttributes({ directions: value })}
					/>
				</PanelBody>
			</InspectorControls>
			<section {...blockProps}>
				<div className={clsx(
					'container lg:flex lg:gap-x-[65px]',
					{
						'lg:flex-row-reverse': directions === 'left',
						'lg:flex-row': directions === 'right',
					}
				)}>
					{children}
				</div>
			</section>
		</>
	);
}
