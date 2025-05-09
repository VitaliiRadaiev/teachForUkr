import {
	useBlockProps,
	useInnerBlocksProps,
	AlignmentToolbar,
	BlockControls,
	InspectorControls
} from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
import { useState } from "@wordpress/element";
import { IsHide } from "../../components/is-hide/IsHide";
import { MarginYControl } from "../../components/space-control/MarginYControl";
import { combineString, getMarginClasses, getContainerClasses } from "../../utils/utils";
import { ButtonsGroup } from "../../components/buttons-group/ButtonsGroup";
import clsx from "clsx";
import { CONTAINER_SIZES, TEXT_CONTENT_ALLOWD_BLOCKS, TEXT_SIZES } from "../../global/global";
import "./editor.scss";


export default function Edit({ attributes, setAttributes }) {
	const { isHide, margin, classes, fontSize, canAddItem, aligment, container, acfField, article } = attributes;
	const [isContainerChange, setIsContainerChange] = useState(false);

	const blockProps = useBlockProps({
		className: clsx(
			'simple-text-content',
			classes,
			getMarginClasses(margin),
			combineString({ prefix: 'text-' }, fontSize),
			combineString({ prefix: 'text-' }, aligment),
			{
				['hide-block']: isHide,
				'canAddItem': canAddItem,
				'canChangeContainerSize': isContainerChange,
			},
			getContainerClasses(container),
		)
	});
	const { children } = useInnerBlocksProps({}, {
		template: [['t4u/paragraph', {
			acfField
		}]],
		allowedBlocks: canAddItem 
		? ( article ? TEXT_CONTENT_ALLOWD_BLOCKS : ['t4u/heading', 't4u/paragraph' , 't4u/ul-list-square', 't4u/ol-list-number'])
		: []
	});

	return (
		<>
			<BlockControls>
				<AlignmentToolbar
					value={aligment}
					onChange={(nextAlign) => {
						setAttributes({ aligment: nextAlign })
					}}
				/>
			</BlockControls>
			<InspectorControls>
				<IsHide isHide={isHide} setIsHide={(val) => setAttributes({ isHide: val })} />
				<PanelBody title="Розмір тексту" initialOpen={false}>
					<ButtonsGroup
						value={fontSize}
						setValue={(val) => setAttributes({ fontSize: val })}
						valuesMap={TEXT_SIZES}
					/>
				</PanelBody>
				<MarginYControl size={margin} setSize={(s) => setAttributes({ margin: s })} />
				{container &&
					<PanelBody
						title="Розмір обмежуючого контейнера"
						initialOpen={false}
					>
						<div onMouseEnter={() => setIsContainerChange(true)} onMouseLeave={() => setIsContainerChange(false)}>
							<ButtonsGroup
								value={container}
								setValue={(val) => setAttributes({ container: val })}
								valuesMap={CONTAINER_SIZES}
							/>
						</div>
					</PanelBody>
				}
			</InspectorControls>
			<div {...blockProps}>
				{children}
			</div>
		</>
	);
}
