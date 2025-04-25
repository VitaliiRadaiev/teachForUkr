import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls
} from "@wordpress/block-editor";
import { PanelBody, RadioControl } from "@wordpress/components";
import { useEffect, useState } from "@wordpress/element";
import "./editor.scss";
import clsx from "clsx";
import { getSectionsPaddingClasses, getSectionsMarginClasses, getUrlToStaticImages, mergeRefs, buildApiPath } from "../../utils/utils";
import { DefaultSectionsControls } from "../../components/default-sections-controls/DefaultSectionsControls";
import useFetchOnVisible from "../../hooks/hooks";
import apiFetch from "@wordpress/api-fetch";
import { SectionsDecorPicker } from "../../components/section-decor-picker/SectionsDecorPicker";
import { SectionDecor } from "../../ui/section-decor/SectionDecor";
import { CardPeople } from "../../ui/card-people/CardPeople";

export default function Edit({ attributes, setAttributes }) {
	const { preview, isHide, padding, margin, background, className, decor, selectedCategory } = attributes;
	const [activeCategory, setActiveCategory] = useState(null);

	const blockProps = useBlockProps({
		className: clsx(
			'people-tabs-section rounded-[20px] md:rounded-[30px] overflow-hidden relative',
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
				classes: "order-1 [&~.t4u-content]:mt-[30px] md:[&~.t4u-content]:mt-[50px] 4xl:[&~.t4u-content]:mt-[60px]",
				aligment: "center",
				container: "lg"
			}],
			["t4u/buttons-group", {
				classes: 'mt-[40px] xl:mt-[50px] order-3',
				alignment: 'center',
				options: {
					template: [
						["t4u/button", {
							classes: 'show-more-btn',
							acfField: 'text_show_more',
							acfFieldType: 'text',
							variant: 'btn-primary',
							renderAs: 'button',
							simpleWrapper: true,
							dataAttributes: {
								'data-action': 'show-more-btn'
							}
						}],
					],
					allowedBlocks: ['t4u/button']
				}
			}],
		],
		allowedBlocks: []
	})

	const fetchPosts = () => {
		const path = buildApiPath('site-core/v1/people', {
			category: selectedCategory,
			posts_per_page: 12
		});
		return apiFetch({ path });
	};
	const { ref, data, isLoading, refetch } = useFetchOnVisible(fetchPosts);

	const fetchCategoriesData = () => apiFetch({ path: 'site-core/v1/people-categories' });
	const { ref: refCategories, data: dataCategories, isLoading: isLoadingCategories } = useFetchOnVisible(fetchCategoriesData);

	const handleCategoryChange = (selectedCategory, dataCategories) => {
		setAttributes({ selectedCategory: +selectedCategory });

		const [activeCategory] = dataCategories.filter((category) => category.term_id == selectedCategory);

		setActiveCategory(activeCategory);
		
		refetch(() => {
			const path = buildApiPath('site-core/v1/people', {
				category: activeCategory?.sub_categories?.length ? activeCategory.sub_categories[0].term_id :  selectedCategory,
				posts_per_page: 12
			});
			return apiFetch({ path });
		});
	}

	useEffect(() => {
		if (dataCategories && dataCategories?.length) {
			handleCategoryChange(dataCategories[0].term_id, dataCategories);
		}
	}, [dataCategories]);
	
	if (preview) {
		return <img src={getUrlToStaticImages(preview)} />
	}

	return (
		<>
			<InspectorControls>
				<DefaultSectionsControls attributes={attributes} setAttributes={setAttributes} />
				<PanelBody title="Обрати категорію" initialOpen={true}>
					<div>
						{isLoadingCategories && <div className="text-center text-lg">Заватнажується ...</div>}
						{(!!dataCategories && dataCategories.length)
							? <>
								<RadioControl
									selected={selectedCategory}
									options={
										dataCategories.map(category => ({
											label: <span className="text-sm">{category.name}</span>,
											value: category.term_id
										}
										))
									}
									onChange={(value) => handleCategoryChange(value, dataCategories)}
								/>
							</>
							: !isLoadingCategories && <div className="text-center text-lg">Не створено</div>
						}
					</div>
				</PanelBody>
				<SectionsDecorPicker decor={decor} setDecor={(value) => setAttributes({ decor: value })} />
			</InspectorControls >
			<section {...blockProps}>
				<SectionDecor decor={decor} />
				<div ref={mergeRefs(ref, refCategories)} className="container flex flex-col relative z-2">
					{children}
					<div className="t4u-content relative order-2 first-child-no-margin flex flex-col">
						{(!!activeCategory && !!activeCategory.sub_categories?.length) &&
							<div className="self-center max-w-full">
								<div className="mx-[-16px] md:mx-[-40px] lg-max:overflow-y-hidden lg-max:h-[60px]">
									<div className="px-[16px] md:px-[40px] lg-max:pb-[20px] lg-max:overflow-x-auto">
										<div className="flex bg-[var(--nested-bg)] p-[5px] rounded-[12px] lg-max:w-max lg:flex-wrap lg:justify-center">
											{activeCategory.sub_categories?.map((category, index) => (
												<button className={clsx({ 'active': index === 0 }, 'btn btn-secondary accent-second btn-secondary-sm grow-0 shrink-0 font-medium [&.btn]:min-h-[44px] lg:min-h-[50px] [&.btn]:px-[20px] [&.btn]:bg-transparent [&.btn]:text-dark-primary [&.btn.active]:bg-[var(--accent)] [&.btn.active]:text-white [&.btn.active]:pointer-events-none pointer-events-none')}>
													<span data-text={category.name}></span>
												</button>
											))}
										</div>
									</div>
								</div>
							</div>
						 }

						{(isLoading) && <div className="text-center text-lg">Заватнажується ...</div>}
						{(!!data && !!data.posts.length)
							?
							<div className="mt-[20px] md:mt-[30px] 4xl:mt-[40px] first-child-no-margin grid gap-[20px] lg:gap-[24px] 4xl:gap-[30px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
								{data.posts.map(post => (
									<CardPeople post={post} />
								))}
							</div>
							: !isLoading && <div className="text-center text-lg">Не знайдено</div>
						}
					</div>
				</div>
			</section >
		</>
	);
}
