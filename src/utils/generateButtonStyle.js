import {outlineButtonStyle, fillButtonStyle} from '../Components/Button/buttonStyles';

export const generateButtonStyle = style => {
    switch(style) {
        case 'fill':
            return fillButtonStyle;
        case 'outline':
            return outlineButtonStyle;
        default:
            return outlineButtonStyle;
    }
}