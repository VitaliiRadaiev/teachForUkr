import { PanelBody, RadioControl } from "@wordpress/components";
import { getUrlToStaticImages } from "../../utils/utils";

const icons = [
    'icons/decor-icon-1.svg',
    'icons/decor-icon-2.svg',
    'icons/decor-icon-3.svg',
    'icons/decor-icon-4.svg',
];

export const IconPicker = ({ iconUrl, setIconUrl }) => {
    return (
        <PanelBody title="Обрати іконку" initialOpen={false}>
            <RadioControl
                selected={iconUrl}
                options={icons.map(iconUrl => ({
                    label: <img className="!h-[30px] w-auto" src={getUrlToStaticImages(iconUrl)} />,
                    value: iconUrl
                }))}
                onChange={(value) => setIconUrl(value)}
            />
        </PanelBody>
    );
}