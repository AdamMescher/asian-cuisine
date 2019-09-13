import React from 'react';
import StyledWordmark from './styled';

const Wordmark = ({ text, style }) => (
    <div>
        <StyledWordmark style={style}>{text}</StyledWordmark>
    </div>
);

export default Wordmark;