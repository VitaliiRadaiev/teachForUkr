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
						['t4u/head-block', {
							classes: ""
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
