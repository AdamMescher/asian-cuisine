import React from 'react';
import './App.css';
import Button from './Components/Button';

function App() {
  return (
    <main className="App">
      <section>
        <h1>HELLO</h1>
        <Button text={'button label goes here'} style={{
          fontSize: '1.2em',
          border: 'none',
          color: 'white',
          bgColor: 'blue',
          hoverColor: 'red',
          hoverBgColor: 'white',
          hoverBorder: '2px solid red',
          height: '2.5rem'
        }}/>
      </section>
    </main>
  );
}

export default App;
