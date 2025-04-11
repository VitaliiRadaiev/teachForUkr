import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls
} from "@wordpress/block-editor";
import "./editor.scss";
import clsx from "clsx";
import { getSectionsPaddingClasses, getSectionsMarginClasses, getUrlToStaticImages } from "../../utils/utils";
import { DefaultSectionsControls } from "../../components/default-sections-controls/DefaultSectionsControls";
import useFetchOnVisible from "../../hooks/hooks";
import apiFetch from "@wordpress/api-fetch";


export default function Edit({ attributes, setAttributes }) {
	const { preview, isHide, padding, margin, background, className } = attributes;

	const blockProps = useBlockProps({
		className: clsx(
			'partners-grid-section',
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
				classes: "order-1"
			}],
			["t4u/buttons-group", {
				classes: 'mt-[40px] md:mt-[50px] order-3',
				alignment: 'center',
				options: {
					template: [
						["t4u/button", {
							acfField: 'text_show_more',
							acfFieldType: 'text',
							variant: 'btn-primary',
							renderAs: 'button',
							simpleWrapper: true,
							dataAttributes: {
								'data-action': 'show-more-parnters'
							}
						}],
					],
					allowedBlocks: ['t4u/button']
				}
			}],
		],
		allowedBlocks: []
	});

	const fetchCategories = () => apiFetch({ path: 'site-core/v1/partners-categories' });
	const { ref: categoriRef, data: categories } = useFetchOnVisible(fetchCategories);

	const fetchPartners = () => apiFetch({ path: 'site-core/v1/partners?category=all' });
	const { ref: partnersRef, data: partners } = useFetchOnVisible(fetchPartners);

	if(preview) {
		return <img src={getUrlToStaticImages(preview)} />
	}

	return (
		<>
			<InspectorControls>
				<DefaultSectionsControls attributes={attributes} setAttributes={setAttributes} />
			</InspectorControls>
			<section {...blockProps}>
				<div ref={partnersRef} className="container flex flex-col">
					{children}
					<div ref={categoriRef} className="mt-[30px] md:mt-[50px] 4xl:mt-[60px] first-child-no-margin order-2 flex flex-col">
						{!!categories
							? <div className="self-center max-w-full">
								<div className="mx-[-16px] md:mx-[-40px] lg-max:overflow-y-hidden lg-max:h-[60px]">
									<div className="px-[16px] md:px-[40px] lg-max:pb-[20px] lg-max:overflow-x-auto">
										<div className="flex bg-[var(--nested-bg)] p-[5px] rounded-[12px] lg-max:w-max lg:flex-wrap lg:justify-center">
											{categories?.map(category => (
												<button data-category-slug={category.slug} className={clsx({ 'active': category.slug === 'all' }, 'btn btn-secondary accent-second btn-secondary-sm grow-0 shrink-0 font-medium [&.btn]:min-h-[44px] lg:min-h-[50px] [&.btn]:px-[20px] [&.btn]:bg-transparent [&.btn]:text-dark-primary [&.btn.active]:bg-[var(--accent)] [&.btn.active]:text-white [&.btn.active]:pointer-events-none [&.btn]:hover:bg-transparent')}>
													<span data-text={category.name}></span>
												</button>
											))}
										</div>
									</div>
								</div>
							</div>
							: <div className="text-center text-lg">Заватнажується ...</div>
						}

						{!!partners
							? partners?.posts?.length
								? <div className="mt-[20px] md:mt-[30px] 4xl:mt-[40px] grid md:grid-cols-2 lg:grid-cols-3 gap-[10px] xl:gap-[24px]">
									{partners?.posts.map(post => (
										<div class="partner-card card-rotate relative md-and-lg-max:[&:last-child:nth-child(odd)]:col-span-2">
											<div class="card-rotate-front nested-bg-item p-[5px] rounded-[12px] h-full flex flex-col">
												<div class="absolute top-[15px] left-0 right-0 pl-[15px] pr-[70px] flex flex-wrap gap-[5px]">
													{post.categories.map(category => (
														<div class={`category-tag category-colors-${category.type}`}>
															<img src={category.img} alt="category-icon" />
															<span>{category.name}</span>
														</div>
													))}
												</div>

												{!!post.excerpt &&
													<button data-action="show-details" class="absolute top-[15px] right-[15px] cursor-pointer hover:scale-105 transition-transform">
														<img class="h-[44px] lg:h-[30px] w-[44px] lg:w-[30px] object-contain" src={getUrlToStaticImages('icons/info.svg')} alt="info" />
													</button>
												}
												<div class="h-[177px] rounded-[8px] bg-[var(--bg)] pt-[44px] pb-[20px] px-[20px] flex items-center justify-center" dangerouslySetInnerHTML={{ __html: post.logo }} ></div>
												<div class="mt-[5px] p-[15px] lg:pt-[25px] lg:pb-[20px] shrink grow">
													<div class="h3 text-dark-primary">
														{post.title}
													</div>
													{!!post.url &&
														<div class="mt-[20px]">
															<span class="btn-with-arrow accent-first">
																<span data-text={post.text_go_to}></span>
															</span>
														</div>
													}
												</div>
											</div>
										</div>
									))}
								</div>
								: <div className="text-center text-lg">Не створено</div>
							: <div className="text-center text-lg">Заватнажується ...</div>
						}

					</div>
				</div>
			</section>
		</>
	);
}
