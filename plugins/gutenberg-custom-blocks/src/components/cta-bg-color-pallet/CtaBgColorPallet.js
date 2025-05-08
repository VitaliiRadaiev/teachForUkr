import { PanelBody } from "@wordpress/components";
import { ColorPalette } from '@wordpress/components';

export const CtaBgColorPallet = ({ color, setColor }) => {
    const colors = [
        { name: 'accent-second', color: '#FF8200', className: 'bg-accent-second' },
        { name: 'accent-first-50', color: '#829BFE', className: 'bg-accent-first-50' }
    ];

    const [colorData] = colors.filter(colorData => colorData.className === color);

    return (
        <PanelBody title="Колір заднього фону, кольоровий контейнер" initialOpen={false}>
            <ColorPalette
                colors={colors}
                disableCustomColors
                clearable={false}
                onChange={(color) => {
                    const selectedColor = colors.find(c => c.color === color);
                    if (selectedColor) {
                        setColor(selectedColor.className)
                    }
                }}
                value={colorData.color}
            />
        </PanelBody>
    );
}