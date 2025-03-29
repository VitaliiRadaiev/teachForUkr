import { registerBlockType } from "@wordpress/blocks";

import edit from "./edit";
import save from "./save";
import metadata from "./block.json";
import "./decor/index";

registerBlockType(metadata.name, {
	edit,
	save
});
