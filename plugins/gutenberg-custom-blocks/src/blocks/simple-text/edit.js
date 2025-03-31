import {
	useBlockProps,
	useInnerBlocksProps,
	AlignmentToolbar,
	BlockControls,
	InspectorControls
} from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
import { IsHide } from "../../components/is-hide/IsHide";
import { MarginYControl } from "../../components/space-control/MarginYControl";
import { combineString, getMarginClasses } from "../../utils/utils";
import { ButtonsGroup } from "../../components/buttons-group/ButtonsGroup";
import clsx from "clsx";
import { TEXT_SIZES } from "../../global/global";


export default function Edit({ attributes, setAttributes }) {
	const { isHide, margin, classes, fontSize, canAddItem, aligment } = attributes;
	const blockProps = useBlockProps({
		className: clsx(
			'simple-text-content',
			classes,
			getMarginClasses(margin),
			combineString({prefix: 'text-'}, fontSize),
			combineString({prefix: 'text-'}, aligment),
			{
				['hide-block']: isHide,
				'canAddItem': canAddItem
			}
		)
	});
	const { children } = useInnerBlocksProps({}, {
		template: [['t4u/paragraph', {}]],
		allowedBlocks: canAddItem ? ['t4u/paragraph'] : []
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
			</InspectorControls>
			<div {...blockProps}>
				{children}
			</div>
		</>
	);
}
