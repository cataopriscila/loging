import React, { useState, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Link as ReactRouterDomLink, useLocation } from 'react-router-dom';
import { Toggle } from '.';

const HeaderWrapper = styled.header`  
    height: ${props => props.open? '18rem' : '6rem'};    
    width: 100%;
    position: fixed;
    top: 0;
    box-sizing: border-box;
    display: flex;    
    padding: 0 1.5rem;    
    background-image: linear-gradient(to right,${props => props.theme.secondColor}, ${props => props.theme.firstColor});  
    border-radius: 0 0 .6rem .6rem;
    box-shadow: 1px 1px 3px grey;  
    
    @media(min-width: 768px) {       
    height: 6rem;
    }  

`;  

const Menu = styled.nav`
    display: ${props => props.open? 'block' : 'none'};    
    position: absolute;    
    width: 100%;     
    height: 6rem;
    top: 3rem;    
    left: 0;    
    padding: 1rem;
    box-sizing: border-box;     
    

    @media(min-width: 768px) {       
    display: flex;
    align-items: center; 
    gap: 1rem;   
    background: none;
    left: initial;
    top: .3rem;
    margin: auto 0 auto auto;
    border-bottom: none;
    position: relative;
    width: initial;
    
    }
`;

const Link = ({isActive, children, ...props}) => {
    return (
        <ReactRouterDomLink {...props}>
        {children}
        </ReactRouterDomLink>
    )
}

const StyledLink = styled(Link)`
    padding: 0.4rem .8rem;
    display: block;  
    width: 30%;
    text-align: center;
    text-decoration: none; 
    box-sizing: border-box;       
    margin: 0 auto 1.5rem auto;    
    border-bottom: 1px solid ${props => props.theme.fourthColor} ;
    color: ${props => props.theme.fourthColor};
    font-weight: ${props => props.isActive? 'bold' : 'normal'}; 
    
    @media(min-width: 768px) {        
        border-bottom: none;             

    }   
`;

const MobileMenuIcon = styled.div`
    margin: 1rem 0 auto auto;
    width: 2.5rem;
    min-width: 2.5rem;
    padding: .5rem;

    >div {
        height: .25rem;
        background: ${props => props.theme.thirdColor};
        margin: .5rem 0;
        width: 100%;
    }

    @media(min-width: 768px){
        display: none;
    }

`;

const RadioButton = styled.input`  
    align-self: center; 
    display: none;   
    
    ~label {
        display: none; 
        font-size: 1.2rem;        
        align-self: center;
        transform: rotate(-30deg);        
    }

    @media(min-width: 768px){
        display: flex;

        ~label {
            display: flex;
        }
    }
    
`;

const Header = () => {
    const { pathname } = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);   
    const { id, toSetTheme } = useContext(ThemeContext); 

    return (
        <>
        <HeaderWrapper open={menuOpen}>
            <MobileMenuIcon onClick={() => setMenuOpen(s=> !s)}>
                <div />
                <div />
                <div />
            </MobileMenuIcon> 
            <RadioButton type="checkbox" selected onChange={toSetTheme} name='checkbutton'/>
            <label htmlFor='checkbutton'> Pink me!</label>           
            <Menu open={menuOpen}>                
                <StyledLink to="/" isActive= {pathname === '/'}>Blog</StyledLink>
                <StyledLink to="/login" isActive= {pathname === '/login'}>Login</StyledLink>
                <Toggle isActive={id === 'dark'} onToggle={toSetTheme}/>                
            </Menu>             
        </HeaderWrapper>
            
        </>
    );
}

export {Header};
