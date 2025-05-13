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
	const { isHide, margin, classes, className, preview } = attributes;

	const { updateBlockAttributes } = useDispatch('core/block-editor');
	const innerBlocks = useSelect((select) => select('core/block-editor').getBlocks(clientId), [clientId]);


	const blockProps = useBlockProps({
		className: clsx(
			'article-quote nested-bg-item rounded-[12px] p-[16px] md:p-[40px]',
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
			['t4u/simple-text', {
				classes: 'mt-[20px] text-dark-primary font-medium',
				fontSize: 'xl',
				aligment: 'center',
			}],
			['t4u/article-author', {
				classes: 'mt-[20px] md:mt-[30px]'
			}]
		],
		allowedBlocks: [],

	});

	if (preview) {
		return <img src={getUrlToStaticImages(preview)} />
	}
	return (
		<>
			<InspectorControls>
				<IsHide isHide={isHide} setIsHide={(val) => setAttributes({ isHide: val })} />
				<MarginYControl size={margin} setSize={(s) => setAttributes({ margin: s })} />
			</InspectorControls>
			<div {...blockProps}>
				<img className="h-[16px] md:h-[20px] w-auto mx-auto accent-second-filter" src={getUrlToStaticImages('icons/semi-circle-right-double.svg')} alt="" />
				{children}
			</div>
		</>
	);
}


