import { ColorPalette } from '@wordpress/components';

export const BgColorPallet = ({ colorName = 'bg-light-primary-80', setColorName }) => {
    const colors = [
        { name: 'light', color: '#FFFFFF', className: 'bg-light-primary' },
        { name: 'light 80', color: '#F6F6F6', className: 'bg-light-primary-80' }
    ];

    const [colorData] = colors.filter(color => color.className === colorName);

    return (
        <ColorPalette
            colors={colors}
            disableCustomColors
            clearable={false}
            onChange={(color) => {
                const selectedColor = colors.find(c => c.color === color);
                if (selectedColor) {
                    setColorName(selectedColor.className)
                } 
            }}
            value={colorData.color}
        />
    );
}