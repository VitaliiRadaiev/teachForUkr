import {
	useBlockProps,
	useInnerBlocksProps,
} from "@wordpress/block-editor";
import "./editor.scss";
import clsx from "clsx";


export default function Edit() {
	const blockProps = useBlockProps({
		className: 'card-info rounded-[12px] bg-accent-second-50 md:flex'
	});

	const { children } = useInnerBlocksProps({}, {
		template: [
			['t4u/inner-block', {
				classes: 'p-[16px] md:p-[20px] 4xl:p-[24px] shrink grow',
				simpleWrapper: true,
				options: {
					template: [
						['t4u/heading', {
							classes: "text-accent-first",
						}],
						['t4u/simple-text', {
							classes: "mt-[10px] md:mt-[20px] text-dark-primary first-child-no-margin",
						}],
					],
					allowedBlocks: [],
				}

			}],
			['t4u/inner-block', {
				classes: 'rounded-[12px] border border-accent-first nested-bg-item p-[16px] md:p-[20px] 4xl:p-[24px] shrink-0 grow-0 md:w-[55%]',
				simpleWrapper: true,
				options: {
					template: [
						['t4u/heading', {
							classes: "text-dark-primary",
							fontSize: 'lg'
						}],
						['t4u/simple-text', {
							classes: "mt-[5px] 4xl:mt-[10px] first-child-no-margin",
						}],
					],
					allowedBlocks: [],
				}

			}]
		],
		allowedBlocks: [],
	});

	return (
		<div {...blockProps}>
			{children}
		</div>
	);
}