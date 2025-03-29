import { PanelBody } from "@wordpress/components";
import { SizeControl } from "./SizeControl";

export const MarginYControl = ({ size, setSize }) => {
    return (
        <PanelBody title="Зовнішні отступи" initialOpen={false}>
            <SizeControl size={size} setSize={setSize} />
        </PanelBody>
    );
}