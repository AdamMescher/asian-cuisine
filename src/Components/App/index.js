import React from 'react';
import { ThemeProvider } from 'styled-components';
import StyledApp from './styled';
import { theme } from '../../utils/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <section>
          <h1>IS THIS THING ON</h1>
        </section>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
