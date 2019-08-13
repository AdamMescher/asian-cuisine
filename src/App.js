import React from 'react';
import './App.css';
import Button from './Components/Button';
import {ThemeProvider } from 'styled-components';
const theme = {
  fontStack: {},
  colors: {}
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
