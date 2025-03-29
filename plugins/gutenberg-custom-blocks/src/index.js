import { registerFormatType } from '@wordpress/rich-text';
import { RichTextToolbarButton, RichTextShortcut } from '@wordpress/block-editor';
import { ColorPalette, Popover } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { applyFormat, removeFormat } from '@wordpress/rich-text';
import "./style.scss";

const FORMAT_NAME = 'custom-format/color-highlight';

const HighlightButton = ({ isActive, value, onChange, contentRef }) => {
    const [isOpen, setIsOpen] = useState(false);
    const colors = [
        { name: 'Accent 1', color: '#0536FC', className: 'text-accent-first' },
        { name: 'Accent 2', color: '#FF8200', className: 'text-accent-second' },
        { name: 'dark', color: '#1f1f1f', className: 'text-dark-primary' }
    ];

    return (
        <>
            <RichTextShortcut
                type="primary"
                character="h"
                onUse={() => setIsOpen(true)}
            />
            <RichTextToolbarButton
                icon="admin-customizer"
                title="Виділення кольором"
                onClick={() => setIsOpen(!isOpen)}
                isActive={isActive}
            />
            {isOpen && (
                <Popover
                    position="top right top"
                    onClose={() => setIsOpen(false)}
                    anchor={contentRef.current}
                >
                    <ColorPalette
                        colors={colors}
                        disableCustomColors
                        clearable
                        onChange={(color) => {
                  
                            
                            const selectedColor = colors.find(c => c.color === color);
                            if (selectedColor) {
                                onChange(
                                    applyFormat(value, {
                                        type: FORMAT_NAME,
                                        attributes: { class: selectedColor.className }
                                    })
                                );
                            } else {
                                console.log(color);
                                onChange(removeFormat(value, FORMAT_NAME));
                            }
                            setIsOpen(false);
                        }}
                    />
                </Popover>
            )}
        </>
    );
};

registerFormatType(FORMAT_NAME, {
    title: 'Виділення кольором',
    tagName: 'span',
    className: 'color-highlight',
    edit: HighlightButton,
});