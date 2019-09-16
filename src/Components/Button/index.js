import React from 'react';
import StyledButton from './styled';
import { generateButtonColor, generateButtonSize, generateButtonStyle } from '../../utils/buttonGenerators';

const Button = ({
    text,
    size,
    color,
    style }) => (
        <StyledButton
            size={generateButtonSize(size)}
            color={generateButtonColor(color)}
            style={generateButtonStyle(style)}>
            <span>{text}</span>
        </StyledButton>
    );

export default Button;
