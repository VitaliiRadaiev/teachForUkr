import {
	useBlockProps,
	useInnerBlocksProps,
} from "@wordpress/block-editor";
import "./editor.scss";


export default function Edit() {

	const blockProps = useBlockProps();

	const { children } = useInnerBlocksProps({}, {
		template: [
			['t4u/image', {
				classes: 'object-cover nested-bg-item'
			}],
			['t4u/inner-block', {
				classes: 'mt-[10px] italic text-dark-primary-60',
				tag: 'figcaption',
				options: {
					template: [
						['t4u/paragraph', {
							fontSize: 'sm'
						}]
					],
					allowedBlocks: [],
				}
			}]
		],
		allowedBlocks: [],
	});

	return (
		<figure {...blockProps}>
			{children}
		</figure>
	);
}
