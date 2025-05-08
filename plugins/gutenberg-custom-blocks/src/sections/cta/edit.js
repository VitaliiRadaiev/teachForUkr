import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls
} from "@wordpress/block-editor";
import { PanelBody, RadioControl } from "@wordpress/components";
import "./editor.scss";
import clsx from "clsx";
import { getSectionsPaddingClasses, getSectionsMarginClasses, getUrlToStaticImages } from "../../utils/utils";
import { DefaultSectionsControls } from "../../components/default-sections-controls/DefaultSectionsControls";
import { SectionsDecorPicker } from "../../components/section-decor-picker/SectionsDecorPicker";
import { SectionDecor } from "../../ui/section-decor/SectionDecor";
import { CtaBgColorPallet } from "../../components/cta-bg-color-pallet/CtaBgColorPallet";

export default function Edit({ attributes, setAttributes }) {
	const { preview, isHide, padding, margin, background, colorBackground, directions, className, decor } = attributes;
	const blockProps = useBlockProps({
		className: clsx(
			'cta-section rounded-[20px] md:rounded-[30px] relative',
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
				classes: 'relative z-2 py-[40px] xl:py-[60px] px-[16px] xl:px-0 grow-0 shrink-0 xl:w-[610px] 4xl:w-[800px]',
				simpleWrapper: true,
				options: {
					template: [
						['t4u/sup-title', {}],
						['t4u/heading', {
							classes: "mt-[16px] md:mt-[20px] text-dark-primary w-full",
							container: "full",
						}],
						['t4u/simple-text', {
							classes: "mt-[10px] md:mt-[20px] text-light-primary w-full",
							container: "full"
						}],
						["t4u/buttons-group", {
							classes: 'mt-[40px] md:mt-[50px] xl:mt-[60px] button-group',
							alignment: 'left',
							options: {
								template: [
									["t4u/button", {}],
								],
								allowedBlocks: ['t4u/button']
							}
						}],
					],
					allowedBlocks: []
				}
			}],
			['t4u/inner-block', {
				classes: 'relative z-1 h-[230px] md:h-[409px] xl:h-[460px] 4xl:h-[560px] xl:mt-[50px] shrink grow xl:w-full xl:max-w-[560px] 4xl:max-w-[640px] xl:self-end',
				simpleWrapper: true,
				options: {
					template: [
						['t4u/static-image', {
							classes: 'absolute z-1 top-[84px] xl:top-[100px] left-[60%] -translate-x-1/2 h-[242px] md:h-[431px] xl:h-[492px] w-auto max-w-none',
							url: 'general/cta-decor.svg'
						}],
						['t4u/image', {
							classes: 'absolute z-2 top-0 left-0 w-full h-full object-contain object-center-bottom'
						}]
					],
					allowedBlocks: []
				}
			}]
		],
		allowedBlocks: []
	})

	if (preview) {
		return <img src={getUrlToStaticImages(preview)} />
	}

	return (
		<>
			<InspectorControls>
				<DefaultSectionsControls attributes={attributes} setAttributes={setAttributes} />
				<PanelBody title="Відображення секції" initialOpen={false}>
					<RadioControl
						selected={directions}
						options={[
							{
								label: <img className="!h-[100px] w-auto" src={getUrlToStaticImages(`general/preview-section-cta.jpg`)} alt="icon" />,
								value: ''
							},
							{
								label: <img className="!h-[100px] w-auto" src={getUrlToStaticImages(`general/preview-section-cta-revers.jpg`)} alt="icon" />,
								value: 'xl:flex-row-reverse'
							}
						]}
						onChange={(value) => setAttributes({ directions: value })}
					/>
				</PanelBody>
				<CtaBgColorPallet color={colorBackground} setColor={(colorName) => setAttributes({ colorBackground: colorName })} />
				<SectionsDecorPicker decor={decor} setDecor={(value) => setAttributes({ decor: value })} />
			</InspectorControls>
			<section {...blockProps}>
				<SectionDecor decor={decor} />
				<div className="container relative z-2">
					<div className={clsx(
						'rounded-[20px] md:rounded-[30px] relative overflow-hidden xl:flex xl:justify-between xl:gap-[30px] xl:px-[60px]',
						colorBackground,
						directions
					)}>
						{children}
					</div>
				</div>
			</section>
		</>
	);
}
