import {
	useBlockProps,
	RichText,
	InspectorControls,
	__experimentalLinkControl as LinkControl
} from "@wordpress/block-editor";
import { PanelBody, RadioControl } from "@wordpress/components";
import { useState, useEffect } from "@wordpress/element";
import apiFetch from "@wordpress/api-fetch";
import clsx from "clsx";
import { getOptionsField, mergeRefs } from "../../utils/utils";
import useFetchOnVisible from "../../hooks/hooks";
import { AccentColorPallet } from "../../components/colorPallets/AccentColorPallet";
import { MarginYControl } from "../../components/space-control/MarginYControl";
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
		wrapperClasses,
		acfField,
		acfFieldType,
		variant,
		isHide,
		margin,
		renderAs,
		dataAttributes,
		simpleWrapper,
	} = attributes;
	const [isTyping, setIsTyping] = useState(false);
	const [globalText, setGlobalText] = useState('');
	const [globalPostType, setGlobalPostType] = useState();
	const fetchData = () => getOptionsField(acfField);
	const { ref, data } = useFetchOnVisible(fetchData, [acfField], (!text && !isTyping));
	const uniqueId = blockId ? blockId : uuidv4();

	const blockProps = useBlockProps({
		className: clsx(
			wrapperClasses,
			getMarginClasses(margin),
			{
				['hide-block']: isHide
			})
	});

	const fetchGlobalLinks = () => apiFetch({ path: 'site-core/v1/options-links' });
	const { ref: refLinks, data: globalLinks, isLoading: isLoadingGlobalLInks } = useFetchOnVisible(fetchGlobalLinks);

	const fetchGlobalButtonTexts = () => apiFetch({ path: 'site-core/v1/options-buttons-text' });
	const { ref: refTexts, data: globalTexts, isLoading: isLoadingGlobalTexts } = useFetchOnVisible(fetchGlobalButtonTexts);

	const globalLinksArray = globalLinks && Object.entries(globalLinks);
	const globalTextsArray = globalTexts && Object.entries(globalTexts);

	const changeGlobalLinkHandler = (acfField, globalLinks) => {
		const linkData = globalLinks[acfField];
		setGlobalText(linkData.title);
		setGlobalPostType({
			id: linkData.url,
			title: linkData.url,
			type: 'link',
			url: linkData.url
		});
		setAttributes({
			acfField,
			acfFieldType: 'link'
		});
	}
	const changeGlobalTextsHandler = (acfField, globalTexts) => {
		const text = globalTexts[acfField];
		setGlobalText(text);
		setGlobalPostType({});
		setAttributes({
			acfField,
			acfFieldType: 'text'
		});
	}


	useEffect(() => {
		if (!blockId) {
			setAttributes({ blockId: uniqueId })
		}
	}, []);

	useEffect(() => {
		if (data) {
			setGlobalText(acfFieldType === 'link' ? (data?.value?.title || '') : (data?.value || ''));
			setGlobalPostType((acfFieldType === 'link' && !!data)
				? {
					id: data.value.url,
					title: data.value.url,
					type: 'link',
					url: data.value.url
				}
				: null)
		}
	}, [data]);

	return (
		<>
			<InspectorControls>
				<IsHide isHide={isHide} setIsHide={(val) => setAttributes({ isHide: val })} />
				{renderAs === 'link' &&
					<>
						<PanelBody
							title="Посилання"
							isHide={false}
						>
							<LinkControl
								key={blockId || uniqueId}
								searchInputPlaceholder="Пошук..."
								value={postType || globalPostType}
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
						<PanelBody
							title="Глобальні посилання"
							initialOpen={false}
						>

								{isLoadingGlobalLInks && <div className="text-center text-lg">Заватнажується ...</div>}
								

								<RadioControl
									selected={acfField}
									options={(!!globalLinksArray && Array.isArray(globalLinksArray))
										? globalLinksArray.map(([key, value]) => ({
											label: value.title,
											value: key
										}))
										: []
									}
									onChange={(value) => changeGlobalLinkHandler(value, globalLinks)}
								/>

						</PanelBody>
					</>
				}
				<PanelBody
					title="Глобальні назви"
					initialOpen={false}
				>
					{isLoadingGlobalTexts && <div className="text-center text-lg">Заватнажується ...</div>}
					<RadioControl
						selected={acfField}
						options={(!!globalTextsArray && Array.isArray(globalTextsArray))
							? globalTextsArray.map(([key, value]) => ({
								label: value,
								value: key
							}))
							: []
						}
						onChange={(value) => changeGlobalTextsHandler(value, globalTexts)}
					/>
				</PanelBody>
				<PanelBody title="Варіанти кнопок" initialOpen={false}>
					<RadioControl
						selected={variant}
						options={[
							{ label: <div className={clsx('btn-primary', accent)}>button</div>, value: 'btn-primary' },
							{ label: <div className={clsx('btn-secondary', accent)}>button</div>, value: 'btn-secondary' },
							{ label: <div className={clsx('btn-with-enter-arrow', accent)}>button</div>, value: 'btn-with-enter-arrow' },
							{ label: <div className={clsx('btn-with-arrow', accent)}>button</div>, value: 'btn-with-arrow' },
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

			<div {...(simpleWrapper ? {} : blockProps)} {...dataAttributes}>
				<RichText
					ref={mergeRefs(ref, refLinks, refTexts)}
					className={clsx(accent, variant, classes, className, { ['hide-block']: isHide })}
					placeholder="Кнопка"
					tagName="span"
					value={(text || (!isTyping && globalText))}
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
