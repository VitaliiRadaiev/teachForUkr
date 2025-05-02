import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls
} from "@wordpress/block-editor";
import { PanelBody, RadioControl } from "@wordpress/components";
import "./editor.scss";
import clsx from "clsx";
import { getUrlToStaticImages } from "../../../utils/utils";


export default function Edit({ attributes, setAttributes }) {
	const { decor, columns } = attributes;

	const blockProps = useBlockProps({
		className: clsx(
			"nested-bg-item min-h-[75px] md:min-h-[130px] xl:min-h-[165px] 4xl:min-h-[190px] p-[16px] md:p-[20px] xl:p-[30px] rounded-[12px] relative text-dark-primary md-and-lg-max:[&:last-child:nth-child(odd)]:col-span-2",
			columns
		)
	});

	const { children } = useInnerBlocksProps({}, {
		template: [
			['t4u/inner-block', {
				classes: 'h-full flex flex-col first-no-margin last-no-margin pr-[20px] md:pr-[35px] xl:pr-[40px] 4xl:pr-[45px]',
				simpleWrapper: true,
				options: {
					template: [
						['t4u/heading', {
							classes: 'text-dark-primary ',
							fontSize: 'lg'
						}],
						['t4u/simple-text', {
							classes: 'mt-[10px] mb-[20px]',
							canAddItem: true
						}],
						["t4u/buttons-group", {
							classes: 'mt-auto',
							options: {
								template: [
									["t4u/button", {
										variant: 'btn-with-enter-arrow',
										acfField: 'text_review',
										acfFieldType: 'text'
									}],
								],
								allowedBlocks: ['t4u/button']
							}
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
				<PanelBody title="Варіанти декору" initialOpen={false}>
					<RadioControl
						selected={decor}
						options={[...Array(10).keys()].map(i => ({
							label: <img className="!h-[25px] w-auto" src={getUrlToStaticImages(`icons/figurines-decor-${i + 1}.svg`)} alt="icon" />,
							value: i + 1
						}))}
						onChange={(value) => setAttributes({ decor: +value })}
					/>
				</PanelBody>
				<PanelBody title="Розмір карточки" initialOpen={false}>
					<RadioControl
						selected={columns}
						options={[
							{
								label: <span>1/4</span>,
								value: 'lg:col-span-3'
							},
							{
								label: <span>1/3</span>,
								value: 'lg:col-span-4'
							},
							{
								label: <span>1/2</span>,
								value: 'md:col-span-2 lg:col-span-6'
							},
							{
								label: <span>1/1</span>,
								value: 'md:col-span-2 lg:col-span-12'
							}
						]}
						onChange={(value) => setAttributes({ columns: value })}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<div className="absolute top-[2px] md:top-[-10px] xl:top-[-5px] 4xl:[-10px] right-[16px] md:right-[20px] xl:right-[30px] [&_svg]:h-full [&_svg]:w-auto h-[14px] md:h-[30px] xl:h-[35px] 4xl:h-[40px] -rotate-90 origin-bottom-right">
					<img className="h-full w-auto" src={getUrlToStaticImages(`icons/figurines-decor-${decor}.svg`)} alt="icon" />
				</div>
				{children}
			</div>
		</>
	);
}
