import { PanelBody } from "@wordpress/components";
import { SizeControl } from "../size-control/SizeControl";

export const MarginYControl = ({ size, setSize, sizesMap = ['no', 'sm', 'md', 'lg', 'xl', '2xl'], }) => {
    return (
        <PanelBody title="Зовнішні отступи" initialOpen={false}>
            <SizeControl size={size} setSize={setSize} sizesMap={sizesMap} />
        </PanelBody>
    );
}