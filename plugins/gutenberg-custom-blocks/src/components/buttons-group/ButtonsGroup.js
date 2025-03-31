import { React } from "@wordpress/element";
import clsx from "clsx";
import "./ButtonsGroup.scss";

export const ButtonsGroup = ({ value, setValue, valuesMap = ['no', 'sm', 'md', 'lg', 'xl'] }) => {
    return (
        <div className="buttons-group">
            {valuesMap.map(v => (
                <button
                    className={clsx('buttons-group-btn', { ['active']: v === value })}
                    onClick={() => setValue(v === value ? '' : v)}
                >{v}</button>
            ))}
        </div>
    );
}