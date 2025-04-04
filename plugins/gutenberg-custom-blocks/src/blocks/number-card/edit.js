import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls
} from "@wordpress/block-editor";
import { PanelBody, RadioControl } from "@wordpress/components";
import "./editor.scss";
import clsx from "clsx";
import { getUrlToStaticImages } from "../../utils/utils";


export default function Edit({ attributes, setAttributes }) {
	const { decor } = attributes;

	const blockProps = useBlockProps({
		className: clsx(
			"xl-max:bg-[var(--nested-bg)] p-[16px] md:p-[20px] xl:p-0 min-h-[72px] md:min-h-[106px] rounded-[12px] relative flex flex-col xl:flex-row xl:items-center gap-x-[20px] gap-y-[30px] text-dark-primary xl:table-row",
		)
	});

	const { children } = useInnerBlocksProps({}, {
		template: [
			['t4u/inner-block', {
				classes: "xl:table-cell xl:align-middle xl:bg-[var(--nested-bg)] xl:max-w-[275px] 2xl:max-w-[330px] 4xl:max-w-[430px] td border-transparent xl:rounded-l-[12px] xl:h-[110px] 4xl:h-[126px] xl:p-[30px] 4xl:pr-[50px] break-words",
				simpleWrapper: true,
				options: {
					template: [
						['t4u/heading', {
							htmlTeg: "span",
							size: "xl",
						}],
					],
					allowedBlocks: []
				}
			}],
			['t4u/inner-block', {
				classes: "max-w-[435px] md:max-w-[520px] xl:max-w-none xl:w-full md:pr-[85px] xl:pr-[30px] xl:py-[30px] xl:table-cell xl:align-middle xl:bg-[var(--nested-bg)] td xl:h-[110px] 4xl:h-[126px]",
				simpleWrapper: true,
				options: {
					template: [
						['t4u/simple-text', {
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
						options={[...Array(11).keys()].map(i => ({
							label: <img className="!h-[40px] w-auto" src={getUrlToStaticImages(`icons/figurines-v2-decor-${i + 1}.svg`)} alt="icon" />,
							value: i + 1
						}))}
						onChange={(value) => setAttributes({ decor: +value })}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				{children}
				<div class="xl-max:absolute top-[16px] md:top-[30px] right-[16px] md:right-[20px] xl:table-cell xl:align-middle xl:bg-[var(--nested-bg)] td xl:h-[110px] 4xl:h-[126px] xl:rounded-r-[12px] xl:pr-[30px] xl:min-w-[115px] xl:text-end">
					<div class="h-[40px] md:h-[66px] 4xl:h-[75px] inline-flex items-center">
						<img class="h-full w-auto" src={getUrlToStaticImages(`icons/figurines-v2-decor-${decor}.svg`)} alt="" />
					</div>
				</div>
			</div>
		</>
	);
}
