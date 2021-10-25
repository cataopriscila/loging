import React, {useState} from 'react';
import styled from 'styled-components';
import { Input } from './Input';

const PasswordInputWrapper = styled.div`
    display: flex;

    +div{      
      background-color: white;
      border-radius: .2rem;
      padding: .6rem;
      display: inline-block;
    } 
`;

const PasswordInputStyled = styled(Input).attrs(()=> ({
    type: 'password',
    placeholder: 'Password'
}))`
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        width: 80%;
    `;

const ToggleButton = styled.div`    
    background-color: ${props => props.theme.firstColor};
    width: 20%;
    height: 4rem;
    border: 1px solid #ccc;
    box-sizing: border-box;
    font-size: .8em; 
     
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem;
    border-left: 0;
    border-top-right-radius: 0.4rem;
    border-bottom-right-radius: 0.4rem;
    cursor: pointer;
    user-select: none;  
    color: ${props => props.theme.fourthColor};

`;

const PasswordInput = (props) => {
    const [showPassword, setShowPassword] = useState(false);   

    return (
        <>
        <PasswordInputWrapper>
            <PasswordInputStyled {...props}/>
            <ToggleButton
            onClick={() => setShowPassword(s => !s)}
            >
            {showPassword ? 'Hide' : 'Show'}
            </ToggleButton>
        </PasswordInputWrapper>
        {showPassword&& 
        <div>
            {props.value}            
        </div>
        }
             
                                         
        </>
    );
}

export {PasswordInput} ;
