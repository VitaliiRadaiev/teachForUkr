import {
	useBlockProps,
	RichText,
	InspectorControls,
	AlignmentToolbar,
	BlockControls,
} from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
import { RICH_TEXT_FORMATS } from "../../global/global";
import { IsHide } from "../../components/is-hide/IsHide";
import { MarginYControl } from "../../components/space-control/MarginYControl";
import { getMarginClasses } from "../../utils/utils";
import { ButtonsGroup } from "../../components/size-control/ButtonsGroup";
import clsx from "clsx";

const getHtmlTeg = (size) => {
	const sizesMap = {
		sm: 'h5',
		md: 'h4',
		lg: 'h3',
		xl: 'h2',
		'2xl': 'h1'
	}

	return sizesMap[size];
}

export default function Edit({ attributes, setAttributes }) {
	const { isHide, margin, classes, text, htmlTeg, size, aligment } = attributes;

	const blockProps = useBlockProps({
		className: clsx(
			classes,
			getMarginClasses(margin),
			getHtmlTeg(size),
			`text-${aligment}`,
			{
				['hide-block']: isHide
			}
		)
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
				<IsHide isHide={isHide} setIsHide={(val) => setAttributes({ isHide: val })} />
				<PanelBody title="Розмір заголовка" initialOpen={false}>
					<ButtonsGroup
						value={size}
						setValue={(val) => setAttributes({ size: val })}
						valuesMap={["sm", "md", "lg", "xl", "2xl"]}
					/>
				</PanelBody>
				<PanelBody title="Html тег" initialOpen={false}>
					<ButtonsGroup
						value={htmlTeg}
						setValue={(val) => setAttributes({ htmlTeg: val })}
						valuesMap={["h1", "h2", "h3", "h4", "h5", "h6", "span"]}
					/>
				</PanelBody>
				<MarginYControl size={margin} setSize={(s) => setAttributes({ margin: s })} />
			</InspectorControls>
			<div {...blockProps}>
				<RichText
					placeholder="Введіть текст..."
					value={text}
					allowedFormats={RICH_TEXT_FORMATS}
					onChange={(value) => {
						setAttributes({
							text: value
						})
					}}
				/>
			</div>
		</>
	);
}
