import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls
} from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
import { useState } from "@wordpress/element";
import "./editor.scss";
import clsx from "clsx";
import { getSectionsMarginClasses, getContainerClasses } from "../../utils/utils";
import { ButtonsGroup } from "../../components/buttons-group/ButtonsGroup";
import { CONTAINER_SIZES, SECTIONS_MARGIN_MAP } from "../../global/global";
import { IsHide } from "../../components/is-hide/IsHide";
import { MarginYControl } from "../../components/space-control/MarginYControl";

export default function Edit({ attributes, setAttributes }) {
	const { isHide, margin, className, container, aligment } = attributes;
	const [isContainerChange, setIsContainerChange] = useState(false);
	const blockProps = useBlockProps({
		className: clsx(
			'hero-simple hero-v1-section pt-[100px] md:pt-[127px] xl:pt-[112px]',
			className,
			getSectionsMarginClasses(margin),
			{ ['hide-block']: isHide }
		)
	});

	const { children } = useInnerBlocksProps({}, {
		template: [
			['t4u/heading', {
				classes: "mt-[16px] md:mt-[20px] text-dark-primary w-full",
				container: "xl",
				fontSize: "2xl"
			}],
			['t4u/heading', {
				classes: "mt-[10px] text-dark-primary w-full",
				container: "xl",
				fontSize: "lg"
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
				<IsHide isHide={isHide} setIsHide={(val) => setAttributes({ isHide: val })} />
				<MarginYControl
					size={margin}
					setSize={(s) => setAttributes({ margin: s })}
					sizesMap={SECTIONS_MARGIN_MAP}
				/>
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
					<div className="breadcrumbs text-sm">
						<nav className="rank-math-breadcrumb">
							<p>
								<a>Головна</a>
								<span className="separator"></span>
								<span className="last">хлібні-крихти</span>
							</p>
						</nav>
					</div>
					<div className={clsx(
						'flex flex-col mt-[24px] md:mt-[60px]',
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
