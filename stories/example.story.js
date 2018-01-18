import * as React from 'react';
import { storiesOf } from '@storybook/react';

function Title({ title }) {
  return <h1>{title}</h1>;
}

storiesOf('Example', module).add('default', () => (
  <Title title="Hello, world" />
));
