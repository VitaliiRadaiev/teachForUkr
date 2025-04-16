import {
	useBlockProps,
	RichText
} from "@wordpress/block-editor";
import "./editor.scss";
import clsx from "clsx";


export default function Edit({ attributes, setAttributes }) {
	const { text, classes } = attributes;
	const blockProps = useBlockProps({
		className: clsx(
			'btn btn-secondary btn-secondary-sm grow-0 shrink-0 font-medium [&.btn]:min-h-[44px] lg:min-h-[50px] [&.btn]:px-[20px] [&.btn]:bg-transparent [&.btn]:text-dark-primary [&.btn.active]:bg-[var(--accent)] [&.btn.active]:text-white',
			classes
		)
	});

	return (
		<div {...blockProps} data-tab-trigger >
			<RichText
				placeholder="Кнопка"
				value={text}
				tagName="span"
				allowedFormats={[]}
				multiline={false}
				onSplit={() => { }}
				onReplace={() => { }}
				onChange={(val) => {
					setAttributes({
						text: val,
					});
				}}
			/>
		</div>
	);
}