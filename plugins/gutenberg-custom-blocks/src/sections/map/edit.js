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
	const { preview, isHide, padding, margin, background, className } = attributes;
	const blockProps = useBlockProps({
		className: clsx(
			'map-section rounded-[20px] md:rounded-[30px] relative overflow-hidden',
			className,
			background,
			getSectionsMarginClasses(margin),
			getSectionsPaddingClasses(padding),
			{ ['hide-block']: isHide }
		)
	});

	const { children } = useInnerBlocksProps({}, {
		template: [
			['t4u/heading', {
				classes: "text-dark-primary",
				acfField: "text_block_map_title",
				aligment: "center"
			}],
			['t4u/simple-text', {
				classes: "mt-[20px] font-medium max-w-[35rem] 4xl:max-w-[40.625rem] mx-auto text-dark-primary",
				aligment: "center",
				fontSize: "xl",
				canAddItem: true
			}],
			["t4u/buttons-group", {
				classes: 'mt-[94px] md:mt-[40px] lg:mt-[50px] 4xl:mt-[60px] button-group max-w-[1000px] mx-auto w-full',
				alignment: 'center',
				options: {
					template: [
						["t4u/button", {
							acfField: 'link_map'
						}],
					],
					allowedBlocks: ['t4u/button']
				}
			}],
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
			</InspectorControls>
			<section {...blockProps}>
				<div className="map-bg absolute z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex justify-center w-full h-[229px] md:h-[442px] lg:h-[520px] 4xl:h-[636px]">
					<img loading="lazy" className="level-1 item-left bg-nested-item-filter absolute z-1 right-[calc(50%-1px)] top-0 h-full w-auto translate-x-[-82%]" src={getUrlToStaticImages('icons/semi-circle-left.svg')} alt="" />
					<img loading="lazy" className="level-1 item-right bg-nested-item-filter absolute z-1 left-[calc(50%-1px)] top-0 h-full w-auto translate-x-[82%]" src={getUrlToStaticImages('icons/semi-circle-right.svg')} alt="" />

					<img loading="lazy" className="map h-full w-auto max-w-none relative z-2" src={getUrlToStaticImages('general/map.svg')} alt="" />

					<img loading="lazy" className="level-2 item-left bg-nested-item-filter absolute z-3 right-[calc(50%-1px)] top-0 h-full w-auto translate-x-[-182%]" src={getUrlToStaticImages('icons/semi-circle-left.svg')} alt="" />
					<img loading="lazy" className="level-2 item-right bg-nested-item-filter absolute z-3 left-[calc(50%-1px)] top-0 h-full w-auto translate-x-[182%]" src={getUrlToStaticImages('icons/semi-circle-right.svg')} alt="" />
				</div>
				<div className="md-max:t4u-content container relative flex flex-col justify-center z-2 min-h-[229px] md:min-h-[442px] lg:min-h-[520px] 4xl:min-h-[636px]">
					<div className="map-anim-icon md:absolute md:top-[-20px] 2xl:top-[70px] md:right-[73px] 2xl:right-[160px] 4xl:right-[267px] mb-[20px] md-max:ml-auto md-max:mr-[34px] h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-full bg-dark-primary flex flex-col justify-center items-center">
						<div className="map-eay relative h-[25%]">
							<img loading="lazy" className="h-full w-auto max-w-none color-light-primary-filter relative z-2" src={getUrlToStaticImages('icons/eay.svg')} alt="" />
							<img loading="lazy" className="map-eay-dot h-[80%] w-auto max-w-none color-dark-primary-filter absolute z-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src={getUrlToStaticImages('icons/dot.svg')} alt="" />
						</div>
						<div className="map-eay relative h-[25%]">

							<img loading="lazy" className="h-full w-auto max-w-none color-light-primary-filter relative z-2" src={getUrlToStaticImages('icons/eay.svg')} alt="" />
							<img loading="lazy" className="map-eay-dot h-[80%] w-auto max-w-none color-dark-primary-filter absolute z-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src={getUrlToStaticImages('icons/dot.svg')} alt="" />
						</div>
					</div>

					<div className="md:t4u-content">
						{children}
					</div>

					<div className="map-anim-icon absolute left-[50px] md:left-[40px] 2xl:left-[160px] 4xl:left-[267px] bottom-[94px] md:bottom-0 2xl:bottom-[55px] h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-full bg-accent-second flex flex-col justify-center items-center">
						<img loading="lazy" className="map-marker h-[40%] w-auto max-w-none color-light-primary-filter" src={getUrlToStaticImages('icons/map-anim-marker.svg')} alt="" />
						<img loading="lazy" className="mt-[-7%] h-[13.75%] w-auto max-w-none color-light-primary-filter" src={getUrlToStaticImages('icons/map-anim-marker-place.svg')} alt="" />
					</div>
				</div>
			</section>
		</>
	);
}
