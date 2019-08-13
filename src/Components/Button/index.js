import React from 'react';
import StyledButton from './styled';
import { defaultButtonStyle, headerButtonStyle, heroButtonStyle, menuItemButtonStyle, textSectionButtonStyle } from './buttonStyles';

const Button = ({ text, type }) => {
    if (type === 'header') return <StyledButton style={headerButtonStyle}><span>{text}</span></StyledButton>
    else if (type === 'hero') return <StyledButton style={heroButtonStyle}><span>{text}</span></StyledButton>
    else if (type === 'menu') return <StyledButton style={menuItemButtonStyle}><span>{text}</span></StyledButton>
    else if (type === 'section') return <StyledButton style={textSectionButtonStyle}><span>{text}</span></StyledButton>
    else return <StyledButton style={defaultButtonStyle}><span>{text}</span></StyledButton>
}

export default Button;

