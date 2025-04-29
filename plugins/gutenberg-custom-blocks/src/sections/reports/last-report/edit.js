import {
	useBlockProps,
	useInnerBlocksProps,
} from "@wordpress/block-editor";
import "./editor.scss";
import { getUrlToStaticImages } from "../../../utils/utils";
import useFetchOnVisible from "../../../hooks/hooks";
import apiFetch from "@wordpress/api-fetch";



export default function Edit() {
	const blockProps = useBlockProps({
		className: 'block relative h-[314px] lg:h-[460px] 4xl:h-[600px] rounded-[12px] overflow-hidden'
	});

	const { children } = useInnerBlocksProps({}, {
		template: [
			['t4u/image', {
				classes: 'ibg z-1'
			}]
		],
		allowedBlocks: []
	});

	const fetchPosts = () => apiFetch({ path: 'site-core/v1/report' });
	const { ref, data, isLoading } = useFetchOnVisible(fetchPosts);

	const lastReport = (!!data && !!data?.posts?.length) ? data?.posts[0] : null;

	return (
		<div {...blockProps}>
			{children}

			<div ref={ref} className="absolute z-2 p-[16px] lg:p-[30px] left-0 right-0 bottom-0 bg-white/60 backdrop-blur lg:flex items-center justify-between gap-[20px] pointer-events-none">
				{isLoading
					? <div className="text-center text-lg">Заватнажується ...</div>
					: lastReport &&
					<>
						<div className="">
							<div className="h3 text-dark-primary">
								{lastReport.title}
							</div>
							{!!lastReport.excerpt &&
								<div className="mt-[2px] lg:mt-[5px] text-md">
									{lastReport.excerpt}
								</div>
							}
						</div>
						<div className="mt-[10px] flex gap-[10px] items-center">
							<div className="bg-[--bg] h-[44px] w-[44px] grow-0 shrink-0 rounded-[6px] flex items-center justify-center">
								<img className="h-[30px] w-auto" src={getUrlToStaticImages('icons/pdf.svg')} alt="pdf" />
							</div>
							<span className="btn-with-arrow accent-first">
							<span data-text={lastReport.text_see_the_report}></span>
						</span>
						</div>
					</>

				}
			</div>
		</div>
	);
}
