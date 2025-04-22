import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls
} from "@wordpress/block-editor";
import { PanelBody, CheckboxControl } from "@wordpress/components";
import { useEffect } from "@wordpress/element";
import { useSelect, useDispatch } from '@wordpress/data';
import "./editor.scss";
import clsx from "clsx";
import { getSectionsPaddingClasses, getSectionsMarginClasses, getUrlToStaticImages, getOptionsField, mergeRefs } from "../../utils/utils";
import { DefaultSectionsControls } from "../../components/default-sections-controls/DefaultSectionsControls";
import useFetchOnVisible from "../../hooks/hooks";
import apiFetch from "@wordpress/api-fetch";
import { SliderNav } from "../../ui/slider-nav/SliderNav";


export default function Edit({ attributes, setAttributes, clientId }) {
	const { preview, isHide, padding, margin, background, className, categorySlug } = attributes;

	const { updateBlockAttributes } = useDispatch('core/block-editor');
	const innerBlocks = useSelect((select) => select('core/block-editor').getBlocks(clientId), [clientId]);

	const blockProps = useBlockProps({
		className: clsx(
			'news-slider-section rounded-[20px] md:rounded-[30px]',
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
							acfField: 'link_more_news',
							variant: 'btn-primary'
						}],
					],
					allowedBlocks: ['t4u/button']
				}
			}],
		],
		allowedBlocks: []
	})

	const fetchTitleData = () => getOptionsField('text_last_news');
	const { ref: titleRef, data: titleData } = useFetchOnVisible(fetchTitleData);

	const fetchData = () => apiFetch({ path: `site-core/v1/news?category=${categorySlug.length ? categorySlug.join(',') : 'all'}` });
	const { ref, data, isLoading } = useFetchOnVisible(fetchData, [categorySlug]);

	const fetchCategoriesData = () => apiFetch({ path: 'site-core/v1/news-categories' });
	const { ref: refCategories, data: dataCategories, isLoading: isLoadingCategories } = useFetchOnVisible(fetchCategoriesData);

	const handleCategoryChange = (checkedSlug, categorySlug, isChecked) => {
		if(isChecked) {
			setAttributes({ categorySlug: [...categorySlug, checkedSlug] });
		} else {
			setAttributes({ categorySlug: categorySlug.filter((slug) => slug !== checkedSlug) });
		}
	}

	useEffect(() => {
		if (data && data?.posts?.length < 3) {
			const headBlock = innerBlocks[0];
			headBlock && updateBlockAttributes(
				headBlock.clientId, {
				aligment: 'center'
			});
		}
	}, [data]);

	useEffect(() => {
		if (titleData) {
			const title = innerBlocks[0]?.innerBlocks[1];
			if (title && !title.attributes.text) {
				console.log(title);
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
				<PanelBody title="Фільтр по категоріях" initialOpen={true}>
					<div className="">
						{isLoadingCategories && <div className="text-center text-lg">Заватнажується ...</div>}
						{(!!dataCategories && dataCategories.length)
							? <>
								{dataCategories.map(category => (
									<CheckboxControl
										key={category.slug}
										label={category.name}
										checked={categorySlug.includes(category.slug)}
										onChange={(isChecked) => handleCategoryChange(category.slug, categorySlug, isChecked)}
									/>
								))}
							</>
							: !isLoadingCategories && <div className="text-center text-lg">Не створено</div>
						}
					</div>
				</PanelBody>
			</InspectorControls>
			<section {...blockProps}>
				<div ref={mergeRefs(ref, titleRef, refCategories)} className="container flex flex-col">
					{children}
					<div className="mt-[30px] md:mt-[40px] lg:mt-[50px] relative order-2 first-child-no-margin">
						{isLoading && <div className="text-center text-lg">Заватнажується ...</div>}

						{(!!data && data?.posts?.length)
							? <div className="swiper md-max:[&.swiper]:overflow-visible [&:not(.swiper-initialized)_.swiper-wrapper]:gap-[10px] md:[&:not(.swiper-initialized)_.swiper-wrapper]:gap-[20px] lg:[&:not(.swiper-initialized)_.swiper-wrapper]:gap-[24px] 4xl:[&:not(.swiper-initialized)_.swiper-wrapper]:gap-[30px] md-max:[&_.swiper-slide]:w-[323px] md:[&:not(.swiper-initialized)_.swiper-slide]:w-[calc(50%-10px)] lg:[&:not(.swiper-initialized)_.swiper-slide]:w-[calc(33.333333%-(24px*2/3))] 4xl:[calc(33.333333%-(30px*2/3))]">
								<div className="swiper-wrapper">
									{data.posts.map(post => (
										<div className="swiper-slide !h-auto pointer-events-none">
											<div className="card-news-v1 relative nested-bg-item rounded-[12px] p-[5px] h-full">
												<div className="absolute z-2 pointer-events-none top-0 left-0 w-full p-[5px]">
													<div className="aspect-[1/0.597] overflow-auto">
														<div className="flex flex-wrap gap-[5px] p-[10px]">
															{post.categories.map(category => (
																<div class={`category-tag category-colors-${category.type}`}>
																	<img src={category.img} alt="category-icon" />
																	<span>{category.name}</span>
																</div>
															))}
														</div>
													</div>
												</div>
												<div className="flex flex-col h-full relative z-1 [&_.ibg]:hover:scale-110 [&_.title]:hover:text-accent-first">
													<div
														className="aspect-[1/0.597] grow-0 shrink-0 rounded-[8px] bg-dark-primary-80 overflow-hidden relative"
														dangerouslySetInnerHTML={{ __html: post.image }}
													></div>
													<div className="grow shrink mt-[16px] md:mt-[20px] xl:mt-[30px] pb-[11px] px-[11px] md:pb-[15px] md:px-[15px] flex flex-col">
														<div className="text-sm text-dark-primary-60 lowercase">
															{post.data}
														</div>
														<div style={{ '--line': '3', '--line-height': '1.2em' }} className="title mt-[5px] h3 text-dark-primary mb-auto transition-colors truncate-text">
															{post.title}
														</div>

														<span className="mt-[16px] xl:mt-[20px] btn-with-arrow accent-first self-start">
															<span data-text={post.text_more_details}></span>
														</span>
													</div>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
							: !isLoading && <div className="text-center text-lg">Не створено</div>
						}

						{!!data && (data?.posts?.length >= 3) && <SliderNav />}
					</div>
				</div>
			</section>
		</>
	);
}
