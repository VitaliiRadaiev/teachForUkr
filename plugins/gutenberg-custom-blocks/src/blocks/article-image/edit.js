import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
	BlockControls,
	AlignmentToolbar
} from "@wordpress/block-editor";
import { PanelBody, PanelRow, FormToggle, RadioControl } from "@wordpress/components";
import { useSelect, useDispatch } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
import "./editor.scss";
import clsx from "clsx";
import { combineString, getMarginClasses, getUrlToStaticImages } from "../../utils/utils";
import { IsHide } from "../../components/is-hide/IsHide";
import { MarginYControl } from "../../components/space-control/MarginYControl";
import { DirectionIcon } from "../../components/direction-icon/DirectionIcon";


export default function Edit({ attributes, setAttributes, clientId }) {
	const { preview, isHide, margin, classes, className, variants, isNativeSize, alignment, positioning } = attributes;

	const { insertBlock, removeBlock } = useDispatch('core/block-editor');
	const innerBlocks = useSelect((select) => select('core/block-editor').getBlocks(clientId), [clientId]);

	const blockProps = useBlockProps({
		className: clsx(
			'article-image [&_img]:rounded-[12px]',
			classes,
			className,
			positioning,
			getMarginClasses(margin),
			combineString({ prefix: 'text-' }, alignment),
			{
				['hide-block']: isHide,
				'[&_img]:w-full [&_img]:aspect-[1/0.670] md:[&_img]:aspect-[1/0.482]': (!isNativeSize && variants == 0),
				'grid md:grid-cols-2 gap-[20px] lg:gap-[24px] 4xl:gap-[30px] [&_img]:w-full [&_img]:aspect-square': (!isNativeSize && variants == 1),
				'[&_figure]:inline-block': isNativeSize
			}
		)
	});

	const { children } = useInnerBlocksProps({}, {
		template: [
			['t4u/article-image-item', {}]
		],
		allowedBlocks: ['t4u/article-image-item'],
	});

	useEffect(() => {
		if (variants == 0) {
			const image2 = innerBlocks[1];
			image2 && removeBlock(image2.clientId);
		} else if (variants == 1) {
			const newBlock = wp.blocks.createBlock('t4u/article-image-item', {});
			insertBlock(newBlock, 1, clientId, false);
		}
	}, [variants]);

	if (preview) {
		return <img src={getUrlToStaticImages(preview)} />
	}

	return (
		<>
			{isNativeSize &&
				<BlockControls>
					<AlignmentToolbar
						value={alignment}
						onChange={(nextAlign) => {
							setAttributes({ alignment: nextAlign })
						}}
					/>
				</BlockControls>
			}
			<InspectorControls>
				<IsHide isHide={isHide} setIsHide={(val) => setAttributes({ isHide: val })} />
				<PanelBody opened={true}>
					<PanelRow className={clsx({ 'disabled': variants != 0 })}>
						<label className="flex items-center gap-x-[10px] cursor-pointer">
							<FormToggle
								checked={isNativeSize}
								onChange={() => setAttributes({ isNativeSize: !isNativeSize })}
							/>
							<span>Відображати в нативних розмірах</span>
						</label>
					</PanelRow>
				</PanelBody>
				<PanelBody title="Варіанти відображення" initialOpen={true}>
					<div className={clsx({ 'disabled': isNativeSize })}>
						<RadioControl
							selected={variants}
							options={[
								{
									label: <img className="!h-[100px] w-auto" src={getUrlToStaticImages(`general/preview-section-article-image.jpg`)} alt="icon" />,
									value: 0
								},
								{
									label: <img className="!h-[100px] w-auto" src={getUrlToStaticImages(`general/preview-section-article-image-v2.jpg`)} alt="icon" />,
									value: 1
								},
							]}
							onChange={(value) => setAttributes({ variants: +value })}
						/>
					</div>
				</PanelBody>
				<PanelBody title="Позиціонування зображення" initialOpen={false}>
					<div className={clsx({ 'disabled': isNativeSize })}>
						<RadioControl
							selected={positioning}
							options={[
								{
									label: <DirectionIcon direction="top right bottom left" />,
									value: ''
								},
								{
									label: <DirectionIcon direction="top" />,
									value: '[&_img]:object-top'
								},
								{
									label: <DirectionIcon direction="bottom" />,
									value: '[&_img]:object-bottom'
								},
								{
									label: <DirectionIcon direction="left" />,
									value: '[&_img]:object-left'
								},
								{
									label: <DirectionIcon direction="top left" />,
									value: '[&_img]:object-left-top'
								},
								{
									label: <DirectionIcon direction="bottom left" />,
									value: '[&_img]:object-left-bottom'
								},
								{
									label: <DirectionIcon direction="right" />,
									value: '[&_img]:object-right'
								},
								{
									label: <DirectionIcon direction="top right" />,
									value: '[&_img]:object-right-top'
								},
								{
									label: <DirectionIcon direction="right bottom" />,
									value: '[&_img]:object-right-bottom'
								},
							]}
							onChange={(value) => setAttributes({ positioning: value })}
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
