import React from 'react';
import Logo from '../Logo/index';
import Wordmark from '../Wordmark/index';

const xmlns = 'http://www.w3.org/2000/svg';
const viewBox = '0 0 38.6 41.2';
const shapes = `
    <circle cx="31.4" cy="34" r="6.8" fill="none" stroke="#e08e5d" stroke-miterlimit="10" stroke-width=".75" />
    <circle cx="31.4" cy="34" r="4" fill="#23253c" />
    <path d="M2.5.5l23.2 37.2M.5 5l33.8 22.8" class="st2" />
`;
const text = 'Asian Cuisine';
const logoStyle = `.st2 { fill:none;stroke: #4a3f39; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10 }`;
const wordmarkStyle = {
    fontSize: '14px',
    color: `${props => props.theme.colors.secondary.one}`
};

const CombinationMark = ({ height }) => (
    <StyledCombinatonMark height={height} >
        <Logo
            xmlns={xmlns}
            viewBox={viewBox}
            style={logoStyle}
            shapes={shapes} />
        <Wordmark
            text={text}
            style={wordmarkStyle} />
    </StyledCombinatonMark>
);

export default CombinationMark;