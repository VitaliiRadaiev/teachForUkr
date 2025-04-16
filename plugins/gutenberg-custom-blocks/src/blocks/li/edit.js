import {
	useBlockProps,
	RichText
} from "@wordpress/block-editor";
import "./editor.scss";
import clsx from "clsx";
import { RICH_TEXT_FORMATS } from "../../global/global";
import { useDispatch, useSelect } from '@wordpress/data';


export default function Edit({ attributes, setAttributes, clientId }) {
	const { classes, className, text } = attributes;
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
			className
		)
	});

	const handleKeyDown = (e) => {
		if (e.key === 'Enter' && !e.shiftKey)  {
			e.preventDefault();
			const newBlock = wp.blocks.createBlock('t4u/li', {});
			insertBlock(newBlock, (index + 1), parentClientId, true);
		}

		if (e.key === 'Backspace' && !text && (parentBlock.name === 't4u/ul-list-square') ) {
			selectPreviousBlock(clientId);
			removeBlock(clientId);
		}
	};

	return (
		<li {...blockProps}>
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
		</li>
	);
}
