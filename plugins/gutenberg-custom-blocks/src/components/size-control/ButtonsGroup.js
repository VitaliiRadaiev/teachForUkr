import { React } from "@wordpress/element";
import clsx from "clsx";

export const ButtonsGroup = ({ value, setValue, valuesMap = ['no', 'sm', 'md', 'lg', 'xl'] }) => {
    return (
        <div className="size-controll-container__buttons-group">
            {valuesMap.map(v => (
                <button
                    className={clsx('size-controll-btn', { ['active']: v === value })}
                    onClick={() => setValue(v)}
                >{v}</button>
            ))}
        </div>
    );
}