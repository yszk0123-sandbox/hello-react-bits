import * as React from 'react';
import { wire } from './di';

function Title({ title }) {
  return <h1>{title}</h1>;
}

export default wire(Title, ['title'], title => ({ title }));
