import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls
} from "@wordpress/block-editor";
import { PanelBody, CheckboxControl, Button } from "@wordpress/components";
import { useEffect, useState, useCallback } from "@wordpress/element";
import { useSelect, useDispatch } from '@wordpress/data';
import "./editor.scss";
import clsx from "clsx";
import { getSectionsPaddingClasses, getSectionsMarginClasses, getUrlToStaticImages, getOptionsField, mergeRefs, debounce, buildApiPath } from "../../utils/utils";
import { DefaultSectionsControls } from "../../components/default-sections-controls/DefaultSectionsControls";
import useFetchOnVisible from "../../hooks/hooks";
import apiFetch from "@wordpress/api-fetch";
import { SliderNav } from "../../ui/slider-nav/SliderNav";
import { SectionsDecorPicker } from "../../components/section-decor-picker/SectionsDecorPicker";
import { SectionDecor } from "../../ui/section-decor/SectionDecor";

const posts_per_page = 50;

export default function Edit({ attributes, setAttributes, clientId }) {
	const { preview, isHide, padding, margin, background, className, decor, selectedCategories, selectedPosts } = attributes;
	const [filterPosts, setFilterPosts] = useState([]);
	const [isFilterPostsFetching, setIsFilterPostFetching] = useState(false);
	const [page, setPage] = useState(1);
	const [search, setSearch] = useState('');
	const [max_num_pages, setMax_num_pages] = useState(1);
	const [renderPosts, setRenderPosts] = useState([]);
	const { updateBlockAttributes } = useDispatch('core/block-editor');
	const innerBlocks = useSelect((select) => select('core/block-editor').getBlocks(clientId), [clientId]);


	const blockProps = useBlockProps({
		className: clsx(
			'stories-slider-section rounded-[20px] md:rounded-[30px] overflow-hidden relative',
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
							acfField: 'link_more_stories',
							variant: 'btn-primary'
						}],
					],
					allowedBlocks: ['t4u/button']
				}
			}],
		],
		allowedBlocks: []
	})

	const fetchTitleData = () => getOptionsField('text_stories');
	const { ref: titleRef, data: titleData } = useFetchOnVisible(fetchTitleData);

	const fetchPosts = () => apiFetch({ path: `site-core/v1/story${selectedCategories.length ? `?category=${selectedCategories.join(',')}` : ''}` });
	const { ref, data, isLoading, refetch } = useFetchOnVisible(fetchPosts);

	const fetchPostsByIds = () => apiFetch({ path: `site-core/v1/story-by-ids?ids=${selectedPosts.join(',')}` });
	const { ref: postsByIdsRef, data: postsByIdsData, isLoading: isLoadingPostsByIds, refetch: refetchPostsByIds } = useFetchOnVisible(fetchPostsByIds);

	const fetchCategoriesData = () => apiFetch({ path: 'site-core/v1/story-categories' });
	const { ref: refCategories, data: dataCategories, isLoading: isLoadingCategories } = useFetchOnVisible(fetchCategoriesData);

	const fetchPostsForFilter = () => {
		const path = buildApiPath('site-core/v1/story', {
			category: selectedCategories.length ? selectedCategories.join(',') : undefined,
			page: page,
			search: search,
			posts_per_page: posts_per_page
		});
		return apiFetch({ path });
	};
	const { ref: postsForFilterRef, data: postsForFilter, isLoading: isPostsForFilterLoading, refetch: refetchPostsForFilter } = useFetchOnVisible(fetchPostsForFilter);


	const loadMorePostsForFilter = async ({ selectedCategories, page, search, posts_per_page }) => {
		setIsFilterPostFetching(true);
		const path = buildApiPath('site-core/v1/story', {
			category: selectedCategories.length ? selectedCategories.join(',') : undefined,
			page: page,
			search: search,
			posts_per_page: posts_per_page
		});
		const res = await apiFetch({ path });
		setFilterPosts((posts) => [...posts, ...res.posts]);
		setMax_num_pages(res.max_num_pages);
		setIsFilterPostFetching(false);
	}

	const loadPostsForFilter = async ({ selectedCategories, page, search, posts_per_page }) => {
		setIsFilterPostFetching(true);
		const path = buildApiPath('site-core/v1/story', {
			category: selectedCategories.length ? selectedCategories.join(',') : undefined,
			page: page,
			search: search,
			posts_per_page: posts_per_page
		});
		const res = await apiFetch({ path });
		setFilterPosts(res.posts);
		setMax_num_pages(res.max_num_pages);
		setIsFilterPostFetching(false);
	}

	const debouncedloadPostsForFilter = useCallback(debounce(loadPostsForFilter, 500), []);

	const handleCategoryChange = (checkedCategory, selectedCategories, isChecked) => {
		let slugs = [];
		if (isChecked) {
			slugs = [...selectedCategories, checkedCategory];
			setAttributes({ selectedCategories: slugs });
		} else {
			slugs = selectedCategories.filter((slug) => slug !== checkedCategory);
			setAttributes({ selectedCategories: slugs });
		}

		refetch(() => apiFetch({ path: `site-core/v1/story${slugs.length ? `?category=${slugs.join(',')}` : ''}` }));

		loadPostsForFilter({
			selectedCategories: slugs,
			page: 1,
			search: '',
			posts_per_page,
		});

		setPage(1);
		setSearch('');
	}

	const clearSelectedCategories = () => {
		let slugs = [];

		setAttributes({ selectedCategories: slugs });

		refetch(() => apiFetch({ path: `site-core/v1/story${slugs.length ? `?category=${slugs.join(',')}` : ''}` }));

		loadPostsForFilter({
			selectedCategories: slugs,
			page: 1,
			search: '',
			posts_per_page,
		});

		setPage(1);
		setSearch('');
	}

	useEffect(() => {
		if (renderPosts.length < 2) {
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
		if (titleData) {
			const title = innerBlocks[0]?.innerBlocks[1];
			if (title && !title.attributes.text) {
				updateBlockAttributes(title.clientId, {
					text: titleData.value
				})
			}
		}
	}, [titleData]);

	useEffect(() => {
		if (postsForFilter) {
			setFilterPosts(postsForFilter.posts);
			setMax_num_pages(postsForFilter.max_num_pages);
		}
	}, [postsForFilter]);

	useEffect(() => {
		return () => {
			debouncedloadPostsForFilter.cancel();
		};
	}, [debouncedloadPostsForFilter]);

	useEffect(() => {
		refetchPostsByIds(() => apiFetch({ path: `site-core/v1/story-by-ids?ids=${selectedPosts.join(',')}` }));
	}, [selectedPosts]);

	useEffect(() => {
		if (selectedPosts.length && data && postsByIdsData) {
			setRenderPosts(postsByIdsData.posts);
		} else if (data) {
			setRenderPosts(data.posts);
		}
	}, [selectedPosts, data, postsByIdsData]);

	if (preview) {
		return <img src={getUrlToStaticImages(preview)} />
	}

	return (
		<>
			<InspectorControls>
				<DefaultSectionsControls attributes={attributes} setAttributes={setAttributes} />
				<PanelBody title="Відобразити тільки по категоріях" initialOpen={true}>
					<div className={clsx({
						'disabled': isFilterPostsFetching || isPostsForFilterLoading || isLoadingPostsByIds
					})}>
						{isLoadingCategories && <div className="text-center text-lg">Заватнажується ...</div>}
						{(!!dataCategories && dataCategories.length)
							? <>
								{dataCategories.map(category => (
									<CheckboxControl
										key={category.slug}
										label={category.name}
										checked={selectedCategories.includes(category.slug)}
										onChange={(isChecked) => handleCategoryChange(category.slug, selectedCategories, isChecked)}
									/>
								))}
							</>
							: !isLoadingCategories && <div className="text-center text-lg">Не створено</div>
						}
						{!!selectedCategories.length && <Button onClick={() => clearSelectedCategories()} variant="primary" size="compact">Очистити обрані категорії</Button>}

						{/* ============================== */}

						<div className="mt-[20px] text-[14px] font-bold">
							Відобразити тільки обрані історії
						</div>
						<input
							className="w-full mt-[5px]"
							type="search"
							placeholder="Пошук"
							value={search}
							onChange={(e) => {
								debouncedloadPostsForFilter({
									selectedCategories,
									page: 1,
									search: e.target.value,
									posts_per_page
								})
								setSearch(e.target.value);
								setPage(1);
							}}
						/>

						<div className="mt-[5px] max-h-[400px] overflow-auto">

							{(filterPosts.length)
								? filterPosts.map(post => (
									<div
										title={post.title}
										className={clsx(
											'btn cursor-pointer p-[5px] transition-opacity hover:bg-light-primary-80 hover:[&.bg-light-primary-60]:bg-light-primary-40',
											{ 'bg-light-primary-60': selectedPosts.includes(post.id) }
										)}
										key={post.id}
										onClick={(e) => {
											if (e.target.closest('.btn').classList.contains('bg-light-primary-60')) {
												setAttributes({ selectedPosts: selectedPosts.filter(id => id != post.id) })
											} else {
												setAttributes({ selectedPosts: [...selectedPosts, post.id] })
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

							{(isPostsForFilterLoading || isFilterPostsFetching)
								? <div className="text-sm">Заватнажується ...</div>
								: (page < max_num_pages)
								&& <Button
									variant="secondary"
									size="small"
									onClick={() => {
										loadMorePostsForFilter({
											selectedCategories,
											page: page + 1,
											search,
											posts_per_page
										})
										setPage(page + 1);
									}}
								>Показати ще</Button>
							}
						</div>
						{!!selectedPosts.length &&
							<Button
								variant="primary" className="mt-[10px]"
								onClick={() => setAttributes({ selectedPosts: [] })}
							>
								Очистити обрані історії
							</Button>
						}
					</div>
				</PanelBody>
				<SectionsDecorPicker decor={decor} setDecor={(value) => setAttributes({ decor: value })} />
			</InspectorControls>
			<section {...blockProps}>
				<SectionDecor decor={decor} />
				<div ref={mergeRefs(titleRef, ref, postsByIdsRef, refCategories, postsForFilterRef)} className={clsx(
					'container flex flex-col relative z-2',
					{
						'disabled': isLoadingPostsByIds
					}
				)}>
					{children}
					<div className="mt-[30px] md:mt-[40px] lg:mt-[50px] relative order-2 first-child-no-margin">
						{(isLoading || isLoadingPostsByIds) && <div className="text-center text-lg">Заватнажується ...</div>}
						{!!renderPosts.length
							?
							<div className="swiper md-max:[&.swiper]:overflow-visible lg:[&.swiper]:overflow-visible [&:not(.swiper-initialized)_.swiper-wrapper]:gap-[10px] md:[&:not(.swiper-initialized)_.swiper-wrapper]:gap-[20px] lg:[&:not(.swiper-initialized)_.swiper-wrapper]:gap-[24px] 4xl:[&:not(.swiper-initialized)_.swiper-wrapper]:gap-[30px] md-max:[&_.swiper-slide]:w-[323px] md:[&:not(.swiper-initialized)_.swiper-slide]:w-full lg:[&_.swiper-slide]:w-[778px] xl:[&_.swiper-slide]:w-[1096px] 4xl:[&_.swiper-slide]:w-[1462px]">
								<div className="swiper-wrapper">
									{renderPosts.map(post => (
										<div className="swiper-slide !h-auto pointer-events-none">
											<div key={post.id} className="flex flex-col lg:flex-row h-full nested-bg-item rounded-[12px] p-[5px] md:p-[10px] [&_.ibg]:hover:scale-110 [&_.title]:hover:text-accent-first">
												<div
													className="aspect-[1/0.856] md:aspect-[1/0.712] lg:aspect-auto lg:w-[380px] xl:w-[536px] 4xl:w-[705px] lg:min-h-[325px] xl:min-h-[459px] 4xl:min-h-[523px] grow-0 shrink-0 relative overflow-hidden rounded-[8px]"
													dangerouslySetInnerHTML={{ __html: post.image }}
												>
												</div>
												<div className="mt-[16px] md:mt-[24px] lg:mt-0 px-[11px] md:px-[10px] lg:pl-[34px] lg:pr-[34px] pb-[11px] md:pb-0 lg:py-[20px] grow shrink flex flex-col relative">
													<img className="absolute top-0 md:top-[34px] lg:top-0 right-[11px] md:right-[10px] lg:right-0 w-[15px] md:w-[17px] h-auto" src={getUrlToStaticImages('icons/story-card-decor-icon-1.svg')} alt="" />
													<div className="text-sm text-dark-primary-60 lowercase lg-max:pr-[20px]">
														{post.date}
													</div>
													<div className="title mt-[5px] md:mt-[10px] h3 text-dark-primary transition-colors lg-max:pr-[20px]">
														{post.title}
													</div>
													<div style={{ '--line': '5', '--line-height': '1.4em' }} className="mt-[5px] mb-[16px] md:mb-[30px] text-md md-max:truncate-text text-dark-primary-80">
														{post.excerpt}
													</div>
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
						{(renderPosts.length > 1) && <SliderNav />}
					</div>

					{!!selectedPosts.length && !!renderPosts.length &&
						<div className={clsx(
							"mt-[30px] md:mt-[40px] lg:mt-[50px] relative order-3 first-child-no-margin"
						)}>
							<div className="text-lg">
								Обрані історії, <strong className="text-sm">карточки нижче відображаються тільки тут, в режимі наповення сайту</strong>
							</div>
							<div className="mt-[20px] selectedNews flex flex-wrap gap-[10px]">
								{renderPosts.map(post => (
									<div className="card-news-v1 relative nested-bg-item rounded-[12px] p-[5px]">
										<button
											onClick={() => {
												setAttributes({ selectedPosts: selectedPosts.filter(id => id != post.id) })
											}}
											className="absolute z-3 top-0 right-0 icon-x-mark flex items-center justify-center h-[44px] w-[44px] rounded-[8px] bg-dark-primary text-light-primary text-sm transition-colors hover:bg-dark-primary-80">
										</button>
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
