import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../utils/theme';

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
