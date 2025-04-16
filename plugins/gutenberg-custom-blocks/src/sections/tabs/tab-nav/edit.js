import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls
} from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
import "./editor.scss";
import clsx from "clsx";
import { AccentColorPallet } from "../../../components/colorPallets/AccentColorPallet";


export default function Edit({ attributes, setAttributes }) {
	const { accent } = attributes;
	const blockProps = useBlockProps({
		className: clsx(
			'self-center max-w-full',
			'canAddItem',
			accent
		)
	});

	const { children } = useInnerBlocksProps({}, {
		template: [
			['t4u/tab-nav-item', {
				classes: 'active'
			}],
			['t4u/tab-nav-item', {}]
		],
		allowedBlocks: ['t4u/tab-nav-item']
	})

	return (
		<>
			<InspectorControls>
				<PanelBody title="Колір" initialOpen={true}>
					<AccentColorPallet
						colorName={accent}
						setColorName={(val) => setAttributes({ accent: val })}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<div className="mx-[-16px] md:mx-[-40px] lg-max:overflow-y-hidden lg-max:h-[60px]">
					<div className="px-[16px] md:px-[40px] lg-max:pb-[20px] lg-max:overflow-x-auto">
						<div className="flex bg-[var(--nested-bg)] p-[5px] rounded-[12px] lg-max:w-max lg:flex-wrap lg:justify-center">
							{children}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
