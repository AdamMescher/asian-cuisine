import styled, { css } from 'styled-components';
const flexCenterCenter = css``;

const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-family: ${props => props.style.fontFamily || ''};
    box-sizing: border-box;

    height: ${props => props.size.height};
    width: ${props => props.size.width};

    border-width: ${props => props.style.borderWidth};
    border-style: ${props => props.style.borderStyle};
    border-color: ${props => props.style.borderColor};

    background-color: ${props => props.style.bgColor || ''};
    span {
        ${flexCenterCenter}
        padding: ${props => props.style.padding || ''};
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
        background-color: ${props => props.style.disabledBgColor || ''} !important;
        color: ${props => props.style.disabledColor || ''} !important;
        border: ${props => props.style.disabledBorder || ''} !important;
    }
`;

export default StyledButton;