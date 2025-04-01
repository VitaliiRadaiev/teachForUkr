import {
	useBlockProps,
	RichText,
	InspectorControls,

} from "@wordpress/block-editor";
import { RICH_TEXT_FORMATS } from "../../../global/global";
import { getUrlToStaticImages } from "../../../utils/utils";
import { IsHide } from "../../../components/is-hide/IsHide";
import clsx from "clsx";

export default function Edit({ attributes, setAttributes }) {
	const { isHide, text } = attributes;

	const blockProps = useBlockProps({
		className: clsx({ ['hide-block']: isHide })
	});

	return (
		<>
			<InspectorControls>
				<IsHide isHide={isHide} setIsHide={(val) => setAttributes({ isHide: val })} />
			</InspectorControls>
			<div {...blockProps}>
				<div className="text-md uppercase text-dark-primary font-bold flex items-center gap-x-[10px] md:gap-x-[13px]">
					<img className="h-[20px] md:h-[24px] 4xl:h-[28px] 4 w-[20px] md:w-[24px] 4xl:w-[28px] shrink-0 grow-0" src={getUrlToStaticImages('icons/main-hero-suptitle-icon.svg')} alt="icon" />
					<RichText
						placeholder="Введіть текст..."
						value={text}
						allowedFormats={RICH_TEXT_FORMATS}
						tagName="span"
						onChange={(value) => {
							setAttributes({
								text: value
							})
						}}
					/>
				</div>
			</div>
		</>
	);
}
