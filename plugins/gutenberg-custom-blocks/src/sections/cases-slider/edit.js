import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls
} from "@wordpress/block-editor";
import { useEffect } from "@wordpress/element";
import { useSelect, useDispatch } from '@wordpress/data';
import "./editor.scss";
import clsx from "clsx";
import { getSectionsPaddingClasses, getSectionsMarginClasses, getUrlToStaticImages, getOptionsField, mergeRefs } from "../../utils/utils";
import { DefaultSectionsControls } from "../../components/default-sections-controls/DefaultSectionsControls";
import useFetchOnVisible from "../../hooks/hooks";
import apiFetch from "@wordpress/api-fetch";
import { SliderNav } from "../../ui/slider-nav/SliderNav";
import { SectionsDecorPicker } from "../../components/section-decor-picker/SectionsDecorPicker";
import { SectionDecor } from "../../ui/section-decor/SectionDecor";

export default function Edit({ attributes, setAttributes, clientId }) {
	const { preview, isHide, padding, margin, background, className, decor } = attributes;
	const { updateBlockAttributes } = useDispatch('core/block-editor');
	const innerBlocks = useSelect((select) => select('core/block-editor').getBlocks(clientId), [clientId]);

	const blockProps = useBlockProps({
		className: clsx(
			'cases-slider-section rounded-[20px] md:rounded-[30px] overflow-hidden relative',
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
						}],
					],
					allowedBlocks: ['t4u/button']
				}
			}],
		],
		allowedBlocks: []
	})

	const fetchTitleData = () => getOptionsField('text_cases');
	const { ref: titleRef, data: titleData } = useFetchOnVisible(fetchTitleData);

	const fetchData = () => apiFetch({ path: 'site-core/v1/case-for-slider' });
	const { ref, data, isLoading } = useFetchOnVisible(fetchData);

	useEffect(() => {
		if (data && data?.posts?.length < 5) {
			const headBlock = innerBlocks[0];
			headBlock && updateBlockAttributes(
				headBlock.clientId, {
				aligment: 'center'
			});
		}
	}, [data])

	useEffect(() => {
		if (titleData) {
			const title = innerBlocks[0]?.innerBlocks[1];
			if (title && !title.attributes.text) {
				updateBlockAttributes(title.clientId, {
					text: titleData.value
				})
			}
		}
	}, [titleData]);

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
				<div ref={mergeRefs(ref, titleRef)} className="container flex flex-col relative z-2">
					{children}
					<div className="mt-[30px] md:mt-[40px] lg:mt-[50px] relative order-2 first-child-no-margin">
						{(isLoading) && <div className="text-center text-lg">Заватнажується ...</div>}
						{!!data && !!data?.posts?.length
							?
							<div className="swiper lg-max:[&.swiper]:overflow-visible [&:not(.swiper-initialized)_.swiper-wrapper]:gap-[10px] md:[&:not(.swiper-initialized)_.swiper-wrapper]:gap-[20px] lg:[&:not(.swiper-initialized)_.swiper-wrapper]:gap-[24px] 4xl:[&:not(.swiper-initialized)_.swiper-wrapper]:gap-[30px] lg-max:[&_.swiper-slide]:w-[323px] lg:[&:not(.swiper-initialized)_.swiper-slide]:w-[calc(33.333333%-(24px*2/3))] xl:[&:not(.swiper-initialized)_.swiper-slide]:w-[calc(25%-(24px*3/4))] 4xl:[&:not(.swiper-initialized)_.swiper-slide]:w-[calc(25%-(30px*3/4))]">
								<div className={clsx(
									"swiper-wrapper",
									{
										'md:justify-center': (data.posts.length < 3),
										'lg:justify-center': (data.posts.length < 5),
									}
								)}>
									{data.posts.map(post => (
										<div className="swiper-slide !h-auto pointer-events-none">
											<div className="card-cases nested-bg-item rounded-[12px] p-[5px] h-full flex flex-col [&_.ibg]:hover:scale-110 [&_.title]:hover:text-accent-first">
												<div
													className="aspect-[1/0.575] lg:aspect-[1/0.596] grow-0 shrink-0 rounded-[8px] relative overflow-hidden"
													dangerouslySetInnerHTML={{ __html: post.image }}
												>
												</div>
												<div className="mt-[20px] lg:mt-[30px] px-[15px] pb-[15px] grow shrink flex flex-col">
													<div title={post.title} style={{ '--line': '3', '--line-height': '1.2em' }} className="title h3 text-dark-primary transition-colors truncate-text">
														{post.title}
													</div>
													{!!post.excerpt &&
														<div style={{ '--line': '4', '--line-height': '1.4em' }} className="mt-[5px] mb-[20px] text-md text-dark-primary-60 last-child-no-margin truncate-text">
															{post.excerpt}
														</div>
													}

													<span className="mt-auto btn-with-arrow accent-first self-start">
														<span data-text={post.text_more_details}></span>
													</span>
												</div>
											</div>
										</div>
									))}
								</div>

							</div>
							: !isLoading && <div className="text-center text-lg">Не знайдено</div>
						}
						{(!!data && data?.posts?.length > 4) && <SliderNav />}
					</div>
				</div>
			</section >
		</>
	);
}
