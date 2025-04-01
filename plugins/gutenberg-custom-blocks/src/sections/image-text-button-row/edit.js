import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls
} from "@wordpress/block-editor";
import "./editor.scss";
import clsx from "clsx";
import { getSectionsPaddingClasses, getSectionsMarginClasses, getUrlToStaticImages } from "../../utils/utils";
import { DefaultSectionsControls } from "../../components/default-sections-controls/DefaultSectionsControls";


export default function Edit({ attributes, setAttributes }) {
	const { isHide, padding, margin, background, className, reverse } = attributes;
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
				<DefaultSectionsControls attributes={attributes} setAttributes={setAttributes}/>
			</InspectorControls>
			<section {...blockProps}>
				<div className="absolute z-3 pointer-events-none top-0 left-0 w-full h-full">
					<div className="container h-full relative">
						<img
							className="absolute top-[70px] md:top-[92px] lg:top-[134px] 4xl:top-[130px] h-[138px] md:h-[245px] w-auto left-[-64px] md:left-[-125px] lg:left-[-109px] 4xl:left-[-84px]"
							src={getUrlToStaticImages('general/row-sections-decor-1.svg')}
							alt="decor" />
					</div>
				</div>
				<div className="absolute z-1 pointer-events-none top-0 left-0 w-full h-full">
					<div className="container h-full relative">
						<img
							className="absolute bottom-[68px] md:bottom-[98px] lg:bottom-[122px] h-[106px] md:h-[168px] lg:h-[239px] w-auto right-[-97px] md:right-[-169px] lg:right-[-235px]"
							src={getUrlToStaticImages('general/row-sections-decor-2.svg')}
							alt="decor" />
					</div>
				</div>
				<div className="container flex flex-col lg:flex-row lg:items-center lg:gap-x-[40px] xl:gap-x-[65px] gap-y-[40px] md:gap-y-[50px] relative z-2">
					{children}
				</div>
			</section>
		</>
	);
}
