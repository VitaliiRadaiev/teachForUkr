import {
	useBlockProps,
	useInnerBlocksProps,
} from "@wordpress/block-editor";
import "./editor.scss";
import clsx from "clsx";


export default function Edit() {

	const blockProps = useBlockProps({
		className: 'swiper-slide !h-auto'
	});

	const { children } = useInnerBlocksProps({}, {
		template: [
			['t4u/image', {
				classes: 'object-cover nested-bg-item'
			}]
		],
		allowedBlocks: [],
		templateLock: 'all'
	})

	return (
		<div {...blockProps}>
			{children}
		</div>
	);
}