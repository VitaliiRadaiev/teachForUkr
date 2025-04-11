import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls
} from "@wordpress/block-editor";
import { useEffect } from "@wordpress/element";
import { useSelect, useDispatch } from '@wordpress/data';
import "./editor.scss";
import clsx from "clsx";
import { getSectionsPaddingClasses, getSectionsMarginClasses, getUrlToStaticImages } from "../../utils/utils";
import { DefaultSectionsControls } from "../../components/default-sections-controls/DefaultSectionsControls";
import useFetchOnVisible from "../../hooks/hooks";
import apiFetch from "@wordpress/api-fetch";
import { SliderNav } from "../../ui/slider-nav/SliderNav";


export default function Edit({ attributes, setAttributes, clientId }) {
	const { isHide, padding, margin, background, className, preview } = attributes;
	
	const { updateBlockAttributes } = useDispatch('core/block-editor');
	const innerBlocks = useSelect((select) => select('core/block-editor').getBlocks(clientId), [clientId]);

	const blockProps = useBlockProps({
		className: clsx(
			'partners-slider-section rounded-[20px] md:rounded-[30px] overflow-hidden',
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
				classes: "order-1",
				aligment: "left",
				container: "lg"
			}],
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

	useEffect(() => {
		if (data && data?.posts?.length < 6) {
			const headBlock = innerBlocks[0];
			headBlock && updateBlockAttributes(
				headBlock.clientId, {
					aligment: 'center'
			});
		}
	}, [data])

	if(preview) {
		return <img src={getUrlToStaticImages(preview)} />
	}

	return (
		<>
			<InspectorControls>
				<DefaultSectionsControls attributes={attributes} setAttributes={setAttributes} />
			</InspectorControls>
			<section {...blockProps}>
				<div ref={ref} className="container flex flex-col">
					{children}
					<div className="mt-[30px] md:mt-[40px] lg:mt-[50px] first-child-no-margin relative order-2">
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
						{!!data && (data?.posts?.length >= 6) && <SliderNav />}
					</div>
				</div>
			</section>
		</>
	);
}
