import React from "react";
import styled from "styled-components";

const ToggleWrapper = styled.div`
    width: 4rem;
    max-width: 4rem;
    height: 2.1rem;
    border-radius: 2rem;
    border: 1px solid #ccc;
    margin: auto 1rem;
    display: block;
    text-align: center;
    background-image: linear-gradient(to bottom, ${props => props.theme.firstColor}, ${props => props.theme.secondColor});
`;

const Notch = styled.div`
    height: 1.7rem;
    width: 1.7rem;
    border: 1px solid #ccc;
    margin-top: 1px;
    background: white;
    border-radius: 50%;
    transition: transform 0.1s linear;
    transform: translate(${props => props.isActive? '2rem' : '1px'});
`;

const Toggle = ({isActive, onToggle}) => {
    return (
        <ToggleWrapper onClick={onToggle}>
            <Notch isActive={isActive}/>
        </ToggleWrapper>       
    )
}

export {Toggle};
