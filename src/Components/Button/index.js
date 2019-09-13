import React from 'react';
import StyledButton from './styled';
import {generateButtonSize} from '../../utils/generateButtonSize';
import {generateButtonColor} from '../../utils/generateButtonSize';
import {generateButtonStyle} from '../../utils/generateButtonStyle';

const Button = ({ text, size, color, style }) =>{
    <StyledButton
        size={generateButtonSize(size)}
        color={generateButtonColor(color)}
        style={generateButtonStyle(style)}>
            <span>{text}</span>
    </StyledButton>
}

export default Button;

