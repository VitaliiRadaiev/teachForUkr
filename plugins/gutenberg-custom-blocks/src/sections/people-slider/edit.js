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
import { CardPeople } from "../../ui/card-people/CardPeople";

const posts_per_page = 3;

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
			'people-slider-section rounded-[20px] md:rounded-[30px] overflow-hidden relative',
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
							variant: 'btn-primary',
							acfField: 'text_more',
							acfFieldType: 'text'
						}],
					],
					allowedBlocks: ['t4u/button']
				}
			}],
		],
		allowedBlocks: []
	})

	const fetchPosts = () => apiFetch({ path: `site-core/v1/people${selectedCategories.length ? `?category=${selectedCategories.join(',')}` : ''}` });
	const { ref, data, isLoading, refetch } = useFetchOnVisible(fetchPosts);

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
		// if (selectedPosts.length && data && postsByIdsData) {
		// 	setRenderPosts(postsByIdsData.posts);
		// } else if (data) {
		// 	setRenderPosts(data.posts);
		// }

		if (data) {
			setRenderPosts(data.posts);
		}
	}, [data]);


	console.log(renderPosts);

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
				<div ref={mergeRefs(ref)} className={clsx(
					'container flex flex-col relative z-2'
				)}>
					{children}
					<div className="mt-[30px] md:mt-[40px] lg:mt-[50px] relative order-2 first-child-no-margin">
						{(isLoading) && <div className="text-center text-lg">Заватнажується ...</div>}
						{!!renderPosts.length
							?
							<div className="swiper lg-max:[&.swiper]:overflow-visible [&:not(.swiper-initialized)_.swiper-wrapper]:gap-[10px] md:[&:not(.swiper-initialized)_.swiper-wrapper]:gap-[20px] lg:[&:not(.swiper-initialized)_.swiper-wrapper]:gap-[24px] 4xl:[&:not(.swiper-initialized)_.swiper-wrapper]:gap-[30px] lg-max:[&_.swiper-slide]:w-[323px] lg:[&:not(.swiper-initialized)_.swiper-slide]:w-[calc(33.333333%-(24px*2/3))] xl:[&:not(.swiper-initialized)_.swiper-slide]:w-[calc(25%-(24px*3/4))] 4xl:[&:not(.swiper-initialized)_.swiper-slide]:w-[calc(25%-(30px*3/4))]">
								<div className="swiper-wrapper">
									{renderPosts.map(post => (
										<div className="swiper-slide !h-auto pointer-events-none">
											<CardPeople post={post} />
										</div>
									))}
								</div>

							</div>
							: !isLoading && <div className="text-center text-lg">Не знайдено</div>
						}
						{(renderPosts.length > 4) && <SliderNav />}
					</div>
				</div>
			</section>
		</>
	);
}
