import {
	useBlockProps,
	RichText,
	InspectorControls,
	__experimentalLinkControl as LinkControl
} from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
import { useEffect } from "@wordpress/element";
import clsx from "clsx";
import { v4 as uuidv4 } from 'uuid';
import "./editor.scss";


export default function Edit({ attributes, setAttributes }) {
	const {
		blockId,
		className,
		postType,
		text,
		classes,
	} = attributes;

	const blockProps = useBlockProps({
		className: "grow shrink-0"
	})

	const uniqueId = blockId ? blockId : uuidv4();

	useEffect(() => {
		if (!blockId) {
			setAttributes({ blockId: uniqueId })
		}
	}, []);

	return (
		<>
			<InspectorControls>
				<PanelBody
					title="Посилання"
					isHide={false}
				>
					<LinkControl
						key={blockId || uniqueId}
						searchInputPlaceholder="Пошук..."
						value={postType}
						settings={[
							{
								id: 'opensInNewTab',
								title: 'Відкрити в новій вкладці?',
							}
						]}
						onChange={(newPost) => {
							setAttributes({ postType: newPost })
						}}
						withCreateSuggestion={true}
						createSuggestion={(inputValue) => setAttributes({
							postType: {
								...postType,
								title: inputValue,
								type: "custom-url",
								id: Date.now(),
								url: inputValue
							}
						})}
					>
					</LinkControl>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<RichText
					className={clsx("hero-btn w-full", classes, className)}
					placeholder="Кнопка"
					tagName="div"
					value={text}
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
		</>
	);
}
