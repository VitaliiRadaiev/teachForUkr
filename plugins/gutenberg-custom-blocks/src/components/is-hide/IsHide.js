import { PanelBody, PanelRow, FormToggle } from "@wordpress/components";

export const IsHide = ({ isHide, setIsHide }) => {
    return (
        <PanelBody opened={true}>
            <PanelRow className="justify-start gap-x-[10px]">
                <FormToggle
                    checked={isHide}
                    onChange={() => setIsHide(!isHide)}
                />
                <span>Приховати</span>
            </PanelRow>
        </PanelBody>
    );
}