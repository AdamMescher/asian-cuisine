import styled from 'styled-components';

const StyledSVG = styled.svg`
    viewBox: ${props => props.viewBox || ''};
    xmlns: ${props => props.xmlns || ''};
    height: ${props => props.height || ''};
    width: ${props => props.width || ''};
`;

export default StyledSVG;