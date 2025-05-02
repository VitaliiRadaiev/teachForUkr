import {
	useBlockProps,
	useInnerBlocksProps,
	MediaUploadCheck,
	MediaUpload,
	InspectorControls
} from "@wordpress/block-editor";
import { PanelBody, Button } from "@wordpress/components";
import "./editor.scss";
import clsx from "clsx";
import { getUrlToStaticImages, removeDomain } from "../../utils/utils";
import { useSelect, useDispatch } from '@wordpress/data';
import { useEffect } from "@wordpress/element";
import { IconPicker } from "../../components/icon-picker/IconPicker";


export default function Edit({ attributes, setAttributes, clientId }) {
	const { letter, icon, mediaId, mediaURL, mediaName, className, textDownload } = attributes;

	const { updateBlockAttributes } = useDispatch('core/block-editor');
	const innerBlocks = useSelect((select) => select('core/block-editor').getBlocks(clientId), [clientId]);

	const blockProps = useBlockProps({
		className: clsx(
			'card-download-pdf nested-bg-item rounded-[12px] p-[16px] md:p-[20px] w-[calc(50%-(10px*1/2))] md:w-[calc(50%-(20px*1/2))] lg:w-[calc(25%-(24px*3/4))] 4xl:w-[calc(25%-(30px*3/4))] lg-max:[&:last-child:nth-child(odd)]:w-full',
			className
		)
	});

	const { children } = useInnerBlocksProps({}, {
		template: [
			['t4u/inner-block', {
				classes: 'mb-[20px] md:mb-[40px] h-[44px] w-[44px] md:h-[60px] md:w-[60px] rounded-full bg-accent-first text-light-primary flex items-center justify-center h3',
				simpleWrapper: true,
				options: {
					template: [
						['t4u/static-image', {
							classes: 'hidden h-[22px] w-[22px] md:h-[32px] md:w-[32px] object-cover color-light-primary-filter',
						}],
						['t4u/simple-html', {
							html: ''
						}]
					],
					allowedBlocks: []
				}
			}],
			['t4u/heading', {
				classes: 'mb-[16px] md:mb-[20px] text-dark-primary hyphens-auto flex flex-col',
				htmlTeg: 'span',
				fontSize: 'lg'
			}]
		],
		allowedBlocks: []
	});

	const setIcon = (iconUrl) => {
		const staticImage = innerBlocks[0]?.innerBlocks[0];
		const simpleHtml = innerBlocks[0]?.innerBlocks[1];
		staticImage && updateBlockAttributes(staticImage.clientId, {
			url: iconUrl,
			classes: clsx(
				'h-[22px] w-[22px] md:h-[32px] md:w-[32px] object-cover color-light-primary-filter',
				{
					'hidden': !iconUrl.length
				}
			)
		});
		simpleHtml && updateBlockAttributes(simpleHtml.clientId, {
			text: !!iconUrl.length ? '' : letter
		});
	}

	useEffect(() => {
		const heading = innerBlocks[1];
		if (heading) {
			const letter = heading.attributes.text.replace(/<[^>]+>/g, '').at(0);
			setAttributes({ letter });

			if (!icon.length) {
				const simpleHtml = innerBlocks[0]?.innerBlocks[1];
				
				simpleHtml && updateBlockAttributes(simpleHtml.clientId, {
					text: letter
				});
			}
		}
	}, [innerBlocks, icon]);

	return (
		<>
			<InspectorControls>
				<PanelBody
					title="Обрати файл для завантаження"
					initialOpen={true}
				>
					{!!mediaName && <div className="text-sm mb-[10px]">{mediaName}</div>}
					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) => {
								setAttributes({
									mediaURL: removeDomain(media.url),
									mediaId: media.id,
									mediaName: media.name
								})
							}}
							allowedTypes={['application/pdf']}
							value={mediaId}
							render={({ open }) => (
								<Button variant="primary" onClick={open}>
									{mediaURL ? 'Обрати новий файл' : 'Обрати файл'}
								</Button>
							)}
						/>
					</MediaUploadCheck>
				</PanelBody>
				<IconPicker iconUrl={icon} setIconUrl={(iconUrl) => {
					setAttributes({ icon: iconUrl });
					setIcon(iconUrl);
				}} />
			</InspectorControls>
			<div {...blockProps}>
				{children}
				<div className="mt-auto flex gap-[12px] items-center">
					<div className="bg-[--bg] h-[44px] w-[44px] grow-0 shrink-0 rounded-[6px] flex items-center justify-center">
						<img className="h-[30px] w-auto" src={getUrlToStaticImages('icons/pdf.svg')} alt="" />
					</div>
					<span className="text-accent-second text-[1.125rem] font-medium">
						{textDownload}
					</span>
				</div>
			</div>
		</>
	);
}
