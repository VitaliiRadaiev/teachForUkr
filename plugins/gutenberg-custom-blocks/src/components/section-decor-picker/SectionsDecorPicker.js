import { PanelBody, RadioControl } from "@wordpress/components";
import { getUrlToStaticImages } from "../../utils/utils";

export const SectionsDecorPicker = ({ decor, setDecor }) => {
    return (
        <PanelBody title="Декор секції" initialOpen={false}>
            <RadioControl
                selected={+decor}
                options={[
                    {
                        label: <span className="text-lg">Немає</span>,
                        value: 0
                    },
                    {
                        label: <img className="!h-[100px] w-auto bg-light-primary-80" src={getUrlToStaticImages(`general/section-decor-1.jpg`)} alt="icon" />,
                        value: 1
                    },
                    {
                        label: <img className="!h-[100px] w-auto bg-light-primary-80 -scale-x-100" src={getUrlToStaticImages(`general/section-decor-1.jpg`)} alt="icon" />,
                        value: 2
                    },
                    {
                        label: <img className="!h-[100px] w-auto bg-light-primary-80" src={getUrlToStaticImages(`general/section-decor-2.jpg`)} alt="icon" />,
                        value: 3
                    },
                    {
                        label: <img className="!h-[100px] w-auto bg-light-primary-80 -scale-x-100" src={getUrlToStaticImages(`general/section-decor-2.jpg`)} alt="icon" />,
                        value: 4
                    },
                    {
                        label: <img className="!h-[100px] w-auto bg-light-primary-80" src={getUrlToStaticImages(`general/section-decor-3.jpg`)} alt="icon" />,
                        value: 5
                    },
                    {
                        label: <img className="!h-[100px] w-auto bg-light-primary-80 -scale-x-100" src={getUrlToStaticImages(`general/section-decor-3.jpg`)} alt="icon" />,
                        value: 6
                    },
                ]}
                onChange={(value) => setDecor(+value)}
            />
        </PanelBody>
    );
}