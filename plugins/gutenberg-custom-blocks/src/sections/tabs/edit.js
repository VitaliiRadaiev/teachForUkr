import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls
} from "@wordpress/block-editor";
import "./editor.scss";
import clsx from "clsx";
import { getSectionsPaddingClasses, getSectionsMarginClasses, getUrlToStaticImages } from "../../utils/utils";
import { DefaultSectionsControls } from "../../components/default-sections-controls/DefaultSectionsControls";


export default function Edit({ attributes, setAttributes }) {
	const { preview, isHide, padding, margin, background, className } = attributes;
	const blockProps = useBlockProps({
		className: clsx(
			'tabs-section rounded-[20px] md:rounded-[30px]',
			className,
			background,
			getSectionsMarginClasses(margin),
			getSectionsPaddingClasses(padding),
			{ ['hide-block']: isHide }
		)
	});

	const { children } = useInnerBlocksProps({}, {
		template: [
			['t4u/head-block', {
				classes: ""
			}],
			['t4u/inner-block', {
				classes: 'mt-[40px] grid md:grid-cols-2 lg:grid-cols-12 gap-[10px] md:gap-[20px] xl:gap-[24px] 4xl:gap-[30px]',
				canAddItem: true,
				options: {
					template: [
						['t4u/card-with-icon', {}]
					],
					allowedBlocks: ['t4u/card-with-image', 't4u/card-with-icon']
				}

			}],
			["t4u/buttons-group", {
				classes: 'mt-[40px] xl:mt-[50px]',
				alignment: 'center',
				options: {
					template: [
						["t4u/button", {
							acfField: 'link_become_partner'
						}],
					],
					allowedBlocks: ['t4u/button']
				}
			}],
		],
		allowedBlocks: []
	})

	if (preview) {
		return <img src={getUrlToStaticImages(preview)} />
	}

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
