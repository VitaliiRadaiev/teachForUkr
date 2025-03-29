import {
	useBlockProps,
	RichText,
	InspectorControls,
	__experimentalLinkControl as LinkControl
} from "@wordpress/block-editor";
import { PanelBody, RadioControl } from "@wordpress/components";
import { useState, useEffect } from "@wordpress/element";
import clsx from "clsx";
import { getOptionsField } from "../../utils/utils";
import useFetchOnVisible from "../../hooks/hooks";
import { AccentColorPallet } from "../../components/colorPallets/AccentColorPallet";
import { MarginYControl } from "../../components/size-control/MarginYControl";
import { v4 as uuidv4 } from 'uuid';
import { getMarginClasses } from "../../utils/utils";
import { IsHide } from "../../components/is-hide/IsHide";
import "./editor.scss";


export default function Edit({ attributes, setAttributes }) {
	const {
		blockId,
		className,
		postType,
		text,
		accent,
		classes,
		acfField,
		variant,
		isHide,
		margin,
	} = attributes;
	const [isTyping, setIsTyping] = useState(false);
	const fetchData = () => getOptionsField(acfField);
	const { ref, data } = useFetchOnVisible(fetchData, [acfField], (!text && !isTyping));
	const uniqueId = blockId ? blockId : uuidv4();

	const blockProps = useBlockProps({
		className: clsx(getMarginClasses(margin), {
			['hide-block']: isHide
		})
	});

	useEffect(() => {
		if (!blockId) {
			setAttributes({ blockId: uniqueId })
		}
	}, []);

	return (
		<>
			<InspectorControls>
				<IsHide isHide={isHide} setIsHide={(val) => setAttributes({ isHide: val })}/>
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
							console.log(newPost);

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
				<PanelBody title="Варіанти кнопок" initialOpen={false}>
					<RadioControl
						selected={variant}
						options={[
							{ label: <div className={clsx('btn-primary', accent)}>button</div>, value: 'btn-primary' },
							{ label: <div className={clsx('btn-secondary', accent)}>button</div>, value: 'btn-secondary' },
							{ label: <div className={clsx('btn-with-enter-arrow', accent)}>button</div>, value: 'btn-with-enter-arrow' },
							{ label: <div className={clsx('btn-with-with-arrow', accent)}>button</div>, value: 'btn-with-with-arrow' },
						]}
						onChange={(value) => setAttributes({ variant: value })}
					/>
				</PanelBody>
				<PanelBody title="Колір" initialOpen={false}>
					<AccentColorPallet
						colorName={accent}
						setColorName={(val) => setAttributes({ accent: val })}
					/>
				</PanelBody>

				<MarginYControl size={margin} setSize={(s) => setAttributes({ margin: s })} />
			</InspectorControls>

			<div {...blockProps}>
				<RichText
					ref={ref}
					className={clsx(accent, variant, classes, className)}
					placeholder="Кнопка"
					tagName="span"
					value={(text || data?.value?.title || '')}
					allowedFormats={[]}
					multiline={false}
					onSplit={() => { }}
					onReplace={() => { }}
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
