import { registerBlockType } from "@wordpress/blocks";

import edit from "./edit";
import save from "./save";
import metadata from "./block.json";
import "./decor/index";
import { getUrlToStaticImages } from "../../utils/utils";

registerBlockType(metadata.name, {
	edit,
	save,
	example: {
		innerBlocks: [
			{
				name: "t4u/image",
				attributes: {
					classes: "",
					url: getUrlToStaticImages('general/preview-section-hero-main.jpg'),
					imageId: 1
				}
			}
		]
	},
});
