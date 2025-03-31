import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
	BlockControls,
	JustifyContentControl
} from "@wordpress/block-editor";
import { PanelBody, PanelRow } from "@wordpress/components";
import { getFlexAligmentClasses, getGapClasses, getMarginClasses } from "../../utils/utils";
import { IsHide } from "../../components/is-hide/IsHide";
import { MarginYControl } from "../../components/space-control/MarginYControl";
import { ButtonsGroup } from "../../components/buttons-group/ButtonsGroup";
import "./editor.scss";
import clsx from "clsx";
import { DirectionIcon } from "../../components/direction-icon/DirectionIcon";



export default function Edit({ attributes, setAttributes }) {
	const { isHide, margin, classes, gap, alignment, options } = attributes;
	const blockProps = useBlockProps({
		className: clsx(
			'canAddItem flex flex-wrap items-center',
			getMarginClasses(margin),
			getFlexAligmentClasses(alignment),
			getGapClasses(gap),
			classes,
			{
				['hide-block']: isHide
			}
		)
	});
	const { children } = useInnerBlocksProps({}, (options || {
		template: [
			['t4u/button', {}]
		],
		allowedBlocks: ['t4u/button']
	}));


	return (
		<>
			<BlockControls>
				<JustifyContentControl
					value={alignment}
					allowedControls={["left", "center", "right", "space-between"]}
					onChange={(newValue) => {
						setAttributes({ alignment: newValue });
					}}
				/>
			</BlockControls>
			<InspectorControls>
				<IsHide isHide={isHide} setIsHide={(val) => setAttributes({ isHide: val })} />
				<PanelBody title="Отступ між кнопками" initialOpen={false}>
					<PanelRow className="gap-x-[10px]">
						<DirectionIcon direction={"left right"} />
						<ButtonsGroup
							value={gap.x}
							setValue={(val) => {
								setAttributes({
									gap: {
										...gap,
										x: val
									}
								})
							}}
							valuesMap={['sm', 'md', 'lg', 'xl']}
						/>
					</PanelRow>
					<PanelRow className="gap-x-[10px]">
						<DirectionIcon direction={"top bottom"} />
						<ButtonsGroup
							value={gap.y}
							setValue={(val) => {
								setAttributes({
									gap: {
										...gap,
										y: val
									}
								})
							}}
							valuesMap={['sm', 'md', 'lg', 'xl']}
						/>
					</PanelRow>
				</PanelBody>
				<MarginYControl size={margin} setSize={(s) => setAttributes({ margin: s })} />
			</InspectorControls>
			<div {...blockProps}>
				{children}
			</div>
		</>
	);
}
