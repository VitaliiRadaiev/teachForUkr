import { ColorPalette } from '@wordpress/components';

export const AccentColorPallet = ({ colorName = 'accent-first', setColorName }) => {
    const colors = [
        { name: 'Accent 1', color: '#0536FC', className: 'accent-first' },
        { name: 'Accent 2', color: '#FF8200', className: 'accent-second' }
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