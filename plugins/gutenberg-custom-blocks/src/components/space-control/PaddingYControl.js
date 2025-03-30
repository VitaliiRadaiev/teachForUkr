import { PanelBody } from "@wordpress/components";
import { SizeControl } from "../size-control/SizeControl";

export const PaddingYControl = ({ size, setSize, sizesMap = ['no', 'sm', 'md', 'lg', 'xl'], }) => {
    return (
        <PanelBody title="Внутрішні отступи" initialOpen={false}>
            <SizeControl size={size} setSize={setSize} sizesMap={sizesMap} />
        </PanelBody>
    );
}