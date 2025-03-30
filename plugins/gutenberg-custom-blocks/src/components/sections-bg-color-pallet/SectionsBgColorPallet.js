import { PanelBody } from "@wordpress/components";
import { BgColorPallet } from "../colorPallets/BgColorPallet";

export const SectionsBgColorPallet = ({ color, setColor }) => {
    return (
        <PanelBody title="Колір заднього фону" initialOpen={false}>
            <BgColorPallet
                colorName={color}
                setColorName={(val) => setColor(val)}
            />
        </PanelBody>
    );
}