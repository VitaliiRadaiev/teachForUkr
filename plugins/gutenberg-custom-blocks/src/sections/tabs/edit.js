import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls
} from "@wordpress/block-editor";
import { useSelect, useDispatch } from '@wordpress/data';
import { useState, useEffect } from "@wordpress/element";
import "./editor.scss";
import clsx from "clsx";
import { getSectionsPaddingClasses, getSectionsMarginClasses, getUrlToStaticImages } from "../../utils/utils";
import { DefaultSectionsControls } from "../../components/default-sections-controls/DefaultSectionsControls";


export default function Edit({ attributes, setAttributes, clientId }) {
	const { preview, isHide, padding, margin, background, className } = attributes;
	const [activeTab, setActiveTab] = useState(0);
	const { updateBlockAttributes, insertBlock, removeBlock } = useDispatch('core/block-editor');
	const innerBlocks = useSelect((select) => {
		return select('core/block-editor').getBlocks(clientId);
	}, [clientId]);
	const navTabs = innerBlocks[1]?.innerBlocks[0]?.innerBlocks;
	const [prevTabs, setPrevTabs] = useState(navTabs);

	const blockProps = useBlockProps({
		className: clsx(
			'tabs-section rounded-[20px] md:rounded-[30px]',
			className,
			background,
			getSectionsMarginClasses(margin),
			getSectionsPaddingClasses(padding),
			{ ['hide-block']: isHide }
		),
		onClick: (e) => {
			if (e.target.closest('[data-tab-trigger]')) {
				const btn = e.target.closest('[data-tab-trigger]');
				const parent = btn.parentElement;
				const index = Array.from(parent.children).indexOf(btn);
				setActiveTab(index);
			}
		}
	});

	const { children } = useInnerBlocksProps({}, {
		template: [
			['t4u/head-block', {
				classes: ""
			}],
			['t4u/inner-block', {
				classes: 'mt-[30px] md:mt-[40px] lg:mt-[50px] first-child-no-margin flex flex-col',
				simpleWrapper: true,
				options: {
					template: [
						['t4u/tab-nav', {}],
						['t4u/inner-block', {
							wrapper: false,
							options: {
								template: [
									['t4u/tab-content', {
										classes: 'active',
									}],
									['t4u/tab-content', {}],
								],
								allowedBlocks: ['t4u/tab-content']
							}
						}]
					],
					allowedBlocks: []
				}
			}]
		],
		allowedBlocks: []
	})

	useEffect(() => {
		const navTabs = innerBlocks[1]?.innerBlocks[0];
		const contentTabs = innerBlocks[1]?.innerBlocks[1];

		console.log('activeTab', activeTab);
		console.log('navTabs', navTabs.innerBlocks);
		console.log('contentTabs', contentTabs.innerBlocks);
		

		if (navTabs) {
			const items = navTabs?.innerBlocks;
			items.forEach((itme, index) => {
				itme && updateBlockAttributes(itme.clientId, {
					classes: (index == activeTab) ? 'active' : ''
				})
			});
		}

		if (contentTabs) {
			const items = contentTabs?.innerBlocks;
			items.forEach((itme, index) => {
				itme && updateBlockAttributes(itme.clientId, {
					classes: (index == activeTab) ? 'active' : ''
				})
			});
		}

	}, [activeTab, prevTabs.length]);

	function findRemovedIndex(prevState, currentState) {
		for (let i = 0; i < prevState.length; i++) {
			const idToFind = prevState[i].clientId;
			const existsInCurrent = currentState.some(item => item.clientId === idToFind);
			if (!existsInCurrent) {
				return i;
			}
		}
		return -1;
	}

	useEffect(() => {
		if (navTabs.length > prevTabs.length) {

			const contentTabs = innerBlocks[1]?.innerBlocks[1];
			if (contentTabs) {
				const newBlock = wp.blocks.createBlock('t4u/tab-content', {});
				insertBlock(newBlock, contentTabs.innerBlocks.length, contentTabs.clientId, false);
			}

			setActiveTab(navTabs.length - 1);

		} else if (navTabs.length < prevTabs.length) {
			const removedTabIndex = findRemovedIndex(prevTabs, navTabs);

			const contentTabs = innerBlocks[1]?.innerBlocks[1];
			if(contentTabs) {
				const removedTabContent = contentTabs.innerBlocks[removedTabIndex];
				removedTabContent && removeBlock(removedTabContent.clientId);
			}

			setActiveTab(0);
		}

		setPrevTabs(navTabs);
	}, [navTabs.length])

	if (preview) {
		return <img src={getUrlToStaticImages(preview)} />
	}

	return (
		<>
			<InspectorControls>
				<DefaultSectionsControls attributes={attributes} setAttributes={setAttributes} />
			</InspectorControls>
			<section {...blockProps}>
				<div className="container">
					{children}
				</div>
			</section>
		</>
	);
}
