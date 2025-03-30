import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls
} from "@wordpress/block-editor";
import { PanelBody, RadioControl } from "@wordpress/components";
import "./editor.scss";
import clsx from "clsx";


export default function Edit({ attributes, setAttributes }) {
	const { decor } = attributes;
	const blockProps = useBlockProps({
		className: "nested-bg-item p-[16px] md:p-[20px] xl:p-[30px] rounded-[12px] flex flex-col gap-[20px] xl:gap-[30px] relative text-dark-primary"
	});
	const { children } = useInnerBlocksProps({}, {
		template: [
			['t4u/inner-block', {
				wrapper: false,
				options: {
					template: [
						['t4u/heading', {
							classes: "pr-[95px] xl:pr-[125px]",
							htmlTeg: "span",
							size: "xl",
						}],
						['t4u/simple-text', {
							classes: "pr-[40px] xl:pr-[60px]",
							canAddItem: false
						}]
					],
					allowedBlocks: []
				}
			}]
		],
		allowedBlocks: []
	});

	return (
		<>
			<InspectorControls>
				<PanelBody title="Варіанти декору" initialOpen={true}>
					<RadioControl
						selected={decor}
						options={[
							{ 
								label: <img className="h-[25px] w-auto" src={`${document.location.origin}/wp-content/themes/teachForUkraine/assets/images/icons/figurines-decor-1.svg`} alt="icon" />, 
								value: 1 
							},
							{ 
								label: <img className="h-[25px] w-auto" src={`${document.location.origin}/wp-content/themes/teachForUkraine/assets/images/icons/figurines-decor-2.svg`} alt="icon" />, 
								value: 2
							},
							{ 
								label: <img className="h-[25px] w-auto" src={`${document.location.origin}/wp-content/themes/teachForUkraine/assets/images/icons/figurines-decor-3.svg`} alt="icon" />, 
								value: 3
							},
						]}
						onChange={(value) => setAttributes({ decor: +value })}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<div className="absolute top-[16px] md:top-[20px] xl:top-[30px] right-[16px] md:right-[20px] xl:right-[30px] [&_svg]:h-full [&_svg]:w-auto h-[25px] md:h-[30px] xl:h-[35px] 4xl:h-[40px]">
					<img className="h-full w-auto" src={`${document.location.origin}/wp-content/themes/teachForUkraine/assets/images/icons/figurines-decor-${decor}.svg`} alt="icon" />
				</div>
				{children}
			</div>
		</>
	);
}
