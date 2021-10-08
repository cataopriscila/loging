import styled from "styled-components";


const Input = styled.input`
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: .4rem;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    width: 100%;
    box-sizing: border-box;
    height: 4rem;

    &:focus {
        outline-color: ${props => props.theme.firstColor};         
    }
`;

export {Input};
