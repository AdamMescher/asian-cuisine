import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../src/Components/Button';

storiesOf('Button', module)
    .add('Button small outline wireframe', () => <Button text={'hello'} size={'sm'} style={'outline'} color={'wf'}/>)
