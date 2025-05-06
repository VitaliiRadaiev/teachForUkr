import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls
} from "@wordpress/block-editor";
import "./editor.scss";
import clsx from "clsx";
import { getSectionsPaddingClasses, getSectionsMarginClasses, getUrlToStaticImages, getOptionsField, mergeRefs } from "../../utils/utils";
import { DefaultSectionsControls } from "../../components/default-sections-controls/DefaultSectionsControls";
import { SectionsDecorPicker } from "../../components/section-decor-picker/SectionsDecorPicker";
import { SectionDecor } from "../../ui/section-decor/SectionDecor";
import useFetchOnVisible from "../../hooks/hooks";
import apiFetch from "@wordpress/api-fetch";

export default function Edit({ attributes, setAttributes }) {
	const { preview, isHide, padding, margin, background, className, decor } = attributes;
	const blockProps = useBlockProps({
		className: clsx(
			'faq-categories-section rounded-[20px] md:rounded-[30px] relative',
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

	const fetchData = () => getOptionsField('text_review');
	const { ref: refTextReview, data: textReviewData } = useFetchOnVisible(fetchData);

	const fetchCategoriesData = () => apiFetch({ path: 'site-core/v1/question-categories' });
	const { ref, data, isLoading } = useFetchOnVisible(fetchCategoriesData);

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
				<div ref={mergeRefs(ref, refTextReview)} className="container relative z-2 flex flex-col">
					{children}
					<div className="t4u-content relative order-2">
						{(isLoading) && <div className="text-center text-lg">Заватнажується ...</div>}
						<div className="grid gap-[10px] md:gap-[20px] lg:gap-[24px] 4xl:gap-[30px] md:grid-cols-2 lg:grid-cols-3">
							{(Array.isArray(data) && !!data.length)
								? data.map(category => (
									<div key={category.term_id} className="card-with-icon nested-bg-item rounded-[12px] p-[16px] md:p-[20px] flex flex-col gap-y-[20px] md:gap-y-[40px] gap-x-[14px] md:gap-x-[20px] md-and-lg-max:[&:last-child:nth-child(odd)]:col-span-2 pointer-events-none">
										<div className="grow-0 shrink-0 h-[44px] w-[44px] md:h-[60px] md:w-[60px] rounded-full bg-accent-first flex items-center justify-center">
											<img className="h-[22px] w-[22px] md:h-[32px] md:w-[32px] object-cover color-light-primary-filter" src={getUrlToStaticImages('icons/decor-icon-21.svg')} alt="decor-icon" />
										</div>
										<div className="shrink grow flex flex-col first-no-margin last-no-margin sm-max:[&_.btn:not(.btn-with-arrow)]:w-full [&_.btn]:self-start [&:not(:has(.btn)):not(:has(.title))]:self-center">
											<span className="h3 text-dark-primary title">
												{category.name}
											</span>
											<div className="mt-[10px] shrink grow text-dark-primary-60">
												{category.description}
											</div>

											<div className="mt-[20px] btn btn-with-arrow accent-first">
												{!!textReviewData && textReviewData.value}
											</div>
										</div>
									</div>
								))
								: !isLoading && <div className="text-center text-lg">Не знайдено</div>
							}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
