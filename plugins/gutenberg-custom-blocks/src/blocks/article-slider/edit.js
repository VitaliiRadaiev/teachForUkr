import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
} from "@wordpress/block-editor";
import "./editor.scss";
import clsx from "clsx";
import { getMarginClasses, getUrlToStaticImages } from "../../utils/utils";
import { IsHide } from "../../components/is-hide/IsHide";
import { MarginYControl } from "../../components/space-control/MarginYControl";


export default function Edit({ attributes, setAttributes }) {
	const { isHide, margin, classes, className, preview } = attributes;
	const blockProps = useBlockProps({
		className: clsx(
			'article-slider [&_img]:rounded-[12px] [&_img]:w-full [&_img]:aspect-[1/0.670] md:[&_img]:aspect-[1/0.482]',
			classes,
			className,
			getMarginClasses(margin),
			{
				['hide-block']: isHide,
			}
		)
	});

	const innerBlocks = useInnerBlocksProps({
		className: 'min-h-[100px] canAddItem grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px] md:gap-[20px] lg:gap-[24px] 4xl:gap-[30px]'
	}, {
		template: [
			['t4u/article-slider-item', {}]
		],
		allowedBlocks: ['t4u/article-slider-item']
	})

	if (preview) {
		return <img src={getUrlToStaticImages(preview)} />
	}
	return (
		<>
			<InspectorControls>
				<IsHide isHide={isHide} setIsHide={(val) => setAttributes({ isHide: val })} />
				<MarginYControl size={margin} setSize={(s) => setAttributes({ margin: s })} />
			</InspectorControls>
			<div {...blockProps}>
				<div {...innerBlocks}></div>
				<div className="pointer-events-none mt-[20px] md:mt-[30px] flex items-center justify-center gap-[40px] [&:has(.swiper-pagination-lock)]:hidden">
					<button className="nav-btn prev icon-arrow-left-long flex items-center justify-center h-[50px] w-[60px] text-[20px] text-dark-primary bg-light-primary-60 rounded-[8px] transition-colors cursor-pointer hover:text-white hover:bg-dark-primary-60"></button>
					<div className="slider-bullets !mx-0 ">
						<div className="bullets-wrapper">
							<div className="bullet active" data-index="0"></div>

							<div className="bullet next" data-index="1"></div>

							<div className="bullet next-next" data-index="2"></div>
						</div>
					</div>
					<button className="nav-btn next icon-arrow-right-long flex items-center justify-center h-[50px] w-[60px] text-[20px] text-dark-primary bg-light-primary-60 rounded-[8px] transition-colors cursor-pointer hover:text-white hover:bg-dark-primary-60"></button>
				</div>
			</div>
		</>
	);
}
