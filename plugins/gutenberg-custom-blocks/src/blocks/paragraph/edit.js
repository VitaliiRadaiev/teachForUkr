import {
	useBlockProps,
	RichText,
	InspectorControls,
	AlignmentToolbar,
	BlockControls,
} from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
import { useState } from "@wordpress/element";
import { RICH_TEXT_FORMATS, TEXT_SIZES } from "../../global/global";
import { MarginYControl } from "../../components/space-control/MarginYControl";
import { combineString, getMarginClasses, getOptionsField } from "../../utils/utils";
import { ButtonsGroup } from "../../components/buttons-group/ButtonsGroup";
import clsx from "clsx";
import { useDispatch, useSelect } from '@wordpress/data';
import useFetchOnVisible from "../../hooks/hooks";


export default function Edit({ attributes, setAttributes, clientId }) {
	const { margin, classes, text, fontSize, aligment, acfField } = attributes;
	const [isTyping, setIsTyping] = useState(false);
	const fetchData = () => getOptionsField(acfField);
	const { ref, data } = useFetchOnVisible(fetchData, [acfField], (!text && !isTyping));
	const globalText = data?.value.replace(/\n$/, "") || '';

	const { insertBlock, removeBlock, selectPreviousBlock } = useDispatch('core/block-editor');
	const { parentClientId, parentBlock, index } = useSelect((select) => {
		const { getBlockRootClientId, getBlockIndex, getBlock } = select('core/block-editor');

		return {
			parentClientId: getBlockRootClientId(clientId),
			parentBlock: getBlock(getBlockRootClientId(clientId)),
			index: getBlockIndex(clientId),
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

		if (e.key === 'Backspace' && !(globalText || text) && ((parentBlock.name === 't4u/simple-text') || (parentBlock.name === 't4u/inner-block')) ) {
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
					ref={ref}
					placeholder="Введіть текст..."
					value={text || (!isTyping && globalText)}
					allowedFormats={RICH_TEXT_FORMATS}
					onChange={(value) => {
						setIsTyping(true);
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
