import styled from 'styled-components';

const StyledWordmark = styled.h1`
    font-size: ${props => props.style.fontSize};
    color: ${props => props.style.color};
`;

export default StyledWordmark;