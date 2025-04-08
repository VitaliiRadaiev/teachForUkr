import {
	useBlockProps,
	InspectorControls
} from "@wordpress/block-editor";
import "./editor.scss";
import clsx from "clsx";
import { getMarginClasses } from "../../utils/utils";
import { IsHide } from "../../components/is-hide/IsHide";
import { MarginYControl } from "../../components/space-control/MarginYControl";


export default function Edit({ attributes, setAttributes }) {
	const { isHide, margin, classes, className } = attributes;
	const blockProps = useBlockProps({
		className: clsx(
			"breadcrumbs",
			classes,
			className,
			getMarginClasses(margin),
			{ ['hide-block']: isHide }
		)
	});

	return (
		<>
			<InspectorControls>
				<IsHide isHide={isHide} setIsHide={(val) => setAttributes({ isHide: val })} />
				<MarginYControl size={margin} setSize={(s) => setAttributes({ margin: s })} />
			</InspectorControls>
			<div {...blockProps}>
				<nav className="rank-math-breadcrumb">
					<p>
						<a>Головна</a>
						<span className="separator"></span>
						<span className="last">хлібні-крихти</span>
					</p>
				</nav>
			</div>
		</>
	);
}
