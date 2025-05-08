import {
	useBlockProps,
	useInnerBlocksProps,
} from "@wordpress/block-editor";
import { useEffect } from "@wordpress/element";
import { useSelect, useDispatch } from '@wordpress/data';
import "./editor.scss";


export default function Edit({ clientId }) {

	const { updateBlockAttributes } = useDispatch('core/block-editor');
	const innerBlocks = useSelect((select) => select('core/block-editor').getBlocks(clientId), [clientId]);

	const blockProps = useBlockProps({
		className: 'min-h-[100px] canAddItem grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px] md:gap-[20px] lg:gap-[24px] 4xl:gap-[30px]'
	});

	const { children } = useInnerBlocksProps({}, {
		template: [
			['t4u/gallery-slider-item', {}]
		],
		allowedBlocks: ['t4u/gallery-slider-item']
	});

	useEffect(() => {
		if(Array.isArray(innerBlocks)) {
			innerBlocks.forEach(block => {
				updateBlockAttributes(block.clientId, {
					id: clientId
				})
			})
		}
	}, [innerBlocks])

	return (
		<div {...blockProps}>
			{children}
		</div>
	);
}
