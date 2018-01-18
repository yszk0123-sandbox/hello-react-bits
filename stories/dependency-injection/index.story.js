import * as React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';

function Title({ title }) {
  return <h1>{title}</h1>;
}

function Header() {
  return (
    <header>
      <Inject>{title => <Title title={title} />}</Inject>
      <Title />
    </header>
  );
}

class Inject extends React.Component {
  static contextTypes = {
    title: PropTypes.string,
  };

  render() {
    const { title } = this.context;
    const { children } = this.props;

    return children(title);
  }
}

class App extends React.Component {
  static childContextTypes = {
    title: PropTypes.string,
  };

  getChildContext() {
    return {
      title: 'React in patterns',
    };
  }

  render() {
    const { children } = this.props;

    return <React.Fragment>{children}</React.Fragment>;
  }
}

storiesOf('Dependency Injection', module).add('default', () => (
  <App>
    <Header />
  </App>
));
