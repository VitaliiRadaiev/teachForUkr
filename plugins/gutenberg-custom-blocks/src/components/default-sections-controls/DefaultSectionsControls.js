import { IsHide } from "../../components/is-hide/IsHide";
import { MarginYControl } from "../../components/space-control/MarginYControl";
import { PaddingYControl } from "../../components/space-control/PaddingYControl";
import { SECTIONS_MARGIN_MAP, SECTIONS_PADDING_MAP } from "../../global/global";
import { SectionsBgColorPallet } from "../../components/sections-bg-color-pallet/SectionsBgColorPallet";


export const DefaultSectionsControls = ({ attributes, setAttributes }) => {
    const { isHide, padding, margin, background } = attributes;
    return (
        <>
            <IsHide isHide={isHide} setIsHide={(val) => setAttributes({ isHide: val })} />
            <SectionsBgColorPallet
                color={background}
                setColor={(val) => setAttributes({ background: val })}
            />
            <PaddingYControl
                size={padding}
                setSize={(s) => setAttributes({ padding: s })}
                sizesMap={SECTIONS_PADDING_MAP}
            />
            <MarginYControl
                size={margin}
                setSize={(s) => setAttributes({ margin: s })}
                sizesMap={SECTIONS_MARGIN_MAP}
            />
        </>
    );
}