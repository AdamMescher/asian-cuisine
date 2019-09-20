import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import Button from '../src/Components/Button';
import { theme } from '../src/utils/theme';
import { generateButtonColor, generateButtonSize, generateButtonStyle } from '../src/utils/buttonGenerators';



storiesOf('Button', module)
    .add('Button small outline wireframe', () => {
        return (
            <ThemeProvider theme={theme}>
                <Button
                    text={'test button'}
                    size={generateButtonColor('fill')}
                    style={generateButtonSize('sm')}
                    color={generateButtonStyle('wf')} />
            </ThemeProvider>
        )
    });