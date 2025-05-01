import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls
} from "@wordpress/block-editor";
import { useEffect } from "@wordpress/element";
import { useSelect, useDispatch } from '@wordpress/data';
import "./editor.scss";
import clsx from "clsx";
import { getSectionsPaddingClasses, getSectionsMarginClasses, getUrlToStaticImages, getOptionsField } from "../../utils/utils";
import { DefaultSectionsControls } from "../../components/default-sections-controls/DefaultSectionsControls";
import { SectionDecor } from '../../ui/section-decor/SectionDecor';
import { SectionsDecorPicker } from "../../components/section-decor-picker/SectionsDecorPicker";
import useFetchOnVisible from "../../hooks/hooks";

export default function Edit({ attributes, setAttributes, clientId }) {
	const { preview, isHide, padding, margin, background, className, decor } = attributes;
	
	const { updateBlockAttributes } = useDispatch('core/block-editor');
	const innerBlocks = useSelect((select) => select('core/block-editor').getBlocks(clientId), [clientId]);

	const blockProps = useBlockProps({
		className: clsx(
			'cards-with-load-pdf-section rounded-[20px] md:rounded-[30px] relative',
			className,
			background,
			getSectionsMarginClasses(margin),
			getSectionsPaddingClasses(padding),
			{ ['hide-block']: isHide }
		)
	});

	const { children } = useInnerBlocksProps({}, {
		template: [
			['t4u/head-block', {
				classes: ""
			}],
			['t4u/inner-block', {
				classes: 'mt-[30px] md:mt-[40px] lg:mt-[50px] relative',
				simpleWrapper: true,
				dataAttributes: {
					'data-slider': 'cards-with-load-pdf-slider'
				},
				options: {
					template: [['t4u/cards-with-load-pdf-content', {}]],
					allowedBlocks: []
				}

			}],
			["t4u/buttons-group", {
				classes: 'mt-[40px] xl:mt-[50px]',
				alignment: 'center',
				options: {
					template: [
						["t4u/button", {}],
					],
					allowedBlocks: ['t4u/button']
				}
			}],
		],
		allowedBlocks: []
	})

	const fetchData = () => getOptionsField('text_download');
	const { ref, data } = useFetchOnVisible(fetchData);

	useEffect(() => {
		if(data) {
			const cardsList = innerBlocks[1]?.innerBlocks[0]?.innerBlocks;
			if(cardsList && Array.isArray(cardsList)) {
				cardsList.forEach(card => {
					updateBlockAttributes(card.clientId, {
						textDownload: data.value
					})
				})
			}
		}
	}, [data]);

	useEffect(() => {
		const cards = innerBlocks[1]?.innerBlocks[0]?.innerBlocks
		if (Array.isArray(cards) && cards.length < 5) {
			const headBlock = innerBlocks[0];
			headBlock && updateBlockAttributes(
				headBlock.clientId, {
				aligment: 'center'
			});
		} else {
			const headBlock = innerBlocks[0];
			headBlock && updateBlockAttributes(
				headBlock.clientId, {
				aligment: 'left'
			});
		}
	}, [innerBlocks]);


	if (preview) {
		return <img src={getUrlToStaticImages(preview)} />
	}

	return (
		<>
			<InspectorControls>
				<DefaultSectionsControls attributes={attributes} setAttributes={setAttributes} />
				<SectionsDecorPicker decor={decor} setDecor={(value) => setAttributes({ decor: value })} />
			</InspectorControls>
			<section {...blockProps}>
				<SectionDecor decor={decor} />
				<div ref={ref} className="container relative z-2">
					{children}
				</div>
			</section>
		</>
	);
}
