import styled from 'styled-components';

const StyledButton = styled.button`
    height: ${props => props.style.height};
    padding: 0.5rem 1.5rem 0.5rem 1.5rem;
    border: 0px solid black;
    font-size: ${props => props.style.fontSize};
    color: black;
    background-color: ${props => props.style.bgColor};
    box-sizing: border-box;
    :hover {
        cursor: pointer;
        background-color: ${props => props.style.hoverBgColor} !important;
        color: ${props => props.style.hoverColor} !important;
        border: ${props => props.style.hoverBorder} !important;
        padding: calc(0.5rem - 1px) calc(1.5rem - 1px) calc(0.5rem - 1px) calc(1.5rem - 1px);
    }
    span {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export default StyledButton;