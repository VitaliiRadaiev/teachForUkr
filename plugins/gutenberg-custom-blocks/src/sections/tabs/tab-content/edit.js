import {
	useBlockProps,
	useInnerBlocksProps,
} from "@wordpress/block-editor";
import "./editor.scss";
import clsx from "clsx";
import { TEXT_CONTENT_ALLOWD_BLOCKS } from "../../../global/global";


export default function Edit({ attributes }) {
	const { classes } = attributes;

	const blockProps = useBlockProps({
		className: clsx(
			'mt-[20px] md:mt-[30px] 4xl:mt-[40px] first-no-margin [&:not(.active)]:hidden',
			classes
		)
	});

	const { children } = useInnerBlocksProps({}, {
		template: [
			['t4u/heading', {
				classes: '!mx-auto',
				htmlTeg: 'span',
				fontSize: 'lg',
				aligment: 'center',
				container: 'lg'
			}],
			['t4u/inner-block', {
				classes: 'min-h-100 mt-[20px] md:mt-[30px] 4xl:mt-[40px] grid md:grid-cols-2 lg:grid-cols-12 gap-[10px] md:gap-[20px] xl:gap-[24px] 4xl:gap-[30px]',
				canAddItem: true,
				options: {
					template: [],
					allowedBlocks: ['t4u/card-with-mask-image', 't4u/card-with-icon']
				}

			}],
			['t4u/inner-block', {
				classes: 'min-h-100 mt-[40px] xl:mt-[50px]',
				canAddItem: true,
				options: {
					template: [],
					allowedBlocks: [...TEXT_CONTENT_ALLOWD_BLOCKS, 't4u/partners-slider-block']
				}

			}],
		],
		allowedBlocks: []
	})

	return (
		<div {...blockProps} data-tab-content>
			{children}
		</div>
	);
}
