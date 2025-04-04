import { registerBlockType } from "@wordpress/blocks";

import edit from "./edit";
import save from "./save";
import metadata from "./block.json";
import "./decor/index";

registerBlockType(metadata.name, {
	edit,
	save,
	example: {
		innerBlocks: [
			{
				name: "t4u/static-image",
				attributes: {
					url: 'general/preview-section-hero-main.jpg',
				}
			}
		]
	},
});
