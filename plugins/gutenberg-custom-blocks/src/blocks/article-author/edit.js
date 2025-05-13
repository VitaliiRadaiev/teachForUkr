import {
	useBlockProps,
	InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
import "./editor.scss";
import clsx from "clsx";
import { IsHide } from "../../components/is-hide/IsHide";
import useFetchOnVisible from "../../hooks/hooks";
import apiFetch from "@wordpress/api-fetch";

export default function Edit({ attributes, setAttributes }) {
	const { isHide, classes, className, authorId } = attributes;

	const blockProps = useBlockProps({
		className: clsx(
			'article-author',
			classes,
			className,
			{
				['hide-block']: isHide,
			}
		)
	});


	const fetchPosts = () => apiFetch({ path: 'site-core/v1/authors' });
	const { ref, data, isLoading } = useFetchOnVisible(fetchPosts);

	return (
		<>
			<InspectorControls>
				<IsHide isHide={isHide} setIsHide={(val) => setAttributes({ isHide: val })} />
				<PanelBody title="Обрати автора" initialOpen={true}>
					<div className="mt-[5px] max-h-[400px] overflow-auto">
						{(!!data ?? data.posts.length)
							? data.posts.map(post => (
								<div
									title={post.name}
									className={clsx(
										'btn cursor-pointer p-[5px] transition-opacity hover:bg-light-primary-80 hover:[&.bg-light-primary-60]:bg-light-primary-40',
										{ 'bg-light-primary-60': post.id === authorId }
									)}
									key={post.id}
									onClick={(e) => {
										setAttributes({ authorId: post.id })
									}}
								>
									<div style={{ '--line': 1, '--line-height': '1.4em' }} className="text-sm truncate-text">
										{post.name}
									</div>
								</div>
							))
							: <div className="text-center text-sm">Не знайдено</div>
						}
					</div>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<div ref={ref} className="flex items-center justify-center gap-[10px]">
					{isLoading
						? <div className="text-center text-lg">Заватнажується ...</div>
						: <>
							{(!!data && !!authorId)
								? data.posts.filter(post => post.id === authorId).map(post => (
									<>
										<div
											dangerouslySetInnerHTML={{ __html: post.img }}
											className="shrink-0 grow-0"
										></div>
										<div class="text-sm text-dark-primary">
											{post.name}
										</div>
									</>
								))
								: <>
									<div className="shrink-0 grow-0">
										<img alt='' src='https://secure.gravatar.com/avatar/5940893f681b8235f5c8ff7a321493fa501536285ac18a09c0583a11c40a8900?s=96&#038;d=mm&#038;r=g' srcset='https://secure.gravatar.com/avatar/5940893f681b8235f5c8ff7a321493fa501536285ac18a09c0583a11c40a8900?s=192&#038;d=mm&#038;r=g 2x' class='avatar avatar-96 photo h-[44px] w-[44px] object-contain rounded-full shrink-0 grow-0' height='96' width='96' loading='lazy' decoding='async' />
									</div>
									<div class="text-sm text-dark-primary">
										Не обрано
									</div>
								</>
							}
						</>
					}
				</div>
			</div>
		</>
	);
}
