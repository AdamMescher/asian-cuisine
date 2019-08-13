import React from 'react';
import StyledSVG from './styled';

const SVG = ({
    xmlns,
    viewBox,
    height,
    width,
    style,
    shapes
}) => {
    return(
        <StyledSVG xmlns={xmlns} viewBox={viewBox}>
            <style>{style}</style>
            {shapes}
        </StyledSVG>
    )
}

export default SVG;