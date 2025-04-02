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


export default function Edit({ attributes, setAttributes }) {
	const { isHide, padding, margin, background, className, directions, decor } = attributes;

	const blockProps = useBlockProps({
		className: clsx(
			'image-text-button-row rounded-[20px] md:rounded-[30px] relative overflow-hidden',
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
				classes: 'relative aspect-[1/0.88] md:aspect-[1/0.807] lg:aspect-auto lg:min-h-[536px] 4xl:min-h-[730px] lg:shrink lg:grow',
				dataAttributes: {
					'data-height-var': '--image-height, .image-text-button-row'
				},
				simpleWrapper: true,
				options: {
					template: [
						['t4u/image', {
							classes: 'ibg rounded-[12px]'
						}],
					],
					allowedBlocks: []
				}

			}],
			['t4u/inner-block', {
				classes: 'lg:shrink-0 lg:grow-0 lg:w-[49%] lg:max-w-[468px] xl:max-w-[865px]',
				simpleWrapper: true,
				options: {
					template: [
						['t4u/sup-title', {}],
						['t4u/heading', { classes: "mt-[16px] md:mt-[20px] text-dark-primary" }],
						['t4u/simple-text', {
							classes: "mt-[30px] md:mt-[20px] lg:mt-[30px]",
							size: "md"
						}],
						["t4u/buttons-group", {
							classes: 'mt-[30px] md:mt-[20px] lg:mt-[30px]',
							options: {
								template: [
									["t4u/button", {
										variant: "btn-primary",
										acfField: "text_more_details",
										acfFieldType: "text"
									}],
								],
								allowedBlocks: ['t4u/button']
							}
						}]
					],
					allowedBlocks: []
				},
			}]
		],
		allowedBlocks: []
	})

	return (
		<>
			<InspectorControls>
				<DefaultSectionsControls attributes={attributes} setAttributes={setAttributes} />
				<PanelBody title="Відображення секції" initialOpen={true}>
					<RadioControl
						selected={directions}
						options={[
							{
								label: <img className="!h-[100px] w-auto" src={getUrlToStaticImages(`general/image-text-button-row-left.jpg`)} alt="icon" />,
								value: 'left'
							},
							{
								label: <img className="!h-[100px] w-auto" src={getUrlToStaticImages(`general/image-text-button-row-right.jpg`)} alt="icon" />,
								value: 'right'
							},
						]}
						onChange={(value) => setAttributes({ directions: value })}
					/>
				</PanelBody>
				<PanelBody title="Декор секції" initialOpen={true}>
					<RadioControl
						selected={decor}
						options={[
							{
								label: <span className="text-lg">Немає</span>,
								value: 0
							},
							{
								label: <img className="!h-[100px] w-auto bg-light-primary-80" src={getUrlToStaticImages(`general/image-text-button-row-decor-1.png`)} alt="icon" />,
								value: 1
							},
							{
								label: <img className="!h-[100px] w-auto bg-light-primary-80" src={getUrlToStaticImages(`general/image-text-button-row-decor-2.png`)} alt="icon" />,
								value: 2
							},
						]}
						onChange={(value) => setAttributes({ decor: +value })}
					/>
				</PanelBody>
			</InspectorControls>
			<section {...blockProps}>
				{(decor !== 0) &&
					<>
						<div className={clsx(
							'absolute z-3 pointer-events-none top-0 left-0 w-full h-full',
							{ '-scale-x-100': directions === 'right' }
						)}>
							<div className="container h-full relative">
								<img
									className={clsx(
										'absolute h-[138px] md:h-[245px] w-auto left-[-64px] md:left-[-125px] lg:left-[-109px] 4xl:left-[-84px] lg:top-[134px] 4xl:top-[130px]',
										{
											'top-[70px] md:top-[92px]': directions === 'left',
											'bottom-[calc(var(--image-height)-68px)] md:bottom-[calc(var(--image-height)-145px)] lg:bottom-auto': directions === 'right',
										}
									)}
									src={getUrlToStaticImages('general/rectangle-turn-left.svg')}
									alt="decor" />
							</div>
						</div>
						<div className={clsx(
							'absolute z-1 pointer-events-none top-0 left-0 w-full h-full',
							{ '-scale-x-100': directions === 'right' }
						)}>
							<div className="container h-full relative">
								<img
									className={clsx(
										'absolute h-[106px] md:h-[168px] lg:h-[239px] w-auto right-[-97px] md:right-[-169px] lg:right-[-235px] lg:bottom-[122px]',
										{
											'bottom-[68px] md:bottom-[98px]': directions === 'left',
											'top-[31.5%] md:top-[22.5%] lg:top-auto': directions === 'right',
											'lg:!bottom-0': decor === 2
										}
									)}
									src={decor === 1 ? getUrlToStaticImages('general/semi-torus-down.svg') : getUrlToStaticImages('general/semi-torus-top.svg')}
									alt="decor" />
							</div>
						</div>
					</>
				}

				<div className={clsx(
					'container flex lg:items-center lg:gap-x-[40px] xl:gap-x-[65px] gap-y-[40px] md:gap-y-[50px] relative z-2',
					{
						'flex-col lg:flex-row': directions === 'left',
						'flex-col-reverse lg:flex-row-reverse': directions === 'right'
					}
				)}>
					{children}
				</div>
			</section>
		</>
	);
}
