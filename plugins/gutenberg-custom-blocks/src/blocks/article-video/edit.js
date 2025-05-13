import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
	MediaUploadCheck,
	MediaUpload,
} from "@wordpress/block-editor";
import { PanelBody, Button } from "@wordpress/components";
import "./editor.scss";
import clsx from "clsx";
import { getMarginClasses, getUrlToStaticImages, removeDomain } from "../../utils/utils";
import { IsHide } from "../../components/is-hide/IsHide";
import { MarginYControl } from "../../components/space-control/MarginYControl";
import { useSelect, useDispatch } from '@wordpress/data';
import { useEffect } from "@wordpress/element";

export default function Edit({ attributes, setAttributes, clientId }) {
	const { isHide, margin, classes, className, preview, mediaId, mediaURL, mediaName } = attributes;

	const { updateBlockAttributes } = useDispatch('core/block-editor');
	const innerBlocks = useSelect((select) => select('core/block-editor').getBlocks(clientId), [clientId]);


	const blockProps = useBlockProps({
		className: clsx(
			'article-video',
			classes,
			className,
			getMarginClasses(margin),
			{
				['hide-block']: isHide,
			}
		)
	});

	const { children } = useInnerBlocksProps({}, {
		template: [
			['t4u/inner-block', {
				classes: 'relative rounded-[12px] overflow-hidden block aspect-[1/0.670] md:aspect-[1/0.482] [&_.play-icon]:hover:scale-105 bg-black',
				simpleWrapper: true,
				dataAttributes: {
					'data-fancybox': '',
					'href': '#test'
				},
				tag: 'a',
				options: {
					template: [
						['t4u/static-image', {
							classes: 'h-[69px] w-[69px] object-contain play-icon absolute z-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform',
							url: 'icons/play.svg'
						}],
						['t4u/image', {
							classes: 'ibg z-1 nested-bg-item opacity-60'
						}],
					],
					allowedBlocks: [],
					templateLock: 'all'
				}
			}],
			['t4u/inner-block', {
				classes: 'mt-[10px] italic text-dark-primary-60',
				options: {
					template: [
						['t4u/paragraph', {
							fontSize: 'sm'
						}]
					],
					allowedBlocks: [],
				}
			}]
		],
		allowedBlocks: [],

	});

	useEffect(() => {
		if (Array.isArray(innerBlocks)) {
			const videoWrapper = innerBlocks[0];
			videoWrapper && updateBlockAttributes(videoWrapper.clientId, {
				dataAttributes: {
					'data-fancybox': '',
					'href': mediaURL
				},
			})
		}
	}, [mediaURL]);

	if (preview) {
		return <img src={getUrlToStaticImages(preview)} />
	}
	return (
		<>
			<InspectorControls>
				<IsHide isHide={isHide} setIsHide={(val) => setAttributes({ isHide: val })} />
				<PanelBody title="Обрати відео" initialOpen={true}>
					{!!mediaName && <div className="text-sm mb-[10px]">{mediaName}</div>}

					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) => {
								setAttributes({
									mediaURL: removeDomain(media.url),
									mediaId: media.id,
									mediaName: media.name
								});
							}}
							allowedTypes={['video']}
							value={mediaId}
							render={({ open }) => (
								<Button variant="primary" onClick={open} className="mb-3">
									{mediaURL ? 'Обрати нове відео' : 'Обрати відео з галереї'}
								</Button>
							)}
						/>
					</MediaUploadCheck>

					<div className="mt-[20px] flex flex-col gap-2">
						<label htmlFor="video-url" className="text-sm">
							Посилання на відео (YouTube, Vimeo)
						</label>
						<input
							id="video-url"
							type="text"
							value={mediaURL || ''}
							className="components-text-control__input"
							onChange={(e) => {
								const url = e.target.value.trim();
								setAttributes({
									mediaURL: url,
									mediaId: undefined,
									mediaName: undefined
								});
							}}
						/>
					</div>
				</PanelBody>
				<MarginYControl size={margin} setSize={(s) => setAttributes({ margin: s })} />
			</InspectorControls>
			<div {...blockProps}>
				{children}
			</div>
		</>
	);
}


