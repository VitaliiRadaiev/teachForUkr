import clsx from "clsx";

export function DirectionIcon({ direction }) {
    return (
        <div className="direction-icon">
            <span className={clsx('direction-icon-item', { ['active']: direction.includes('top') })}></span>
            <span className={clsx('direction-icon-item', { ['active']: direction.includes('right') })}></span>
            <span className={clsx('direction-icon-item', { ['active']: direction.includes('bottom') })}></span>
            <span className={clsx('direction-icon-item', { ['active']: direction.includes('left') })}></span>
        </div>
    );
}