import {
	useBlockProps,
	MediaUploadCheck,
	MediaUpload,
} from "@wordpress/block-editor";
import { useEffect, useRef, useState } from "@wordpress/element";
import { Dashicon, Button, Popover } from "@wordpress/components";
import "./editor.scss";
import apiFetch from "@wordpress/api-fetch";
import clsx from "clsx";
import { removeDomain } from "../../utils/utils";


export default function Edit({ attributes, setAttributes }) {
	const { imageId, url, classes } = attributes;
	const [anchor, setAnchor] = useState(null);
	const [btnhover, setBtnhover] = useState(false);
	const [fetching, setFetching] = useState(false);
	const [hover, setHover] = useState(false);
	const [isOpenPopup, setisOpenPopup] = useState(false);
	const imageSelected = !!imageId && !!url;

	return (
		<>
			<img
				src={url && `${document.location.origin}${removeDomain(url)}`}
				className={clsx({
					'initial': (!classes && !imageId),
					'img-can-change': btnhover,
					'fetching': fetching
				}, classes)}
				ref={(ref) => {
					if (ref) {
						setAnchor(ref);
					}
				}}
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
			/>
			{anchor && (!imageId || isOpenPopup || hover) &&
				<Popover
					position="bottom center"
					offset={-60}
					anchor={anchor}
					onMouseEnter={() => setHover(true)}
					onMouseLeave={() => setHover(false)}
				>
					<MediaUploadCheck>
						<MediaUpload
							allowedTypes={["image"]}
							render={({ open }) => {
								return (
									<Button 
									variant="primary" 
									className="media-select" 
									onClick={(e) => {
										open(e);
										setisOpenPopup(true);
									}}
									onMouseEnter={() => {
										setBtnhover(true)
									}}
									onMouseLeave={() => {
										setBtnhover(false)
									}}
									>
										{imageSelected
											? "Замінити зображення"
											: "Обрати зображення"
										}
									</Button>
								);
							}}
							value={imageId}
							onSelect={(item) => {
								setisOpenPopup(false);
								setAttributes({
									imageId: item.id,
								});
								setFetching(true)
								apiFetch({ path: `/wp/v2/media/${item.id}` })
									.then((data) => {
										setAttributes({ url: data?.source_url })
										setFetching(false)
									})
									.catch(() => setFetching(false))
							}}
							onError={() => {
								setisOpenPopup(false);
							}}
							onClose={() => {
								setisOpenPopup(false);
							}}
						/>
					</MediaUploadCheck>
				</Popover>
			}
		</>
	);
}
