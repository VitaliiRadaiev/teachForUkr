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
import { SectionsDecorPicker } from "../../components/section-decor-picker/SectionsDecorPicker";
import { SectionDecor } from "../../ui/section-decor/SectionDecor";
import useFetchOnVisible from "../../hooks/hooks";
import apiFetch from "@wordpress/api-fetch";
import { SliderNav } from "../../ui/slider-nav/SliderNav";

export default function Edit({ attributes, setAttributes, clientId }) {
	const { preview, isHide, padding, margin, background, className, decor } = attributes;

	const { updateBlockAttributes } = useDispatch('core/block-editor');
	const innerBlocks = useSelect((select) => select('core/block-editor').getBlocks(clientId), [clientId]);

	const blockProps = useBlockProps({
		className: clsx(
			'reviews-slider-section rounded-[20px] md:rounded-[30px] overflow-hidden relative',
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
				container: "lg",
				titleAcfField: 'text_reviews'
			}],
			["t4u/buttons-group", {
				classes: 'mt-[40px] xl:mt-[50px] order-3',
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

	const fetchData = () => apiFetch({ path: 'site-core/v1/review' });
	const { ref, data, isLoading } = useFetchOnVisible(fetchData);

	useEffect(() => {
		if (data && data?.posts?.length < 3) {
			const headBlock = innerBlocks[0];
			headBlock && updateBlockAttributes(
				headBlock.clientId, {
				aligment: 'center'
			});
		}
	}, [data])


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
				<div ref={ref} className="container relative z-2 flex flex-col">
					{children}
					<div className="mt-[30px] md:mt-[40px] lg:mt-[50px] relative order-2 first-child-no-margin">
						{(isLoading) && <div className="text-center text-lg">Заватнажується ...</div>}
						{!!data && !!data?.posts?.length
							?
							<div className="swiper [&.swiper]:overflow-visible [&:not(.swiper-initialized)_.swiper-wrapper]:gap-[10px] md:[&:not(.swiper-initialized)_.swiper-wrapper]:gap-[20px] lg:[&:not(.swiper-initialized)_.swiper-wrapper]:gap-[24px] 4xl:[&:not(.swiper-initialized)_.swiper-wrapper]:gap-[30px] [&_.swiper-slide]:w-[323px] md:[&_.swiper-slide]:w-[537px]">
								<div className={clsx(
									"swiper-wrapper",
									{
										'md:justify-center': (data.posts.length < 2),
										'lg:justify-center': (data.posts.length < 3),
									}
								)}>
									{data.posts.map(post => (
										<div className="swiper-slide !h-auto pointer-events-none">
											<div className="flex flex-col h-full nested-bg-item rounded-[12px] p-[16px] md:p-[30px]">
												<div className="h-[16px] md:h-[20px] accent-second-filter">
													<img class="h-full w-auto" src={getUrlToStaticImages('icons/semi-circle-right-double.svg')} alt="decor" />
												</div>
												<div className="mt-[20px] md:mt-[30px] shrink grow text-md">
													{post.excerpt}
												</div>

												<div className="mt-[20px] md:mt-[30px] flex gap-[16px]">
													{post.image
														? <div
															className="grow-0 shrink-0 h-[56px] w-[56px] rounded-full overflow-hidden relative"
															dangerouslySetInnerHTML={{ __html: post.image }}
														>
														</div>
														: <div className="grow-0 shrink-0 h-[56px] w-[56px] rounded-full overflow-hidden relative bg-[--bg] flex items-center justify-center">
															<img className="color-light-primary-60-filter h-[26px] w-auto" src={getUrlToStaticImages('icons/user.svg')} alt="placeholder" />
														</div>
													}
													<div className="self-center">
														<div className="h4 text-dark-primary">
															{post.title}
														</div>
														{!!post.position &&
															<div className="mt-[2px] text-sm">
																{post.position}
															</div>
														}
													</div>
												</div>
											</div>
										</div>
									))}
								</div>

							</div>
							: !isLoading && <div className="text-center text-lg">Не знайдено</div>
						}
						{(!!data && data?.posts?.length > 3) && <SliderNav />}
					</div>
				</div>
			</section>
		</>
	);
}
