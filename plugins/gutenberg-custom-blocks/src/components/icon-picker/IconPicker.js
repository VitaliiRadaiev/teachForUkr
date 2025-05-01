import { PanelBody, RadioControl } from "@wordpress/components";
import { getUrlToStaticImages } from "../../utils/utils";

const icons = [
    'icons/decor-icon-1.svg',
    'icons/decor-icon-2.svg',
    'icons/decor-icon-3.svg',
    'icons/decor-icon-4.svg',
    'icons/decor-icon-5.svg',
    'icons/decor-icon-6.svg',
    'icons/decor-icon-7.svg',
    'icons/decor-icon-8.svg',
    'icons/decor-icon-9.svg',
    'icons/decor-icon-10.svg',
    'icons/decor-icon-11.svg',
    'icons/decor-icon-12.svg',
    'icons/decor-icon-13.svg',
    'icons/decor-icon-14.svg',
    'icons/decor-icon-15.svg',
    'icons/decor-icon-16.svg',
    'icons/decor-icon-17.svg',
    'icons/decor-icon-18.svg',
    'icons/decor-icon-19.svg',
    'icons/decor-icon-20.svg',
    'icons/decor-icon-21.svg',
    'icons/decor-icon-22.svg',
    'icons/decor-icon-23.svg',
    'icons/decor-icon-24.svg',
    'icons/decor-icon-25.svg',
    'icons/decor-icon-26.svg',
    'icons/decor-icon-27.svg',
    'icons/decor-icon-28.svg',
    'icons/decor-icon-29.svg',
    'icons/decor-icon-30.svg',
    'icons/decor-icon-31.svg',
    'icons/decor-icon-32.svg',
    'icons/decor-icon-33.svg',
    'icons/decor-icon-34.svg',
    'icons/decor-icon-35.svg',
    'icons/decor-icon-36.svg',
];

export const IconPicker = ({ iconUrl, setIconUrl }) => {
    return (
        <PanelBody title="Обрати іконку" initialOpen={false}>
            <RadioControl
                selected={iconUrl}
                options={[
                    {
                        label: <div className="text-md">Немає</div>,
                        value: ''
                    },
                    ...icons.map(iconUrl => ({
                        label: <img className="!h-[30px] w-auto" src={getUrlToStaticImages(iconUrl)} />,
                        value: iconUrl
                    }))
                ]}
                onChange={(value) => setIconUrl(value)}
            />
        </PanelBody>
    );
}