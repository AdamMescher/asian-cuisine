import React from 'react';
import { ThemeProvider } from 'styled-components';

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
