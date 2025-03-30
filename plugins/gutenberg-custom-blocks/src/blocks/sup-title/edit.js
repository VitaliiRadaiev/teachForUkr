import {
	useBlockProps,
	RichText,
	InspectorControls
} from "@wordpress/block-editor";
import "./editor.scss";
import clsx from "clsx";
import { getMarginClasses } from "../../utils/utils";
import { IsHide } from "../../components/is-hide/IsHide";
import { MarginYControl } from "../../components/space-control/MarginYControl";
import { RICH_TEXT_FORMATS } from "../../global/global";

export default function Edit({ attributes, setAttributes }) {
	const { isHide, margin, classes, className, text } = attributes;
	const blockProps = useBlockProps({
		className: clsx(
			'suptitle inline-flex items-center gap-[5px] uppercase h5 min-h-[32px] rounded-full pb-[5px] pt-[6px] px-[12px] bg-accent-second-20',
			classes, className,
			getMarginClasses(margin),
			{
				['hide-block']: isHide
			}
		)
	});

	return (
		<>
			<InspectorControls>
				<IsHide isHide={isHide} setIsHide={(val) => setAttributes({ isHide: val })} />
				<MarginYControl size={margin} setSize={(s) => setAttributes({ margin: s })} />
			</InspectorControls>
			<div {...blockProps}>
				<RichText
					placeholder="Введіть текст..."
					value={text}
					allowedFormats={RICH_TEXT_FORMATS}
					onChange={(val) => {
						setAttributes({
							text: val,
						});
					}}
				/>
			</div>
		</>
	);
}
