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
import { getOptionsField, getUrlToStaticImages, removeDomain } from "../../utils/utils";
import useFetchOnVisible from "../../hooks/hooks";
import { useSelect } from '@wordpress/data';
import { useEffect } from "@wordpress/element";


export default function Edit({ attributes, setAttributes, clientId }) {
	const { letter, mediaId, mediaURL, mediaName, className } = attributes;

	const innerBlocks = useSelect((select) => select('core/block-editor').getBlocks(clientId), [clientId]);

	const blockProps = useBlockProps({
		className: clsx(
			'card-download-pdf nested-bg-item rounded-[12px] p-[16px] md:p-[20px] w-[calc(50%-(10px*1/2))] md:w-[calc(50%-(20px*1/2))] lg:w-[calc(25%-(24px*3/4))] 4xl:w-[calc(25%-(30px*3/4))] lg-max:[&:last-child:nth-child(odd)]:w-full',
			className
		)
	});

	const { children } = useInnerBlocksProps({}, {
		template: [
			['t4u/heading', {
				classes: 'mb-[16px] md:mb-[20px] h3 text-dark-primary hyphens-auto flex flex-col',
				htmlTeg: 'span'
			}]
		],
		allowedBlocks: []
	});

	const fetchData = () => getOptionsField('text_download');
	const { ref, data } = useFetchOnVisible(fetchData);

	useEffect(() => {
		const heading = innerBlocks[0];
		if (heading) {
			setAttributes({ letter: heading.attributes.text.replace(/<[^>]+>/g, '').at(0) })
		}
	}, [innerBlocks])

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
			</InspectorControls>
			<div {...blockProps}>
				<div ref={ref} className="mb-[20px] md:mb-[40px] h-[44px] w-[44px] md:h-[60px] md:w-[60px] rounded-full bg-accent-first text-light-primary flex items-center justify-center h3">
					{letter}
				</div>
				{children}
				<div className="mt-auto flex gap-[12px] items-center">
					<div className="bg-[--bg] h-[44px] w-[44px] grow-0 shrink-0 rounded-[6px] flex items-center justify-center">
						<img className="h-[30px] w-auto" src={getUrlToStaticImages('icons/pdf.svg')} alt="" />
					</div>
					<span className="text-accent-second text-[1.125rem] font-medium">
						{!!data && data.value}
					</span>
				</div>
			</div>
		</>
	);
}
