
import styled, {keyframes} from "styled-components";

const rotation = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const Spinner = styled.div`
    width: 3rem;
    height: 3rem;
    border: .4rem solid ${props => props.theme.firstColor};
    border-radius: 50%;
    border-top: none;
    border-right: none;
    margin: 1.6rem auto;
    animation: ${rotation} 1s linear infinite;


    
`;

export {Spinner}; 