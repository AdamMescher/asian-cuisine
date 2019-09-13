import React from 'react';
import {ThemeProvider } from 'styled-components';
import CombinationMark from '../CombinationMark/styled';

const theme = {
  fontStack: {
    sansSerifFontFamily: `'Lexend Deca', sans-serif'`,
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
      one: '#58a701',
      two: '',
      three: ''
    },
    secondary: {
      one: '#623453',
      two: '#5270e8',
    },
    tertiary: {
      one: '#ffc511',
      two: '#ffde7f',
      three: ''
    },
    quaternary: {
      one: '#fe7749'
    },
    quinary: {
      one: '#02c4a1',
      two: '#eeeffd',
      three: '#c7d4dc',
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
      one: '#fff3d2',
      two: '#fde7ad',
      three: '#ecf9ff',
      four: '#f7f9fb'
    }
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <main className="App">
        <section>
          <h1>IS THIS THING ON</h1>
        </section>
      </main>
    </ThemeProvider>
  );
}

export default App;