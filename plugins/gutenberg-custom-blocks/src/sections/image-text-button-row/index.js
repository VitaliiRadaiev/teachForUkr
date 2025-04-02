import { registerBlockType } from "@wordpress/blocks";

import edit from "./edit";
import save from "./save";
import metadata from "./block.json";
import { getUrlToStaticImages } from "../../utils/utils";

registerBlockType(metadata.name, {
	edit,
	save,
	example: {
		attributes: {
			decor: 0
		},
		innerBlocks: [
			{
				name: "t4u/image",
				attributes: {
					classes: "",
					url: getUrlToStaticImages('general/preview-section-image-text-button-row.jpg'),
					imageId: 1
				}
			}
		]
	},
});
