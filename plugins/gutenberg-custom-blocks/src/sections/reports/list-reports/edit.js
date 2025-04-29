import {
	useBlockProps,
} from "@wordpress/block-editor";
import "./editor.scss";
import { getUrlToStaticImages } from "../../../utils/utils";
import useFetchOnVisible from "../../../hooks/hooks";
import apiFetch from "@wordpress/api-fetch";



export default function Edit() {
	const blockProps = useBlockProps({
		className: 'mt-[20px] lg:mt-0'
	});

	const fetchPosts = () => apiFetch({ path: 'site-core/v1/report' });
	const { ref, data, isLoading } = useFetchOnVisible(fetchPosts);

	const otherPosts = (!!data && !!data?.posts?.length) ? data?.posts.slice(1) : null;

	return (
		<div {...blockProps}>
			<div ref={ref} className="max-h-[334px] lg:max-h-[460px] 4xl:max-h-[600px] !pr-[10px] lg:!pr-[16px] lg-max:!mr-[-10px] lg:!mx-0 [&_.swiper-scrollbar]:right-[0px] overflow-auto">
				{isLoading
					? <div className="text-center text-lg">Заватнажується ...</div>
					: otherPosts && <div className="flex flex-col gap-[10px]">
						{otherPosts.map(post => (
							<div className="flex items-center justify-between gap-[15px] nested-bg-item p-[16px] lg:p-[20px] 4xl:p-[24px] rounded-[12px] pointer-events-none">
								<div className="flex gap-[10px] lg:gap-[30px] items-center">
									<div className="bg-[--bg] h-[44px] w-[44px] grow-0 shrink-0 rounded-[6px] flex items-center justify-center">
										<img className="h-[30px] w-auto" src={getUrlToStaticImages('icons/pdf.svg')} alt="" />
									</div>
									<div className="h4 text-dark-primary">
										{post.title}
									</div>
								</div>
								<span className="btn-with-arrow accent-first report-btn">
									<span data-text={post.text_see_the_report}></span>
								</span>
							</div>
						))}
					</div>
				}
			</div>
		</div>
	);
}
