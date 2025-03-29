import { React, useState } from "@wordpress/element";
import "./SizeControl.scss";
import clsx from "clsx";

export const SizeControl = ({ size, setSize, sizesMap = ['no', 'sm', 'md', 'lg', 'xl'], direction = 'top bottom' }) => {
    return (
        <div className="size-controll-container">
            <div className={clsx('size-controll-container__row', {['hidden']: !direction.includes('top')})}>
                <DirectionIcon direction="top" />
                <div className="size-controll-container__buttons-group">
                    {sizesMap.map(s => (
                        <button
                            className={clsx('size-controll-btn', { ['active']: s === size.top })}
                            onClick={() => setSize({
                                ...size,
                                top: s
                            })}
                        >{s}</button>
                    ))}
                </div>
            </div>
            <div className={clsx('size-controll-container__row', {['hidden']: !direction.includes('bottom')})}>
                <DirectionIcon direction="bottom" />
                <div className="size-controll-container__buttons-group">
                    {sizesMap.map(s => (
                        <button
                            className={clsx('size-controll-btn', { ['active']: s === size.bottom })}
                            onClick={() => setSize({
                                ...size,
                                bottom: s
                            })}
                        >{s}</button>
                    ))}
                </div>
            </div>
            <div className={clsx('size-controll-container__row', {['hidden']: !direction.includes('right')})}>
                <DirectionIcon direction="right" />
                <div className="size-controll-container__buttons-group">
                    {sizesMap.map(s => (
                        <button
                            className={clsx('size-controll-btn', { ['active']: s === size.right })}
                            onClick={() => setSize({
                                ...size,
                                right: s
                            })}
                        >{s}</button>
                    ))}
                </div>
            </div>
            <div className={clsx('size-controll-container__row', {['hidden']: !direction.includes('left')})}>
                <DirectionIcon direction="left" />
                <div className="size-controll-container__buttons-group">
                    {sizesMap.map(s => (
                        <button
                            className={clsx('size-controll-btn', { ['active']: s === size.left })}
                            onClick={() => setSize({
                                ...size,
                                left: s
                            })}
                        >{s}</button>
                    ))}
                </div>
            </div>
        </div>
    );
}

function DirectionIcon({ direction }) {
    return (
        <div className="direction-icon">
            <span className={clsx('direction-icon-item', {['active']: direction.includes('top')})}></span>
            <span className={clsx('direction-icon-item', {['active']: direction.includes('right')})}></span>
            <span className={clsx('direction-icon-item', {['active']: direction.includes('bottom')})}></span>
            <span className={clsx('direction-icon-item', {['active']: direction.includes('left')})}></span>
        </div>
    );
}