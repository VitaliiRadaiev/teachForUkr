import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls
} from "@wordpress/block-editor";
import { PanelBody, PanelRow, CheckboxControl, Button, FormToggle } from "@wordpress/components";
import { useEffect, useState, useCallback } from "@wordpress/element";

import "./editor.scss";
import clsx from "clsx";
import { getSectionsPaddingClasses, getSectionsMarginClasses, getUrlToStaticImages, mergeRefs, debounce, buildApiPath } from "../../utils/utils";
import { DefaultSectionsControls } from "../../components/default-sections-controls/DefaultSectionsControls";
import { SectionsDecorPicker } from "../../components/section-decor-picker/SectionsDecorPicker";
import { SectionDecor } from "../../ui/section-decor/SectionDecor";
import useFetchOnVisible from "../../hooks/hooks";
import apiFetch from "@wordpress/api-fetch";

const posts_per_page = 50;

export default function Edit({ attributes, setAttributes }) {
	const { preview, isHide, padding, margin, background, className, decor, selectedCategories, selectedPosts, popular } = attributes;
	const [filterPosts, setFilterPosts] = useState([]);
	const [isFilterPostsFetching, setIsFilterPostFetching] = useState(false);
	const [page, setPage] = useState(1);
	const [search, setSearch] = useState('');
	const [max_num_pages, setMax_num_pages] = useState(1);
	const [renderPosts, setRenderPosts] = useState([]);

	const blockProps = useBlockProps({
		className: clsx(
			'faq-section rounded-[20px] md:rounded-[30px] relative',
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
				classes: "order-1 [&~.t4u-content]:mt-[30px] md:[&~.t4u-content]:mt-[40px] 4xl:[&~.t4u-content]:mt-[50px]",
				aligment: "center",
				container: "lg",
				titleAcfField: "text_common_questions",
				subTitleAcfField: "text_support"
			}],
			["t4u/buttons-group", {
				classes: 'mt-[40px] xl:mt-[50px] order-3',
				alignment: 'center',
				options: {
					template: [
						["t4u/button", {
							classes: 'show-more-btn',
							acfField: 'text_download_more',
							acfFieldType: 'text',
							variant: 'btn-primary',
							renderAs: 'button',
							simpleWrapper: true,
							dataAttributes: {
								'data-action': 'show-more-btn'
							}
						}],
						["t4u/button", {
							acfField: 'link_faq',
							variant: 'btn-with-enter-arrow',
						}],
					],
					allowedBlocks: ['t4u/button']
				}
			}]
		],
		allowedBlocks: []
	})

	const fetchPosts = () => {
		const path = buildApiPath('site-core/v1/question', {
			category: selectedCategories.length ? selectedCategories.join(',') : undefined,
			popular
		});
		return apiFetch({ path });
	};
	const { ref, data, isLoading, refetch } = useFetchOnVisible(fetchPosts);

	const fetchPostsByIds = () => apiFetch({ path: `site-core/v1/question-by-ids?ids=${selectedPosts.join(',')}` });
	const { ref: postsByIdsRef, data: postsByIdsData, isLoading: isLoadingPostsByIds, refetch: refetchPostsByIds } = useFetchOnVisible(fetchPostsByIds);

	const fetchCategoriesData = () => apiFetch({ path: 'site-core/v1/question-categories' });
	const { ref: refCategories, data: dataCategories, isLoading: isLoadingCategories } = useFetchOnVisible(fetchCategoriesData);

	const fetchPostsForFilter = () => {
		const path = buildApiPath('site-core/v1/question', {
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
		const path = buildApiPath('site-core/v1/question', {
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
		const path = buildApiPath('site-core/v1/question', {
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
		let ids = [];
		if (isChecked) {
			ids = [...selectedCategories, checkedCategory];
			setAttributes({ selectedCategories: ids });
		} else {
			ids = selectedCategories.filter((id) => id !== checkedCategory);
			setAttributes({ selectedCategories: ids });
		}

		refetch(() => {
			const path = buildApiPath('site-core/v1/question', {
				category: ids.length ? ids.join(',') : undefined,
				popular
			});
			return apiFetch({ path });
		});

		loadPostsForFilter({
			selectedCategories: ids,
			page: 1,
			search: '',
			posts_per_page,
		});

		setPage(1);
		setSearch('');
	}

	const clearSelectedCategories = () => {
		let ids = [];

		setAttributes({ selectedCategories: ids });

		refetch(() => {
			const path = buildApiPath('site-core/v1/question', {
				category: ids.length ? ids.join(',') : undefined,
				popular
			});
			return apiFetch({ path });
		});

		loadPostsForFilter({
			selectedCategories: ids,
			page: 1,
			search: '',
			posts_per_page,
		});

		setPage(1);
		setSearch('');
	}

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
		refetchPostsByIds(() => apiFetch({ path: `site-core/v1/question-by-ids?ids=${selectedPosts.join(',')}` }));
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
									<>
										<CheckboxControl
											key={category.term_id}
											label={category.name}
											checked={selectedCategories.includes(category.term_id)}
											onChange={(isChecked) => handleCategoryChange(category.term_id, selectedCategories, isChecked)}
										/>
									</>
								))}
							</>
							: !isLoadingCategories && <div className="text-center text-lg">Не створено</div>
						}
						{!!selectedCategories.length && <Button onClick={() => clearSelectedCategories()} variant="primary" size="compact">Очистити обрані категорії</Button>}

						{/* ============================== */}
						
						<PanelRow className={clsx(
							'mt-[20px] text-[14px] font-bold',
							{ 'disabled': !!selectedPosts.length }
						)}>
							<label className="flex items-center gap-x-[10px] cursor-pointer">
								<FormToggle
									checked={popular}
									onChange={() => {
										refetch(() => {
											const path = buildApiPath('site-core/v1/question', {
												category: selectedCategories.length ? selectedCategories.join(',') : undefined,
												popular: !popular
											});
											return apiFetch({ path });
										});
										setAttributes({ popular: !popular })
									}}
								/>
								<span>Відобразити тільки популярні питання</span>
							</label>
						</PanelRow>

						{/* ============================== */}

						<div className="mt-[20px] text-[14px] font-bold">
							Відобразити тільки обрані питання
						</div>
						<div className={clsx({ 'disabled': popular })}>
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
									Очистити обрані карточки
								</Button>
							}
						</div>
					</div>

				</PanelBody>
				<SectionsDecorPicker decor={decor} setDecor={(value) => setAttributes({ decor: value })} />
			</InspectorControls>
			<section {...blockProps}>
				<SectionDecor decor={decor} />
				<div ref={mergeRefs(ref, postsByIdsRef, refCategories, postsForFilterRef)} className={clsx(
					'container relative z-2 flex flex-col',
					{
						'disabled': isLoadingPostsByIds
					}
				)}>
					{children}
					<div className="t4u-content max-w-[872px] w-full mx-auto order-2">
						{(isLoading) && <div className="text-center text-lg">Заватнажується ...</div>}
						{!!renderPosts.length
							?
							<div className="flex flex-col gap-[10px]">
								{renderPosts.map(post => (
									<div className="relative">
										{!!selectedPosts.length &&
											<button
												onClick={() => {
													setAttributes({ selectedPosts: selectedPosts.filter(id => id != post.id) })
												}}
												className="absolute z-3 top-0 left-0 icon-x-mark flex items-center justify-center h-[30px] w-[30px] rounded-[8px] bg-dark-primary text-light-primary text-sm transition-colors hover:bg-dark-primary-80">
											</button>
										}
										<div key={post.id} className="nested-bg-item rounded-[12px] border border-dark-primary-10 transition-colors [&.active]:border-accent-first hover:border-accent-first pointer-events-none">
											<div className="flex items-center justify-between gap-[24px] py-[16px] md:py-[10px] 4xl:py-[16px] pl-[16px] md:pl-[30px] pr-[10px] min-h-[82px] md:min-h-[70px] cursor-pointer [&.active_.plus-icon-square]:bg-accent-first [&.active_.item-2]:bg-white [&.active_.item-1]:scale-y-0 [&:not(.active)_.plus-icon-square]:hover:bg-accent-first-10 [&_.title]:hover:text-accent-first">
												<div className="title text-xl font-medium text-dark-primary transition-colors">
													{post.title}
												</div>
												<div className="plus-icon-square ml-auto grow-0 shrink-0 w-[50px] h-[50px] border-[2px] border-accent-first rounded-[8px] bg-accent-first-5 relative transition-colors">
													<span className="item-1 absolute block bg-accent-first transition-colors top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[16px] w-[2px]"></span>
													<span className="item-2 absolute block bg-accent-first transition top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[2px] w-[16px]"></span>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
							: !isLoading && <div className="text-center text-lg">Не знайдено</div>
						}
					</div>
				</div>
			</section>
		</>
	);
}
