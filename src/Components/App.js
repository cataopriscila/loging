import React, { useState } from "react";
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "Components/Pages/Login";
import Blog from "Components/Pages/Blog";
import FirstTheme from "Themes/FirstTheme";
import SecondTheme from "Themes/SecondTheme";
import DarkTheme from "Themes/DarkTheme";


const GlobalStyle = createGlobalStyle` 
  html{
    font-size: 8px;    
  }

  @media(min-width: 768px){
      html {
       font-size: 10px; 
      }      
    }

  body{    
    min-height: 100vh;           
    margin: 0;
    color: ${props => props.theme.fontColor};
    background-color: ${props => props.theme.thirdColor};
    font-size: 1.6em;
    font-family: 'Lora', serif;     
  }
`;


function App() {
  const [theme, setTheme] = useState(FirstTheme);

  return (
    <>
    <ThemeProvider theme={{...theme, toSetTheme: (e) => {
        if(e.target.name === 'checkbutton' && e.target.checked){
          setTheme(SecondTheme);
        } else {
          setTheme(s => s.id === 'first' ? DarkTheme : FirstTheme);
        }
        
    }}}>
      <GlobalStyle/>    
      <BrowserRouter>
        <Switch>        
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Blog/>
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>    
    </>
  );
}

export default App;
