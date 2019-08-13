import styled, {css} from 'styled-components';
const flexCenterCenter = css`display: flex; justify-content: center; align-items: center`;

const StyledButton = styled.button`
    height: ${props => props.style.height || ''};
    padding: ${props => props.style.padding || ''};
    border: ${props => props.style.border || ''};
    font-size: ${props => props.style.fontSize || ''};
    font-family: ${props => props.style.fontFamily || ''};
    color: ${props => props.style.color || ''};
    background-color: ${props => props.style.bgColor || ''};
    box-sizing: ${props => props.style.boxSizing || ''};
    span {
        ${flexCenterCenter}
    }
    :hover {
        cursor: ${props => props.style.cursor || ''};
        padding: ${props => props.style.hoverPadding || ''};
        background-color: ${props => props.style.hoverBgColor || ''} !important;
        color: ${props => props.style.hoverColor || ''} !important;
        border: ${props => props.style.hoverBorder || ''} !important;
    }
    :active {
        cursor: ${props => props.style.cursor || ''};
        padding: ${props => props.style.activePadding || ''};
        background-color: ${props => props.style.activeBgColor || ''} !important;
        color: ${props => props.style.activeColor || ''} !important;
        border: ${props => props.style.activeBorder || ''} !important;
    }
    :disabled {
        cursor: ${props => props.style.cursor || ''};
        padding: ${props => props.style.disabledPadding || ''};
        background-color: ${props => props.style.disabledBgColor || ''} !important;
        color: ${props => props.style.disabledColor || ''} !important;
        border: ${props => props.style.disabledBorder || ''} !important;
    }
`;

export default StyledButton;