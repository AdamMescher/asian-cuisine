export const generateButtonColor = color => {
    switch (color) {
        case 'wf':
            return buttonColorWireframe;
        case 'one':
            return buttonColorOne;
        case 'two':
            return buttonColorTwo;
        default:
            return buttonColorWireframe;
    }
}

export const generateButtonSize = size => {
    switch (size) {
        case 'sm':
            return smallButtonSize;
        case 'md':
            return mediumButtonSize;
        case 'lg':
            return largeButtonSize;
        case 'xl':
            return extraLargeButtonSize;
        default:
            return smallButtonSize;
    }
}

export const generateButtonStyle = style => {
    switch (style) {
        case 'fill':
            return fillButtonStyle;
        case 'outline':
            return outlineButtonStyle;
        default:
            return outlineButtonStyle;
    }
}