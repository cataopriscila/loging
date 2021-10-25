import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

const largeStyles = ({large}) => {
    if(large) {
        return css`
            padding: 2rem 5rem;    
            border-radius: .3rem;
            font-size: 1.8rem;    
            box-shadow: 2px 2px 4px black;
            `; 
    } else {
        return css`
        padding: 1.2rem 3rem;    
        border-radius: .2rem;
        font-size: 1.2rem;
        box-shadow: 1px 1px 3px black;
        `;
    }

}

const Button = styled.button`
    color: white;
    background: ${props => props.secondary? props.theme.secondColor : props.theme.firstColor };
    font-weight: bold;
    width: 100%;
    ${largeStyles}    
    border: none;    
    cursor: pointer;
    white-space: none;

    &:disabled {
        background: ${props => props.theme.disabled.background};
        color: ${props => props.theme.disabled.color};
    }
`;

Button.propTypes = {
    large: PropTypes.bool,
    secondary: PropTypes.bool
}

export {Button};