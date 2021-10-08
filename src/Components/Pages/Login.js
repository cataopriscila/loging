
import React, {useState, useEffect } from 'react';
import { PageLayout, Input, PasswordInput, Button, Spinner } from 'Components/Common';
import styled from 'styled-components';

const Form = styled.form`
    width: 100%;
    max-width: 40rem;    
    background: none;
    border: 1px solid ${props => props.theme.secondColor};
    padding: 2.8rem;
    box-sizing: border-box;
    color: black;
    border-radius: 0.4rem;

    .alt-text{
        text-align: center;
        font-weight: bold;
        font-size: 1.3rem;
        margin: 1rem 0;
        color: ${props => props.theme.fontColor}
    }

    >${Button}:first-of-type{
        margin-top: 4rem;
    }
    
`; 

let timeOut;

const Login = () => {
    const [formFields, setFormFields] = useState({username: '', password: ''});
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {               
        setFormFields(s => ({
            ...s,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        timeOut = setTimeout(() => setLoading(false), 2000);        
    }

    useEffect(() => {
        return () => {
            if(timeOut) {
               return clearTimeout(timeOut);
            }
        }
    },[])

    return (
        <PageLayout>
            <h2>Login</h2>            
            <Form onSubmit={handleSubmit}>
                {loading? <Spinner/> :                
                <>                
                <Input
                 name="username"
                 type="text" 
                 placeholder="Name"
                 value={formFields.username}
                 onChange={handleInputChange} />
                <PasswordInput 
                 name="password"                  
                 value={formFields.password}
                 onChange={handleInputChange}    
                 />
                 </>
                 }
                 <Button type='submit' disabled={loading}>
                 {loading? 'Loading...':'Login'}
                 </Button>
                 {!loading && 
                 <>
                 <div className="alt-text"
                 >or
                 </div>
                 <Button secondary type='button'>
                     Register
                 </Button>  
                 </> 
                 }              
            </Form>
        </PageLayout>
    );
}

export default Login;

