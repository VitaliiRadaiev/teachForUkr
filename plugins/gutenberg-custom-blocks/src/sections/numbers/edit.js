import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls
} from "@wordpress/block-editor";
import "./editor.scss";
import clsx from "clsx";
import { getSectionsPaddingClasses, getSectionsMarginClasses } from "../../utils/utils";
import { DefaultSectionsControls } from "../../components/default-sections-controls/DefaultSectionsControls";


export default function Edit({ attributes, setAttributes }) {
	const { isHide, padding, margin, background, className } = attributes;
	const blockProps = useBlockProps({
		className: clsx(
			'numbers-section rounded-[20px] md:rounded-[30px]',
			className,
			background,
			getSectionsMarginClasses(margin),
			getSectionsPaddingClasses(padding),
			{ ['hide-block']: isHide }
		)
	});

	const { children } = useInnerBlocksProps({}, {
		template: [
			['t4u/inner-block', { 
				classes: 'text-center max-w-[30.5rem] xl:max-w-[45.5rem] 4xl:max-w-[59.125rem] mx-auto',
				simpleWrapper: true,
				options: {
					template: [
						['t4u/sup-title', {}],
						['t4u/heading', { classes: "mt-[16px] md:mt-[20px] text-dark-primary" }],
					],
					allowedBlocks: []
				}

			}],
			['t4u/inner-block', {
				classes: 'mt-[30px] md:mt-[40px] xl:mt-[50px] grid lg:grid-cols-2 xl:grid-cols-12 gap-[10px] md:gap-[20px] xl:gap-[24px] 4xl:gap-[30px]',
				canAddItem: true,
				options: {
					template: [
						['t4u/numbers-item', {}],
					],
					allowedBlocks: ['t4u/numbers-item']
				},
				allowedBlocks: []
			}]
		],
		allowedBlocks: []
	})

	return (
		<>
			<InspectorControls>
				<DefaultSectionsControls attributes={attributes} setAttributes={setAttributes}/>
			</InspectorControls>
			<section {...blockProps}>
				<div className="container">
					{children}
				</div>
			</section>
		</>
	);
}
