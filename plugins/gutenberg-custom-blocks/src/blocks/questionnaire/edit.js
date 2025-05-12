import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls
} from "@wordpress/block-editor";
import "./editor.scss";
import clsx from "clsx";
import { getMarginClasses, getUrlToStaticImages } from "../../utils/utils";
import { IsHide } from "../../components/is-hide/IsHide";
import { MarginYControl } from "../../components/space-control/MarginYControl";


export default function Edit({ attributes, setAttributes }) {
	const { preview, isHide, margin, classes, className } = attributes;
	const blockProps = useBlockProps({
		className: clsx(
			'questionnaire rounded-[12px] nested-bg-item py-[40px] md:py-[50px] px-[20px] md:px-[94px]',
			classes,
			className,
			getMarginClasses(margin),
			{ ['hide-block']: isHide }
		)
	});

	const { children } = useInnerBlocksProps({}, {
		template: [
			['t4u/heading', {
				classes: "without-break-word",
				acfField: 'questionnaire_title',
				aligment: "center"
			}],
			['t4u/simple-text', {
				classes: "mt-[20px] text-dark-primary",
				aligment: 'center',
				canAddItem: false,
				acfField: 'questionnaire_text'
			}],
			["t4u/buttons-group", {
				classes: 'mt-[30px]',
				alignment: 'center',
				options: {
					template: [
						["t4u/button", {
							acfField: 'link_questionnaire',
						}],
					],
					allowedBlocks: ['t4u/button']
				}
			}],
			['t4u/simple-text', {
				classes: "mt-[20px] text-dark-primary-60",
				aligment: 'center',
				canAddItem: false,
				acfField: 'questionnaire_deadline'
			}],
			['t4u/simple-text', {
				classes: "mt-[40px] text-dark-primary",
				aligment: 'center',
				fontSize: 'xl',
				canAddItem: false,
				acfField: 'questionnaire_additional_text'
			}]
		],
		allowedBlocks: []
	});

	if (preview) {
		return <img src={getUrlToStaticImages(preview)} />
	}

	return (
		<>
			<InspectorControls>
				<IsHide isHide={isHide} setIsHide={(val) => setAttributes({ isHide: val })} />
				<MarginYControl size={margin} setSize={(s) => setAttributes({ margin: s })} />
			</InspectorControls>
			<div {...blockProps}>
				{children}
			</div>
		</>
	);
}
