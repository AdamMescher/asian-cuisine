import React from 'react';
import StyledButton from './styled';

const Button = ({ text, style }) => {
    return(
        <StyledButton style={style}><span>{text}</span></StyledButton>
    )
}

export default Button;

