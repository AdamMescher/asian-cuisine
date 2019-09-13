import {smallButtonSize, mediumButtonSize, largeButtonSize, extraLargeButtonSize} from '../Components/Button/buttonStyles';

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
            return mediumButtonSize;
    }
}