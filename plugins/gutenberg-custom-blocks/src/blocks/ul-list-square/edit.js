import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
	BlockControls,
	AlignmentToolbar
} from "@wordpress/block-editor";
import { PanelBody, RadioControl } from "@wordpress/components";
import "./editor.scss";
import clsx from "clsx";
import { combineString, getMarginClasses } from "../../utils/utils";
import { DirectionIcon } from "../../components/direction-icon/DirectionIcon";
import { ButtonsGroup } from "../../components/buttons-group/ButtonsGroup";
import { AccentColorPallet } from "../../components/colorPallets/AccentColorPallet";
import { MarginYControl } from "../../components/space-control/MarginYControl";
import { TEXT_SIZES } from "../../global/global";

const gapYMap = {
	sm: 'gap-y-[5px]',
	md: 'gap-y-[10px]',
	lg: 'gap-y-[25px]',
	xl: 'gap-y-[40px]',
}

export default function Edit({ attributes, setAttributes }) {
	const { margin, classes, className, accent, fontSize, aligment, gap, spaceLeft } = attributes;
	const blockProps = useBlockProps({
		className: clsx(
			'ul-list-square',
			//'canAddItem',
			classes,
			className,
			accent,
			gapYMap[gap],
			getMarginClasses(margin),
			combineString({ prefix: 'text-' }, fontSize),
			combineString({ prefix: 'text-' }, aligment),
			combineString({ prefix: 'ul-ml-' }, spaceLeft),
		)
	});

	const { children } = useInnerBlocksProps({}, {
		template: [
			['t4u/li', {}]
		],
		allowedBlocks: ['t4u/li']
	});

	return (
		<>
			<BlockControls>
				<AlignmentToolbar
					value={aligment}
					onChange={(nextAlign) => {
						setAttributes({ aligment: nextAlign })
					}}
				/>
			</BlockControls>
			<InspectorControls>
				<PanelBody title="Розмір тексту" initialOpen={false}>
					<ButtonsGroup
						value={fontSize}
						setValue={(val) => setAttributes({ fontSize: val })}
						valuesMap={TEXT_SIZES}
					/>
				</PanelBody>
				<PanelBody title="Колір значків" initialOpen={false}>
					<AccentColorPallet
						colorName={accent}
						setColorName={(val) => setAttributes({ accent: val })}
					/>
				</PanelBody>
				<PanelBody title="Відступи між елементами" initialOpen={false}>
					<div className="flex items-center gap-x-[10px]">
						<DirectionIcon direction="top bottom" />
						<ButtonsGroup
							value={gap}
							setValue={(val) => setAttributes({ gap: val })}
							valuesMap={["sm", "md", "lg", "xl"]}
						/>
					</div>
				</PanelBody>
				<PanelBody title="Відступи зліва" initialOpen={false}>
					<div className="flex items-center gap-x-[10px]">
						<DirectionIcon direction="left" />
						<ButtonsGroup
							value={spaceLeft}
							setValue={(val) => setAttributes({ spaceLeft: val })}
							valuesMap={["sm", "md", "lg", "xl"]}
						/>
					</div>
				</PanelBody>
				<MarginYControl size={margin} setSize={(s) => setAttributes({ margin: s })} />
			</InspectorControls>
			<ul {...blockProps} >
				{children}
			</ul>
		</>
	);
}
