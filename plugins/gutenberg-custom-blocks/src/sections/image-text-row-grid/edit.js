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
	const { preview, isHide, padding, margin, background, className, decor, variants } = attributes;
	
	const { updateBlockAttributes } = useDispatch('core/block-editor');
	const innerBlocks = useSelect((select) => select('core/block-editor').getBlocks(clientId), [clientId]);

	const blockProps = useBlockProps({
		className: clsx(
			'image-text-row-grid-section rounded-[20px] md:rounded-[30px] relative',
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
				classes: 'min-h-[100px] mt-[30px] md:mt-[50px] first-child-no-margin flex flex-col gap-[40px] 4xl:gap-[60px] lg:[&_.item:nth-child(even)]:flex-row-reverse',
				canAddItem: true,
				options: {
					template: [
						['t4u/image-text-row-grid-item', {}],
						['t4u/image-text-row-grid-item', {}],
					],
					allowedBlocks: ['t4u/image-text-row-grid-item']
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
	});

	useEffect(() => {
		const cardsList = innerBlocks[1];
		
		cardsList && updateBlockAttributes(cardsList.clientId, {
			classes: clsx(
				'min-h-[100px] mt-[30px] md:mt-[50px] 4xl:mt-[60px] first-child-no-margin flex flex-col gap-[40px] 4xl:gap-[60px]',
				{
					'lg:[&_.item:nth-child(even)]:flex-row-reverse': variants === 'even',
					'lg:[&_.item:nth-child(odd)]:flex-row-reverse': variants === 'odd',
				}
			)
		})

	}, [variants, innerBlocks]);

	if (preview) {
		return <img src={getUrlToStaticImages(preview)} />
	}

	return (
		<>
			<InspectorControls>
				<DefaultSectionsControls attributes={attributes} setAttributes={setAttributes} />
				<PanelBody title="Відображення секції" initialOpen={true}>
					<RadioControl
						selected={variants}
						options={[
							{
								label: <img className="!h-[100px] w-auto" src={getUrlToStaticImages(`general/image-text-row-grid-even.jpg`)} alt="icon" />,
								value: 'even'
							},
							{
								label: <img className="!h-[100px] w-auto" src={getUrlToStaticImages(`general/image-text-row-grid-odd.jpg`)} alt="icon" />,
								value: 'odd'
							},
						]}
						onChange={(value) => setAttributes({ variants: value })}
					/>
				</PanelBody>
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
