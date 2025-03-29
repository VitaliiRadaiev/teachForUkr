import {
	useBlockProps,
	RichText
} from "@wordpress/block-editor";
import { RICH_TEXT_FORMATS } from "../../../global/global";

export default function Edit({ attributes, setAttributes }) {
	const { supTitle, title, text } = attributes;

	const blockProps = useBlockProps();

	return (
		<div {...blockProps}>
			<div className="text-md uppercase text-dark-primary font-bold flex items-center gap-x-[10px] md:gap-x-[13px]">
				<img className="h-[20px] md:h-[24px] 4xl:h-[28px] 4 w-[20px] md:w-[24px] 4xl:w-[28px] shrink-0 grow-0" src={`${document.location.origin}/wp-content/themes/teachForUkraine/assets/images/icons/main-hero-suptitle-icon.svg`} alt="icon" />
				<RichText
					placeholder="Заголовок"
					value={supTitle}
					allowedFormats={RICH_TEXT_FORMATS}
					tagName="span"
					onChange={(value) => {
						setAttributes({
							supTitle: value
						})
					}}
				/>
			</div>

			<RichText
				placeholder="Основний заголовок"
				value={title}
				allowedFormats={RICH_TEXT_FORMATS}
				tagName="h1"
				className="h1 mt-[15px] md:mt-[20px]"
				onChange={(value) => {
					setAttributes({
						title: value
					})
				}}
			/>

			<RichText
				placeholder="Короткий опис"
				value={text}
				allowedFormats={RICH_TEXT_FORMATS}
				tagName="div"
				className="mt-[20px] xl:mt-[25px] 4xl:mt-[35px] last-no-margin text-lg text-dark-primary max-w-[308px] md:max-w-[406px] 4xl:max-w-[475px]"
				onChange={(value) => {
					setAttributes({
						text: value
					})
				}}
			/>
		</div>
	);
}
