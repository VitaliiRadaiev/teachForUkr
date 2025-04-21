import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls
} from "@wordpress/block-editor";
import "./editor.scss";
import clsx from "clsx";
import { getSectionsMarginClasses } from "../../../utils/utils";
import useFetchOnVisible from "../../../hooks/hooks";
import apiFetch from "@wordpress/api-fetch";
import { IsHide } from "../../../components/is-hide/IsHide";
import { MarginYControl } from "../../../components/space-control/MarginYControl";
import { SECTIONS_MARGIN_MAP } from "../../../global/global";


export default function Edit({ attributes, setAttributes }) {
	const { isHide, margin, className } = attributes;

	const blockProps = useBlockProps({
		className: clsx(
			'flex flex-col my-[30px] md:my-[40px] lg:my-[50px] first-child-no-margin last-child-no-margin',
			className,
			getSectionsMarginClasses(margin),
			{ ['hide-block']: isHide }
		)
	});

	const { children } = useInnerBlocksProps({}, {
		template: [
			["t4u/buttons-group", {
				classes: 'mt-[40px] xl:mt-[50px] order-3',
				alignment: 'center',
				options: {
					template: [
						["t4u/button", {
							acfField: 'link_more_partners',
							variant: 'btn-primary'
						}],
						["t4u/button", {
							acfField: 'link_become_partner'
						}],
					],
					allowedBlocks: ['t4u/button']
				}
			}],
		],
		allowedBlocks: []
	})

	const fetchData = () => apiFetch({ path: 'site-core/v1/partners-for-slider' });
	const { ref, data } = useFetchOnVisible(fetchData);

	return (
		<>
			<InspectorControls>
				<IsHide isHide={isHide} setIsHide={(val) => setAttributes({ isHide: val })} />
				<MarginYControl
					size={margin}
					setSize={(s) => setAttributes({ margin: s })}
					sizesMap={SECTIONS_MARGIN_MAP}
				/>
			</InspectorControls>
			<div {...blockProps}>
				{children}
				<div ref={ref} className="relative order-2">
					{!!data
						? data?.posts?.length
							? <div className="swiper lg-max:[&.swiper]:overflow-visible [&:not(.swiper-initialized)_.swiper-wrapper]:gap-[10px] md:[&:not(.swiper-initialized)_.swiper-wrapper]:gap-[24px] 4xl:[&:not(.swiper-initialized)_.swiper-wrapper]:gap-[32px] [&:not(.swiper-initialized)_.swiper-slide]:w-[calc(50%-5px)] md:[&:not(.swiper-initialized)_.swiper-slide]:w-[calc(33.3333%-(24px*2/3))] lg:[&:not(.swiper-initialized)_.swiper-slide]:w-[calc(16.666%-(24px*5/6))] 4xl:[&:not(.swiper-initialized)_.swiper-slide]:w-[calc(16.666%-(32px*5/6))]">
								<div className={clsx('swiper-wrapper', { 'justify-center': !!data && (data?.posts?.length < 6) })}>
									{data?.posts.map(post => (
										<div className="swiper-slide">
											<div
												className="nested-bg-item h-[70px] md:h-[84px] 4xl:h-[112px] flex items-center justify-center rounded-[12px] p-[20px] px-[30px] 4xl:p-[25px] [&_img]:hover:grayscale-0"
												dangerouslySetInnerHTML={{ __html: post.logo }}
											></div>
										</div>
									))}
								</div>
							</div>
							: <div className="text-center text-lg">Не створено</div>
						: <div className="text-center text-lg">Заватнажується ...</div>
					}
					{/* {!!data && (data?.posts?.length >= 6) && <SliderNav />} */}
				</div>
			</div>
		</>
	);
}
