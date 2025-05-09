import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, CheckboxControl, Button } from "@wordpress/components";
import { useEffect, useState, useCallback } from "@wordpress/element";
import { useSelect, useDispatch } from '@wordpress/data';
import "./editor.scss";
import clsx from "clsx";
import { getSectionsPaddingClasses, getSectionsMarginClasses, getUrlToStaticImages, mergeRefs, debounce, buildApiPath } from "../../utils/utils";
import { DefaultSectionsControls } from "../../components/default-sections-controls/DefaultSectionsControls";
import useFetchOnVisible from "../../hooks/hooks";
import apiFetch from "@wordpress/api-fetch";
import { SliderNav } from "../../ui/slider-nav/SliderNav";
import { SectionsDecorPicker } from "../../components/section-decor-picker/SectionsDecorPicker";
import { SectionDecor } from "../../ui/section-decor/SectionDecor";

const posts_per_page = 50;

export default function Edit({ attributes, setAttributes, clientId }) {
	const { preview, isHide, padding, margin, background, className, categorySlug, decor, selectedNews } = attributes;
	const [posts, setPosts] = useState([]);
	const [isPostsFetching, setIsPostFetching] = useState(false);
	const [page, setPage] = useState(1);
	const [search, setSearch] = useState('');
	const [max_num_pages, setMax_num_pages] = useState(1);
	const [renderPosts, setRenderPosts] = useState([]);
	const { updateBlockAttributes } = useDispatch('core/block-editor');
	const innerBlocks = useSelect((select) => select('core/block-editor').getBlocks(clientId), [clientId]);

	const blockProps = useBlockProps({
		className: clsx(
			'news-slider-section rounded-[20px] md:rounded-[30px] overflow-hidden relative',
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
				titleAcfField: 'text_last_news'
			}],
			["t4u/buttons-group", {
				classes: 'mt-[40px] xl:mt-[50px] order-3',
				alignment: 'center',
				options: {
					template: [
						["t4u/button", {
							acfField: 'text_watchall_all',
							acfFieldType: 'text',
							variant: 'btn-primary'
						}],
					],
					allowedBlocks: ['t4u/button']
				}
			}],
		],
		allowedBlocks: []
	})

	const fetchData = () => apiFetch({ path: `site-core/v1/news${categorySlug.length ? `?category=${categorySlug.join(',')}` : ''}` });
	const { ref, data, isLoading, refetch } = useFetchOnVisible(fetchData);

	const fetchCategoriesData = () => apiFetch({ path: 'site-core/v1/news-categories' });
	const { ref: refCategories, data: dataCategories, isLoading: isLoadingCategories } = useFetchOnVisible(fetchCategoriesData);

	const fetchNewsForFilter = () => {
		const path = buildApiPath('site-core/v1/news', {
			category: categorySlug.length ? categorySlug.join(',') : undefined,
			page: page,
			search: search,
			posts_per_page: posts_per_page
		});
		return apiFetch({ path });
	};
	const { ref: newsForFilterRef, data: newsForFilter, isLoading: isNewsForFilterLoading, refetch: refetchNewsForFilter } = useFetchOnVisible(fetchNewsForFilter);

	const fetchNewsByIds = () => apiFetch({ path: `site-core/v1/news-by-ids?ids=${selectedNews.join(',')}` });
	const { ref: newsByIdsRef, data: newsByIdsData, isLoading: isLoadingNewsByIds, refetch: refetchNewsByIds } = useFetchOnVisible(fetchNewsByIds);

	const loadMoreNews = async ({ categorySlug, page, search, posts_per_page }) => {
		setIsPostFetching(true);
		const path = buildApiPath('site-core/v1/news', {
			category: categorySlug.length ? categorySlug.join(',') : undefined,
			page: page,
			search: search,
			posts_per_page: posts_per_page
		});
		const res = await apiFetch({ path });
		setPosts((posts) => [...posts, ...res.posts]);
		setMax_num_pages(res.max_num_pages);
		setIsPostFetching(false);
	}

	const fetchNews = async ({ categorySlug, page, search, posts_per_page }) => {
		setIsPostFetching(true);
		const path = buildApiPath('site-core/v1/news', {
			category: categorySlug.length ? categorySlug.join(',') : undefined,
			page: page,
			search: search,
			posts_per_page: posts_per_page
		});
		const res = await apiFetch({ path });
		setPosts(res.posts);
		setMax_num_pages(res.max_num_pages);
		setIsPostFetching(false);
	}

	const debouncedFetchNews = useCallback(debounce(fetchNews, 500), []);

	const handleCategoryChange = (checkedSlug, categorySlug, isChecked) => {
		let slugs = [];
		if (isChecked) {
			slugs = [...categorySlug, checkedSlug];
			setAttributes({ categorySlug: slugs });
		} else {
			slugs = categorySlug.filter((slug) => slug !== checkedSlug);
			setAttributes({ categorySlug: slugs });
		}

		refetch(() => apiFetch({ path: `site-core/v1/news${slugs.length ? `?category=${slugs.join(',')}` : ''}` }));

		fetchNews({
			categorySlug: slugs,
			page: 1,
			search: '',
			posts_per_page,
		});

		setPage(1);
		setSearch('');
	}

	const clearSelectedCategories = () => {
		let slugs = [];

		setAttributes({ categorySlug: slugs });

		refetch(() => apiFetch({ path: `site-core/v1/news${slugs.length ? `?category=${slugs.join(',')}` : ''}` }));

		fetchNews({
			categorySlug: slugs,
			page: 1,
			search: '',
			posts_per_page,
		});

		setPage(1);
		setSearch('');
	}


	useEffect(() => {
		if (renderPosts.length < 3) {
			const headBlock = innerBlocks[0];
			headBlock && updateBlockAttributes(
				headBlock.clientId, {
				aligment: 'center'
			});
		} else {
			const headBlock = innerBlocks[0];
			headBlock && updateBlockAttributes(
				headBlock.clientId, {
				aligment: 'left'
			});
		}
	}, [renderPosts]);

	useEffect(() => {
		if (newsForFilter) {
			setPosts(newsForFilter.posts);
			setMax_num_pages(newsForFilter.max_num_pages);
		}
	}, [newsForFilter]);

	useEffect(() => {
		return () => {
			debouncedFetchNews.cancel();
		};
	}, [debouncedFetchNews]);

	useEffect(() => {
		refetchNewsByIds(() => apiFetch({ path: `site-core/v1/news-by-ids?ids=${selectedNews.join(',')}` }));
	}, [selectedNews]);

	useEffect(() => {
		if (selectedNews.length && data && newsByIdsData) {
			setRenderPosts(newsByIdsData.posts);
		} else if (data) {
			setRenderPosts(data.posts);
		}
	}, [selectedNews, data, newsByIdsData]);

	if (preview) {
		return <img src={getUrlToStaticImages(preview)} />
	}

	return (
		<>
			<InspectorControls>
				<DefaultSectionsControls attributes={attributes} setAttributes={setAttributes} />
				<PanelBody title="Відобразити тільки по категоріях" initialOpen={true}>
					<div className={clsx({
						'disabled': isPostsFetching || isLoadingNewsByIds
					})}>
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
						{!!categorySlug.length && <Button onClick={() => clearSelectedCategories()} variant="primary" size="compact">Очистити обрані категорії</Button>}
						{/* ============================== */}
						<div className="mt-[20px] text-[14px] font-bold">
							Відобразити тільки обрані новини
						</div>
						<input
							className="w-full mt-[5px]"
							type="search"
							placeholder="Пошук"
							value={search}
							onChange={(e) => {
								debouncedFetchNews({
									categorySlug,
									page: 1,
									search: e.target.value,
									posts_per_page
								})
								setSearch(e.target.value);
								setPage(1);
							}}
						/>
						<div className="mt-[5px] max-h-[400px] overflow-auto">

							{(posts.length)
								? posts.map(post => (
									<div
										title={post.title}
										className={clsx(
											'btn cursor-pointer p-[5px] transition-opacity hover:bg-light-primary-80 hover:[&.bg-light-primary-60]:bg-light-primary-40',
											{ 'bg-light-primary-60': selectedNews.includes(post.id) }
										)}
										key={post.id}
										onClick={(e) => {
											if (e.target.closest('.btn').classList.contains('bg-light-primary-60')) {
												setAttributes({ selectedNews: selectedNews.filter(id => id != post.id) })
											} else {
												setAttributes({ selectedNews: [...selectedNews, post.id] })
											}
										}}
									>
										<div style={{ '--line': 1, '--line-height': '1.4em' }} className="text-sm truncate-text">
											{post.title}
										</div>
									</div>
								))
								: <div className="text-center text-sm">Не знайдено</div>
							}

							{(isNewsForFilterLoading || isPostsFetching)
								? <div className="text-sm">Заватнажується ...</div>
								: (page < max_num_pages)
								&& <Button
									variant="secondary"
									size="small"
									onClick={() => {
										loadMoreNews({
											categorySlug: categorySlug,
											page: page + 1,
											search,
											posts_per_page
										})
										setPage(page + 1);
									}}
								>Показати ще</Button>
							}
						</div>
						{!!selectedNews.length &&
							<Button
								variant="primary" className="mt-[10px]"
								onClick={() => setAttributes({ selectedNews: [] })}
							>
								Очистити обрані новини
							</Button>
						}
					</div>
				</PanelBody>
				<SectionsDecorPicker decor={decor} setDecor={(value) => setAttributes({ decor: value })} />
			</InspectorControls>
			<section {...blockProps}>
				<SectionDecor decor={decor} />
				<div ref={mergeRefs(ref, refCategories, newsForFilterRef, newsByIdsRef)}
					className={clsx(
						"container flex flex-col relative z-2",
						{
							'disabled': isPostsFetching || isLoadingNewsByIds
						}
					)}
				>
					{children}
					<div className="mt-[30px] md:mt-[40px] lg:mt-[50px] relative order-2 first-child-no-margin">
						{isLoading && <div className="text-center text-lg">Заватнажується ...</div>}

						{(renderPosts.length)
							? <div className="swiper md-max:[&.swiper]:overflow-visible [&:not(.swiper-initialized)_.swiper-wrapper]:gap-[10px] md:[&:not(.swiper-initialized)_.swiper-wrapper]:gap-[20px] lg:[&:not(.swiper-initialized)_.swiper-wrapper]:gap-[24px] 4xl:[&:not(.swiper-initialized)_.swiper-wrapper]:gap-[30px] md-max:[&_.swiper-slide]:w-[323px] md:[&:not(.swiper-initialized)_.swiper-slide]:w-[calc(50%-10px)] lg:[&:not(.swiper-initialized)_.swiper-slide]:w-[calc(50%-(24px*1/2))] 4xl:[&:not(.swiper-initialized)_.swiper-slide]:w-[calc(50%-(30px*1/2))]">
								<div className={clsx(
									'swiper-wrapper',
									{
										'md:justify-center': (renderPosts.length <= 2),
									}
								)}>
									{renderPosts.map(post => (
										<div className="swiper-slide !h-auto pointer-events-none">
											<div className="card-news-v2 nested-bg-item rounded-[12px] p-[5px] h-full flex flex-col xl:flex-row [&_.ibg]:hover:scale-110 [&_.title]:hover:text-accent-first">
												<div
													className="aspect-[1/0.597] xl:aspect-auto xl:min-h-[301px] 4xl:min-h-[394px] xl:w-[47.68%] grow-0 shrink-0 rounded-[8px] relative overflow-hidden"
													dangerouslySetInnerHTML={{ __html: post.image }}
												>
												</div>
												<div className="mt-[20px] lg:mt-[30px] xl:mt-0 px-[15px] pb-[15px] xl:pl-[20px] xl:py-[16px] xl:pr-[10px] grow shrink flex flex-col">
													<div className="text-sm text-dark-primary-60 lowercase">
														{post.date}
													</div>
													<div style={{ '--line': '3', '--line-height': '1.2em' }} className="title mt-[5px] xl:mt-[10px] h3 text-dark-primary transition-colors truncate-text">
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

						{(renderPosts.length > 2) && <SliderNav />}
					</div>

					{!!selectedNews.length && !!renderPosts.length &&
						<div className={clsx(
							"mt-[30px] md:mt-[40px] lg:mt-[50px] relative order-3 first-child-no-margin"
						)}>
							<div className="text-lg">
								Обрані новини, <strong className="text-sm">карточки нижче відображаються тільки тут, в режимі наповення сайту</strong>
							</div>
							<div className="mt-[20px] selectedNews flex flex-wrap gap-[10px]">
								{renderPosts.map(post => (
									<div className="card-news-v1 relative nested-bg-item rounded-[12px] p-[5px]">
										<button
											onClick={() => {
												setAttributes({ selectedNews: selectedNews.filter(id => id != post.id) })
											}}
											className="absolute z-3 top-0 right-0 icon-x-mark flex items-center justify-center h-[44px] w-[44px] rounded-[8px] bg-dark-primary text-light-primary text-sm transition-colors hover:bg-dark-primary-80">
										</button>
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
										<div className="flex flex-col h-full relative z-1">
											<div
												className="aspect-[1/0.597] grow-0 shrink-0 rounded-[8px] bg-dark-primary-80 overflow-hidden relative"
												dangerouslySetInnerHTML={{ __html: post.image }}
											></div>
											<div className="grow shrink mt-[16px] md:mt-[20px] xl:mt-[30px] pb-[11px] px-[11px] md:pb-[15px] md:px-[15px] flex flex-col">
												<div className="text-sm text-dark-primary-60 lowercase">
													{post.data}
												</div>
												<div style={{ '--line': '3', '--line-height': '1.4em' }} className="title mt-[5px] h5 text-dark-primary mb-auto transition-colors truncate-text uppercase">
													{post.title}
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					}
				</div>
			</section>
		</>
	);
}
