import React from 'react';
import PropTypes from 'prop-types'
import StyledButton from './styled';
import { generateButtonColor, generateButtonSize, generateButtonStyle } from '../../utils/buttonGenerators';

const Button = ({
    text,
    color,
    size,
    style }) => (
        <StyledButton
            color={color}
            size={size}
            style={style}>
            <span>{text}</span>
        </StyledButton>
    );

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.object,
    size: PropTypes.object,
    style: PropTypes.object
}

export default Button;
