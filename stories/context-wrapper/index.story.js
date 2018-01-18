import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { register } from './di';
import Header from './Header';

register('title', 'React in patterns');

storiesOf('Context Wrapper', module).add('default', () => <Header />);
