import { registerBlockType } from "@wordpress/blocks";

import edit from "./edit";
import save from "./save";
import metadata from "./block.json";

registerBlockType(metadata.name, {
	edit,
	save,
	example: {
		attributes: {
			decor: 0
		},
		innerBlocks: [
			{
				name: "t4u/static-image",
				attributes: {
					url: 'general/preview-section-image-text-button-row.jpg',
				}
			}
		]
	},
});
