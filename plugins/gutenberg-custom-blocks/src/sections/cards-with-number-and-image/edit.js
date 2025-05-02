import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls
} from "@wordpress/block-editor";
import { useEffect } from "@wordpress/element";
import { useSelect, useDispatch } from "@wordpress/data";
import "./editor.scss";
import clsx from "clsx";
import { getSectionsPaddingClasses, getSectionsMarginClasses, getUrlToStaticImages } from "../../utils/utils";
import { DefaultSectionsControls } from "../../components/default-sections-controls/DefaultSectionsControls";
import { SectionsDecorPicker } from "../../components/section-decor-picker/SectionsDecorPicker";
import { SectionDecor } from "../../ui/section-decor/SectionDecor";

export default function Edit({ attributes, setAttributes, clientId }) {
	const { preview, isHide, padding, margin, background, className, decor } = attributes;
	const { updateBlockAttributes } = useDispatch('core/block-editor');
	const innerBlocks = useSelect((select) => select('core/block-editor').getBlocks(clientId), [clientId]);

	const blockProps = useBlockProps({
		className: clsx(
			'cards-with-number-and-image-section rounded-[20px] md:rounded-[30px] relative',
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
				classes: 'mt-[30px] md:mt-[50px] flex flex-col lg:flex-row gap-[10px] md:gap-[20px] xl:gap-[25px] first-child-no-margin',
				simpleWrapper: true,
				options: {
					template: [
						['t4u/inner-block', {
							classes: 'flex flex-col gap-[10px] md:gap-[20px] lg:shrink-0 lg:grow-0 lg:w-[260px] xl:w-[312px] 4xl:w-[415px]',
							canAddItem: true,
							options: {
								template: [
									['t4u/card-with-number-item', {}],
									['t4u/card-with-number-item', {}]
								],
								allowedBlocks: ['t4u/card-with-number-item']
							}
						}],
						['t4u/inner-block', {
							classes: 'aspect-[1/0.685] lg:aspect-auto lg:min-h-[443px] 4xl:min-h-[603px] lg:shrink lg:grow rounded-[12px] relative overflow-hidden',
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
							classes: 'flex flex-col gap-[10px] md:gap-[20px] lg:shrink-0 lg:grow-0 lg:w-[260px] xl:w-[312px] 4xl:w-[415px]',
							canAddItem: true,
							options: {
								template: [
									['t4u/card-with-number-item', {}],
									['t4u/card-with-number-item', {}]
								],
								allowedBlocks: ['t4u/card-with-number-item']
							}
						}]
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


	useEffect(() => {
		const list1 = innerBlocks[1]?.innerBlocks[0];
		const list2 = innerBlocks[1]?.innerBlocks[2];
		if(list1 && list2) {
			list1.innerBlocks.forEach((card, index) => {
				const simpleHtml = card.innerBlocks[0]?.innerBlocks[0];
				const formattedIndex = index < 9 ? `0${index + 1}` : `${index + 1}`;
				simpleHtml && updateBlockAttributes(simpleHtml.clientId, {
					text: formattedIndex
				});
			})

			list2.innerBlocks.forEach((card, index) => {
				const simpleHtml = card.innerBlocks[0]?.innerBlocks[0];
				const combineIndex = list1.innerBlocks.length + index;
				const formattedIndex = combineIndex < 9 ? `0${combineIndex + 1}` : `${combineIndex + 1}`;
				simpleHtml && updateBlockAttributes(simpleHtml.clientId, {
					text: formattedIndex
				});
			})
		}
	}, [innerBlocks]);

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
