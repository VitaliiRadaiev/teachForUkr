import { registerFormatType } from '@wordpress/rich-text';
import { RichTextToolbarButton, RichTextShortcut } from '@wordpress/block-editor';
import { ColorPalette, Popover } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { applyFormat, removeFormat } from '@wordpress/rich-text';
import "./style.scss";

const FORMAT_HIGHLIGHT = 'custom-format/color-highlight';
const FORMAT_UPPERCASE = 'custom-format/uppercase';
const FORMAT_LOWERCASE = 'custom-format/lowercase';

const HighlightButton = ({ isActive, value, onChange, contentRef }) => {
    const [isOpen, setIsOpen] = useState(false);
    const colors = [
        { name: 'Accent 1', color: '#0536FC', className: 'text-accent-first' },
        { name: 'Accent 2', color: '#FF8200', className: 'text-accent-second' },
        { name: 'dark', color: '#1f1f1f', className: 'text-dark-primary' },
        { name: 'dark-80', color: '#4c4c4c', className: 'text-dark-primary-80' },
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
                                        type: FORMAT_HIGHLIGHT,
                                        attributes: { class: selectedColor.className }
                                    })
                                );
                            } else {
                                onChange(removeFormat(value, FORMAT_HIGHLIGHT));
                            }
                            setIsOpen(false);
                        }}
                    />
                </Popover>
            )}
        </>
    );
};

const UppercaseButton = ({ isActive, value, onChange }) => {
    return (
        <RichTextToolbarButton
            icon="editor-textcolor"
            title="Uppercase"
            isActive={isActive}
            onClick={() => {
                if (isActive) {
                    onChange(removeFormat(value, FORMAT_UPPERCASE));
                } else {
                    onChange(
                        applyFormat(value, {
                            type: FORMAT_UPPERCASE
                        })
                    );
                }
            }}
        />
    );
};

const LowercaseButton = ({ isActive, value, onChange }) => {
    return (
        <RichTextToolbarButton
            icon="editor-textcolor"
            title="Lowercase"
            isActive={isActive}
            onClick={() => {
                if (isActive) {
                    onChange(removeFormat(value, FORMAT_LOWERCASE));
                } else {
                    onChange(
                        applyFormat(value, {
                            type: FORMAT_LOWERCASE
                        })
                    );
                }
            }}
        />
    );
};

registerFormatType(FORMAT_HIGHLIGHT, {
    title: 'Виділення кольором',
    tagName: 'span',
    className: 'color-highlight',
    edit: HighlightButton,
});

registerFormatType(FORMAT_UPPERCASE, {
    title: 'Uppercase',
    tagName: 'span',
    className: 'uppercase',
    edit: UppercaseButton,
});

registerFormatType(FORMAT_LOWERCASE, {
    title: 'Lowercase',
    tagName: 'span',
    className: 'lowercase',
    edit: LowercaseButton,
});