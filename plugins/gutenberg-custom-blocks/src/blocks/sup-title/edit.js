import {
	useBlockProps,
	RichText,
	InspectorControls
} from "@wordpress/block-editor";
import { useState } from "@wordpress/element";
import "./editor.scss";
import clsx from "clsx";
import { getMarginClasses, getOptionsField } from "../../utils/utils";
import { IsHide } from "../../components/is-hide/IsHide";
import { MarginYControl } from "../../components/space-control/MarginYControl";
import { RICH_TEXT_FORMATS } from "../../global/global";
import useFetchOnVisible from "../../hooks/hooks";


export default function Edit({ attributes, setAttributes }) {
	const { isHide, margin, classes, className, text, acfField } = attributes;
	const [isTyping, setIsTyping] = useState(false);
	const fetchData = () => getOptionsField(acfField);
	const { ref, data } = useFetchOnVisible(fetchData, [acfField], (!text && !isTyping));
	const globalText = data?.value || '';

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
					ref={ref}
					placeholder="Введіть текст..."
					value={text || (!isTyping && globalText)}
					allowedFormats={RICH_TEXT_FORMATS}
					onChange={(val) => {
						setIsTyping(true);
						setAttributes({
							text: val,
						});
					}}
				/>
			</div>
		</>
	);
}
