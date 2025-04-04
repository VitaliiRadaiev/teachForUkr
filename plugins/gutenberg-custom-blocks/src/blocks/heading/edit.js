import {
	useBlockProps,
	RichText,
	InspectorControls,
	AlignmentToolbar,
	BlockControls,
} from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
import { useState } from "@wordpress/element";
import { CONTAINER_SIZES, RICH_TEXT_FORMATS } from "../../global/global";
import { IsHide } from "../../components/is-hide/IsHide";
import { MarginYControl } from "../../components/space-control/MarginYControl";
import { getMarginClasses, combineString, getContainerClasses } from "../../utils/utils";
import { ButtonsGroup } from "../../components/buttons-group/ButtonsGroup";
import clsx from "clsx";

const getHeadingSizeClass = (size) => {
	const sizesMap = {
		sm: 'h5',
		md: 'h4',
		lg: 'h3',
		xl: 'h2',
		'2xl': 'h1'
	}

	return sizesMap[size] || 'h2';
}

export default function Edit({ attributes, setAttributes }) {
	const { isHide, margin, classes, text, htmlTeg, fontSize, aligment, container } = attributes;
	const [isContainerChange, setIsContainerChange] = useState(false);

	const blockProps = useBlockProps({
		className: clsx(
			classes,
			getMarginClasses(margin),
			getHeadingSizeClass(fontSize),
			combineString({ prefix: 'text-' }, aligment),
			{
				['hide-block']: isHide,
				'canChangeContainerSize': isContainerChange,
			},
			getContainerClasses(container),
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
						value={fontSize}
						setValue={(val) => setAttributes({ fontSize: val })}
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
				{container &&
					<PanelBody
						title="Розмір обмежуючого контейнера"
						initialOpen={false}
					>
						<div onMouseEnter={() => setIsContainerChange(true)} onMouseLeave={() => setIsContainerChange(false)}>
							<ButtonsGroup
								value={container}
								setValue={(val) => setAttributes({ container: val })}
								valuesMap={CONTAINER_SIZES}
							/>
						</div>
					</PanelBody>
				}
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
