import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls
} from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
import { useState } from "@wordpress/element";
import "./editor.scss";
import clsx from "clsx";
import { getSectionsPaddingClasses, getSectionsMarginClasses, getContainerClasses } from "../../utils/utils";
import { DefaultSectionsControls } from "../../components/default-sections-controls/DefaultSectionsControls";
import { ButtonsGroup } from "../../components/buttons-group/ButtonsGroup";
import { CONTAINER_SIZES } from "../../global/global";

export default function Edit({ attributes, setAttributes }) {
	const { isHide, padding, margin, background, className, container, aligment } = attributes;
	const [isContainerChange, setIsContainerChange] = useState(false);
	const blockProps = useBlockProps({
		className: clsx(
			'head-section rounded-[20px] md:rounded-[30px]',
			className,
			background,
			getSectionsMarginClasses(margin),
			getSectionsPaddingClasses(padding),
			{ ['hide-block']: isHide }
		)
	});

	const { children } = useInnerBlocksProps({}, {
		template: [
			['t4u/sup-title', {}],
			['t4u/heading', { 
				classes: "mt-[16px] md:mt-[20px] text-dark-primary w-full",
				container: "xl"
			}],
			['t4u/simple-text', {
				classes: "mt-[20px] lg:mt-[30px] w-full",
				container: "md"
			}],
		],
		allowedBlocks: []
	})

	return (
		<>
			<InspectorControls>
				<DefaultSectionsControls attributes={attributes} setAttributes={setAttributes} />
				<PanelBody title="Вирівнювання контенту" initialOpen={false}>
					<ButtonsGroup
						value={aligment}
						setValue={(val) => setAttributes({ aligment: val })}
						valuesMap={["left", "center", "right"]}
					/>
				</PanelBody>
				<PanelBody
					title="Розмір обмежуючого контейнера"
					initialOpen={false}
				>
					<div onMouseEnter={() => setIsContainerChange(true)} onMouseLeave={() => setIsContainerChange(false)}>
						<ButtonsGroup
							value={container}
							setValue={(val) => setAttributes({ container: val })}
							valuesMap={CONTAINER_SIZES}
						/>
					</div>
				</PanelBody>
			</InspectorControls>
			<section {...blockProps}>
				<div className="container">
					<div className={clsx(
						'flex flex-col',
						getContainerClasses(container),
						{
							'canChangeContainerSize': isContainerChange,
							'text-center ml-auto mr-auto items-center': aligment === 'center',
							'text-right ml-auto items-end': aligment === 'right',
							'items-start': aligment === 'left',
						}
					)}>
						{children}
					</div>
				</div>
			</section>
		</>
	);
}
