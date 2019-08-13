import React from 'react';
import './App.css';
import Button from './Components/Button';
import {ThemeProvider } from 'styled-components';
const theme = {
  fontStack: {
    sansSerifFontFamily: `'Lecend Deca', sans-serif`,
    lineHeight: '1.45',
    bodyFontSize: '16px',
    h1FontSize: '3.052em',
    h2FontSize: '2.441em',
    h3FontSize: '1.953em',
    h4FontSize: '1.563em',
    h5FontSize: '1.25em',
    smallFontSize: '0.8em'
  },
  colors: {
    primary: {
      one: '',
      two: '',
      three: ''
    },
    secondary: {
      one: '',
      two: '',
      three: ''
    },
    tertiary: {
      one: '',
      two: '',
      three: ''
    },
    darkNeutral: {
      one: '',
      two: '',
      three: '',
      four: '',
      five: '',
      six: ''
    },
    lightNeutral: {
      one: '',
      two: ''
    }


  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <main className="App">
        <section>
          <h1>HELLO</h1>
          <Button text={'button label goes here'}/>
        </section>
      </main>
    </ThemeProvider>
  );
}

export default App;