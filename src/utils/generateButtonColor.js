import {buttonColorWireframe, buttonColorOne, buttonColorTwo} from '../Components/Button/buttonStyles';

export const generateButtonColor = color => {
    switch(color) {
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