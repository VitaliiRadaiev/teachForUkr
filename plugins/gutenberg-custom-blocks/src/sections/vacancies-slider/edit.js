import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls
} from "@wordpress/block-editor";
import { PanelBody, CheckboxControl, Button } from "@wordpress/components";
import { useEffect, useState } from "@wordpress/element";
import { useSelect, useDispatch } from '@wordpress/data';
import "./editor.scss";
import clsx from "clsx";
import { getSectionsPaddingClasses, getSectionsMarginClasses, getUrlToStaticImages, mergeRefs } from "../../utils/utils";
import { DefaultSectionsControls } from "../../components/default-sections-controls/DefaultSectionsControls";
import useFetchOnVisible from "../../hooks/hooks";
import apiFetch from "@wordpress/api-fetch";
import { SliderNav } from "../../ui/slider-nav/SliderNav";
import { SectionsDecorPicker } from "../../components/section-decor-picker/SectionsDecorPicker";
import { SectionDecor } from "../../ui/section-decor/SectionDecor";

export default function Edit({ attributes, setAttributes, clientId }) {
	const { preview, isHide, padding, margin, background, className, decor, selectedCategories } = attributes;
	const [renderPosts, setRenderPosts] = useState([]);
	const { updateBlockAttributes } = useDispatch('core/block-editor');
	const innerBlocks = useSelect((select) => select('core/block-editor').getBlocks(clientId), [clientId]);

	const blockProps = useBlockProps({
		className: clsx(
			'vacancies-slider-section rounded-[20px] md:rounded-[30px] overflow-hidden relative',
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
				titleAcfField: 'text_similar_vacancies'
			}],
			["t4u/buttons-group", {
				classes: 'mt-[40px] xl:mt-[50px] order-3',
				alignment: 'center',
				options: {
					template: [
						["t4u/button", {
							variant: 'btn-primary',
							acfField: 'link_vacancies',
						}],
					],
					allowedBlocks: ['t4u/button']
				}
			}],
		],
		allowedBlocks: []
	})


	const fetchPosts = () => apiFetch({ path: `site-core/v1/vacancy${selectedCategories.length ? `?category=${selectedCategories.join(',')}` : ''}` });
	const { ref, data, isLoading, refetch } = useFetchOnVisible(fetchPosts);

	const fetchCategoriesData = () => apiFetch({ path: 'site-core/v1/vacancy-city' });
	const { ref: refCategories, data: dataCategories, isLoading: isLoadingCategories } = useFetchOnVisible(fetchCategoriesData);

	const handleCategoryChange = (checkedCategory, selectedCategories, isChecked) => {
		let ids = [];
		if (isChecked) {
			ids = [...selectedCategories, checkedCategory];
			setAttributes({ selectedCategories: ids });
		} else {
			ids = selectedCategories.filter((id) => id !== checkedCategory);
			setAttributes({ selectedCategories: ids });
		}

		refetch(() => apiFetch({ path: `site-core/v1/vacancy${ids.length ? `?category=${ids.join(',')}` : ''}` }));
	}

	const clearSelectedCategories = () => {
		let ids = [];

		setAttributes({ selectedCategories: ids });

		refetch(() => apiFetch({ path: `site-core/v1/vacancy${ids.length ? `?category=${ids.join(',')}` : ''}` }));
	}

	useEffect(() => {
		if (renderPosts.length < 5) {
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
		if (data) {
			setRenderPosts(data.posts);
		}
	}, [data]);

	if (preview) {
		return <img src={getUrlToStaticImages(preview)} />
	}

	return (
		<>
			<InspectorControls>
				<DefaultSectionsControls attributes={attributes} setAttributes={setAttributes} />
				<PanelBody title="Відобразити тільки по категоріях" initialOpen={true}>
					<div className={clsx({
						'disabled': isLoading
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
					</div>
				</PanelBody>
				<SectionsDecorPicker decor={decor} setDecor={(value) => setAttributes({ decor: value })} />
			</InspectorControls>
			<section {...blockProps}>
				<SectionDecor decor={decor} />
				<div ref={mergeRefs(ref, refCategories)} className={clsx(
					'container flex flex-col relative z-2',
					{
						'disabled': isLoading
					}
				)}>
					{children}
					<div className="mt-[30px] md:mt-[40px] lg:mt-[50px] relative order-2 first-child-no-margin">
						{(isLoading) && <div className="text-center text-lg">Заватнажується ...</div>}
						{!!renderPosts.length
							?
							<div className="swiper lg-max:[&.swiper]:overflow-visible [&:not(.swiper-initialized)_.swiper-wrapper]:gap-[10px] md:[&:not(.swiper-initialized)_.swiper-wrapper]:gap-[20px] lg:[&:not(.swiper-initialized)_.swiper-wrapper]:gap-[24px] 4xl:[&:not(.swiper-initialized)_.swiper-wrapper]:gap-[30px] lg-max:[&_.swiper-slide]:w-[323px] lg:[&:not(.swiper-initialized)_.swiper-slide]:w-[calc(33.333333%-(24px*2/3))] xl:[&:not(.swiper-initialized)_.swiper-slide]:w-[calc(25%-(24px*3/4))] 4xl:[&:not(.swiper-initialized)_.swiper-slide]:w-[calc(25%-(30px*3/4))]">
								<div className={clsx(
									"swiper-wrapper",
									{
										'md:justify-center': (renderPosts.length < 3),
										'lg:justify-center': (renderPosts.length < 5),
									}
								)}>
									{renderPosts.map(post => (
										<div className="swiper-slide !h-auto pointer-events-none">
											<div className="card-vacancy h-full flex flex-col nested-bg-item rounded-[12px] p-[16px] md:p-[20px] [&_.title]:hover:text-accent-first">
												{(!!post.cities && !!post.cities.length) &&
													<div className="flex flex-wrap gap-[5px]">
														{post.cities.map(city => (
															<div className="flex items-center justify-center min-h-[26px] rounded-full border border-accent-first-10 bg-[--bg] px-[14px] py-[3px] text-sm text-dark-primary">
																{city.name}
															</div>
														))}
													</div>
												}

												<div className="mt-[10px] title h4 text-dark-primary transition-colors first-child-no-margin">
													{post.title}
												</div>
												<div style={{ '--line': '5', '--line-height': '1.4em' }} className="mt-[5px] mb-[20px] md:mb-[24px] text-md text-dark-primary-60 shrink grow truncate-text">
													{post.excerpt}
												</div>
												<span className="mt-auto btn-with-arrow accent-first self-start">
													<span data-text={post.text_more_details}></span>
												</span>
											</div>
										</div>
									))}
								</div>

							</div>
							: !isLoading && <div className="text-center text-lg">Не знайдено</div>
						}
						{(renderPosts.length > 4) && <SliderNav />}
					</div>
				</div>
			</section >
		</>
	);
}
