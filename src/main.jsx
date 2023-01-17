import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import { theme } from './Theme';
import { ThemeProvider } from 'styled-components';
import StylesWrapper from './styles/_StylesWrapper';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StylesWrapper />
      <App />
    </ThemeProvider> 
  </React.StrictMode>,
)
