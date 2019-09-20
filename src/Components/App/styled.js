import styled from 'styled-components';

const StyledApp = styled.main`
    font-family: ${props => props.theme.fontStack.sansSerifFontFamily};
    font-size: ${props => props.theme.fontStack.h1FontSize};
    line-height: ${props => props.theme.fontStack.lineHeight};
`;

export default StyledApp;