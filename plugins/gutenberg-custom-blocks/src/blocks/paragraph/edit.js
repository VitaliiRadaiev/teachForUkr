import {
	useBlockProps,
	RichText,
	InspectorControls,
	AlignmentToolbar,
	BlockControls,
} from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
import { RICH_TEXT_FORMATS, TEXT_SIZES } from "../../global/global";
import { MarginYControl } from "../../components/space-control/MarginYControl";
import { combineString, getMarginClasses } from "../../utils/utils";
import { ButtonsGroup } from "../../components/buttons-group/ButtonsGroup";
import clsx from "clsx";

import { useDispatch, useSelect } from '@wordpress/data';


export default function Edit({ attributes, setAttributes, clientId }) {
	const { margin, classes, text, fontSize, aligment } = attributes;
	const { insertBlock, removeBlock, selectPreviousBlock } = useDispatch('core/block-editor');
	const { parentClientId, index } = useSelect((select) => {
		const { getBlockRootClientId, getBlockIndex } = select('core/block-editor');

		return {
			parentClientId: getBlockRootClientId(clientId),
			index: getBlockIndex(clientId)
		};
	}, []);

	const blockProps = useBlockProps({
		className: clsx(
			classes,
			getMarginClasses(margin),
			combineString({prefix: 'text-'}, fontSize),
			combineString({prefix: 'text-'}, aligment),
		)
	});

	const handleKeyDown = (e) => {
		if (e.key === 'Enter' && !e.shiftKey)  {
			e.preventDefault();
			const newBlock = wp.blocks.createBlock('t4u/paragraph', {});
			insertBlock(newBlock, (index + 1), parentClientId, true);
		}

		if (e.key === 'Backspace' && !text) {
			selectPreviousBlock(clientId);
			removeBlock(clientId);
		}
	};

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
				<PanelBody title="Розмір тексту" initialOpen={false}>
					<ButtonsGroup
						value={fontSize}
						setValue={(val) => setAttributes({ fontSize: val })}
						valuesMap={TEXT_SIZES}
					/>
				</PanelBody>
				<MarginYControl size={margin} setSize={(s) => setAttributes({ margin: s })} />
			</InspectorControls>
			<p {...blockProps}>
				<RichText
					placeholder="Введіть текст..."
					value={text}
					allowedFormats={RICH_TEXT_FORMATS}
					onChange={(value) => {
						setAttributes({
							text: value
						})
					}}
					onKeyDown={handleKeyDown}
				/>
			</p>
		</>
	);
}
