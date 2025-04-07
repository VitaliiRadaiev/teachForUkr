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
			'numbers-grid-section rounded-[20px] md:rounded-[30px]',
			className,
			background,
			getSectionsMarginClasses(margin),
			getSectionsPaddingClasses(padding),
			{ ['hide-block']: isHide }
		)
	});

	const { children } = useInnerBlocksProps({}, {
		template: [
			['t4u/head-block', {}],
			['t4u/inner-block', {
				classes: 'mt-[30px] md:mt-[40px] lg:mt-[50px] grid md:grid-cols-2 lg:grid-flow-dense gap-[10px] lg:gap-[24px] first-child-no-margin',
				canAddItem: true,
				options: {
					template: [
						['t4u/numbers-grid-item', {}],
					],
					allowedBlocks: ['t4u/numbers-grid-item']
				},
				allowedBlocks: []
			}],
			["t4u/buttons-group", {
				classes: 'mt-[40px] xl:mt-[50px]',
				alignment: 'center',
				options: {
					template: [
						["t4u/button", {
							acfField: 'link_registration'
						}],
					],
					allowedBlocks: ['t4u/button']
				}
			}],
		],
		allowedBlocks: []
	})

	return (
		<>
			<InspectorControls>
				<DefaultSectionsControls attributes={attributes} setAttributes={setAttributes} />
			</InspectorControls>
			<section {...blockProps}>
				<div className="container">
					{children}
				</div>
			</section>
		</>
	);
}
