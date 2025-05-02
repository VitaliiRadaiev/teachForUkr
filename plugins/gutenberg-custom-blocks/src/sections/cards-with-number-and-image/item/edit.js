import {
	useBlockProps,
	useInnerBlocksProps,
} from "@wordpress/block-editor";
import "./editor.scss";
import clsx from "clsx";

export default function Edit({ attributes }) {
	const { className } = attributes;

	const blockProps = useBlockProps({
		className: clsx(
			'shrink grow card-with-number nested-bg-item rounded-[12px] p-[16px] md:p-[20px] flex flex-col gap-y-[20px] md:gap-y-[40px]',
			className,
		)
	});

	const { children } = useInnerBlocksProps({}, {
		template: [
			['t4u/inner-block', {
				classes: 'grow-0 shrink-0 h-[44px] w-[44px] pt-[2px] rounded-full border border-accent-first bg-accent-first-10 flex items-center justify-center font-bold text-md text-accent-first',
				simpleWrapper: true,
				options: {
					template: [
						['t4u/simple-html', {
							text: '01'
						}]
					],
					allowedBlocks: []
				}
			}],
			['t4u/inner-block', {
				classes: 'shrink grow flex flex-col last-no-margin sm-max:[&_.btn:not(.btn-with-arrow)]:w-full [&_.btn]:self-start',
				simpleWrapper: true,
				options: {
					template: [
						['t4u/heading', {
							classes: 'text-dark-primary mb-[10px] title [&:first-child]:mt-auto',
							htmlTeg: 'span',
							fontSize: 'lg'
						}],
						['t4u/simple-text', {
							classes: 'mb-[20px] [&:first-child]:mt-auto',
						}],
						['t4u/button', {
							classes: 'btn [&:first-child]:mt-auto',
							wrapperClasses: 'btn [&:first-child]:mt-auto',
							variant: 'btn-with-arrow',
							acfField: 'text_more_details',
							acfFieldType: 'text'
						}]
					],
					allowedBlocks: []
				}
			}],
		],
		allowedBlocks: []
	});

	return (
		<div {...blockProps}>
			{children}
		</div>
	);
}
