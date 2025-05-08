import {
	useBlockProps,
	useInnerBlocksProps
} from "@wordpress/block-editor";
import { useEffect } from "@wordpress/element";
import { useSelect } from '@wordpress/data';
import "./editor.scss";
import clsx from "clsx";
import { removeDomain } from "../../../utils/utils";


export default function Edit({ attributes, setAttributes, clientId }) {
	const innerBlocks = useSelect((select) => select('core/block-editor').getBlocks(clientId), [clientId]);

	const blockProps = useBlockProps({
		className: 'block nested-bg-item relative aspect-[1/0.752] rounded-[12px] overflow-hidden'
	});

	const { children } = useInnerBlocksProps({}, {
		template: [
			['t4u/image', {
				classes: 'ibg'
			}]
		],
		allowedBlocks: [],
		templateLock: true
	});

	useEffect(() => {
		if(Array.isArray(innerBlocks)) {
			const img = innerBlocks[0];
			img && img.attributes?.url && setAttributes({ url: removeDomain(img.attributes?.url) })
		}
	}, [innerBlocks])

	return (
		<div {...blockProps}>
			{children}
		</div>
	);
}
