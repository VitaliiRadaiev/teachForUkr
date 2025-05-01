import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls
} from "@wordpress/block-editor";
import "./editor.scss";
import clsx from "clsx";
import { useSelect, useDispatch } from '@wordpress/data';
import { IconPicker } from "../../../components/icon-picker/IconPicker";
import { IsHide } from "../../../components/is-hide/IsHide";



export default function Edit({ attributes, setAttributes, clientId }) {
	const { isHide, icon, className } = attributes;
	const { updateBlockAttributes } = useDispatch('core/block-editor');
	const innerBlocks = useSelect((select) => select('core/block-editor').getBlocks(clientId), [clientId]);

	const blockProps = useBlockProps({
		className: clsx(
			'item lg:flex gap-[30px] 4xl:gap-[40px]',
			className,
			{ ['hide-block']: isHide }
		)
	});

	const { children } = useInnerBlocksProps({}, {
		template: [
			['t4u/inner-block', {
				classes: 'shrink-0 grow-0 aspect-[1/0.577] lg:aspect-auto lg:w-[calc(50%-15px)] 4xl:w-[calc(50%-20px)] lg:min-h-[373px] 4xl:min-h-[496px] relative rounded-[12px] overflow-hidden',
				simpleWrapper: true,
				options: {
					template: [
						['t4u/image', {
							classes: 'ibg'
						}]
					],
					allowedBlocks: []
				}
			}],
			['t4u/inner-block', {
				classes: 'mt-[30px] lg:mt-0 shrink grow lg:self-center',
				simpleWrapper: true,
				options: {
					template: [
						['t4u/inner-block', {
							classes: 'h-[44px] w-[44px] md:h-[60px] md:w-[60px] rounded-full bg-accent-first flex items-center justify-center',
							simpleWrapper: true,
							options: {
								template: [
									['t4u/static-image', {
										classes: 'h-[22px] w-[22px] md:h-[32px] md:w-[32px] object-cover color-light-primary-filter',
										url: 'icons/decor-icon-1.svg'
									}]
								],
								allowedBlocks: []
							}
						}],
						['t4u/heading', {
							classes: 'mt-[20px] md:mt-[30px]',
							htmlTeg: 'span',
							fontSize: 'lg'
						}],
						['t4u/simple-text', {
							classes: 'mt-[5px] md:mt-[10px]',
							canAddItem: true,
							container: 'full'
						}],
						["t4u/buttons-group", {
							classes: 'mt-[20px] lg:mt-[30px]',
							options: {
								template: [
									["t4u/button", {}],
								],
								allowedBlocks: ['t4u/button']
							}
						}]
					],
					allowedBlocks: []
				}
			}],
		],
		allowedBlocks: []
	});

	const setIcon = (iconUrl) => {
		const staticImage = innerBlocks[1]?.innerBlocks[0]?.innerBlocks[0];
		staticImage && updateBlockAttributes(staticImage.clientId, {
			url: iconUrl
		})
	}

	return (
		<>
			<InspectorControls>
				<IsHide isHide={isHide} setIsHide={(val) => setAttributes({ isHide: val })} />
				<IconPicker iconUrl={icon} setIconUrl={(iconUrl) => {
					setAttributes({ icon: iconUrl });
					setIcon(iconUrl);
				}} />
			</InspectorControls>
			<div {...blockProps}>
				{children}
			</div>
		</>
	);
}
