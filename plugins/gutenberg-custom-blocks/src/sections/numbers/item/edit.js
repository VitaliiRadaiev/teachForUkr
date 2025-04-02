import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls
} from "@wordpress/block-editor";
import { PanelBody, RadioControl } from "@wordpress/components";
import { useSelect, useDispatch } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
import "./editor.scss";
import clsx from "clsx";
import { getUrlToStaticImages } from "../../../utils/utils";

const getPaddingRightClasses = (value) => {
	if (value === 1 || value === 2 || value === 3) {
		return 'pr-[80px] xl:pr-[125px]';
	}

	if (value === 4 || value === 5 || value === 6 || value === 7) {
		return 'pr-[55px] xl:pr-[85px]';
	}

	if (value === 8 || value === 9 || value === 10) {
		return 'pr-[30px] xl:pr-[45px]';
	}
}

export default function Edit({ attributes, setAttributes, clientId }) {
	const { decor, columns } = attributes;
	const { updateBlockAttributes } = useDispatch('core/block-editor');

	const innerBlocks = useSelect((select) => select('core/block-editor').getBlocks(clientId), [clientId]);

	const blockProps = useBlockProps({
		className: clsx(
			"nested-bg-item p-[16px] md:p-[20px] xl:p-[30px] rounded-[12px] flex flex-col gap-[20px] xl:gap-[30px] relative text-dark-primary lg-and-xl-max:[&:last-child:nth-child(odd)]:col-span-2",
			columns
		)
	});

	useEffect(() => {
		innerBlocks.forEach(item => {
			item.innerBlocks.forEach(block => {
				if(block.name === "t4u/heading") {
					updateBlockAttributes(block.clientId, { classes: getPaddingRightClasses(decor) });
				}
			})
		});
	}, [decor])

	const { children } = useInnerBlocksProps({}, {
		template: [
			['t4u/inner-block', {
				wrapper: false,
				options: {
					template: [
						['t4u/heading', {
							classes: getPaddingRightClasses(decor),
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
								value: 'xl:col-span-3'
							},
							{
								label: <span>1/3</span>,
								value: 'xl:col-span-4'
							},
							{
								label: <span>1/2</span>,
								value: 'xl:col-span-6'
							},
							{
								label: <span>1/1</span>,
								value: 'xl:col-span-12'
							}
						]}
						onChange={(value) => setAttributes({ columns: value })}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<div className="absolute top-[16px] md:top-[20px] xl:top-[30px] right-[16px] md:right-[20px] xl:right-[30px] [&_svg]:h-full [&_svg]:w-auto h-[25px] md:h-[30px] xl:h-[35px] 4xl:h-[40px]">
					<img className="h-full w-auto" src={getUrlToStaticImages(`icons/figurines-decor-${decor}.svg`)} alt="icon" />
				</div>
				{children}
			</div>
		</>
	);
}
