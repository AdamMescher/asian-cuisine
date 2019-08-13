import React from 'react';
import StyledLogo from './styled';
import SVG from '../SVG';

const Logo = ({
    height,
    width,
    xmlns,
    viewBox,
    style,
    shapes
}) => (
    <StyledLogo height={height} width={width}>
        <SVG
            xmlns={xmlns}
            viewBox={viewBox}
            style={style}
            shapes={shapes} />
    </StyledLogo>
)

export default Logo;