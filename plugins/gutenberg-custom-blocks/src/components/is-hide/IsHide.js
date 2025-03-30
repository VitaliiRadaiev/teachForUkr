import { PanelBody, PanelRow, FormToggle } from "@wordpress/components";

export const IsHide = ({ isHide, setIsHide }) => {
    return (
        <PanelBody opened={true}>
            <PanelRow>
                <label className="flex items-center gap-x-[10px] cursor-pointer">
                    <FormToggle
                        checked={isHide}
                        onChange={() => setIsHide(!isHide)}
                    />
                    <span>Приховати</span>
                </label>
            </PanelRow>
        </PanelBody>
    );
}