import {
	useBlockProps,
	useInnerBlocksProps,
} from "@wordpress/block-editor";
import "./editor.scss";
import clsx from "clsx";
import { SliderNav } from "../../../ui/slider-nav/SliderNav";
import { useSelect } from '@wordpress/data';

export default function Edit({ clientId }) {

	const innerBlocks = useSelect((select) => select('core/block-editor').getBlocks(clientId), [clientId]);

	const blockProps = useBlockProps({
		className: clsx(
			'canAddItem min-h-100 flex justify-center flex-wrap gap-[10px] md:gap-[20px] xl:gap-[24px] 4xl:gap-[30px]'
		)
	});

	const { children } = useInnerBlocksProps({}, {
		template: [
			['t4u/card-with-load-pdf', {}],
			['t4u/card-with-load-pdf', {}],
			['t4u/card-with-load-pdf', {}],
			['t4u/card-with-load-pdf', {}],
		],
		allowedBlocks: ['t4u/card-with-load-pdf']
	});

	return (
		<>
			<div {...blockProps}>
				{children}
			</div>
			{(innerBlocks.length > 4) && <SliderNav />}
		</>
	);
}
