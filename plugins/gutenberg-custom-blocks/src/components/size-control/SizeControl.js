import { React, useState } from "@wordpress/element";
import "./SizeControl.scss";
import clsx from "clsx";
import { ButtonsGroup } from "../buttons-group/ButtonsGroup";


export const SizeControl = ({ size, setSize, sizesMap = ['no', 'sm', 'md', 'lg', 'xl'], direction = 'top bottom' }) => {
    return (
        <div className="size-controll-container">
            <div className={clsx('size-controll-container__row', { ['hidden']: !direction.includes('top') })}>
                <DirectionIcon direction="top" />
                <ButtonsGroup
                    value={size.top}
                    setValue={(val) => setSize({
                        ...size,
                        top: val
                    })}
                    valuesMap={sizesMap}
                />
            </div>
            <div className={clsx('size-controll-container__row', { ['hidden']: !direction.includes('bottom') })}>
                <DirectionIcon direction="bottom" />
                <ButtonsGroup
                    value={size.bottom}
                    setValue={(val) => setSize({
                        ...size,
                        bottom: val
                    })}
                    valuesMap={sizesMap}
                />
            </div>
            <div className={clsx('size-controll-container__row', { ['hidden']: !direction.includes('right') })}>
                <DirectionIcon direction="right" />
                <ButtonsGroup
                    value={size.right}
                    setValue={(val) => setSize({
                        ...size,
                        right: val
                    })}
                    valuesMap={sizesMap}
                />
            </div>
            <div className={clsx('size-controll-container__row', { ['hidden']: !direction.includes('left') })}>
                <DirectionIcon direction="left" />
                <ButtonsGroup
                    value={size.left}
                    setValue={(val) => setSize({
                        ...size,
                        left: val
                    })}
                    valuesMap={sizesMap}
                />
            </div>
        </div>
    );
}

function DirectionIcon({ direction }) {
    return (
        <div className="direction-icon">
            <span className={clsx('direction-icon-item', { ['active']: direction.includes('top') })}></span>
            <span className={clsx('direction-icon-item', { ['active']: direction.includes('right') })}></span>
            <span className={clsx('direction-icon-item', { ['active']: direction.includes('bottom') })}></span>
            <span className={clsx('direction-icon-item', { ['active']: direction.includes('left') })}></span>
        </div>
    );
}