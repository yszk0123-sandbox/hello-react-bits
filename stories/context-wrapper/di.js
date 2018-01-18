import React from 'react';

const hasOwnProps = (() => {
  const fn = Object.prototype.hasOwnProperty;

  return (obj, prop) => {
    return fn.call(obj, prop);
  };
})();

const dependencies = {};

export function register(key, dependency) {
  dependencies[key] = dependency;
}

export function fetch(key) {
  if (!hasOwnProps(dependencies, key)) {
    throw new Error(`${key} is not registered as dependency.`);
  }

  return dependencies[key];
}

export function wire(Component, deps, mapper) {
  return class Injector extends React.Component {
    constructor(props) {
      super(props);
      this._resolvedDependencies = mapper(...deps.map(fetch));
    }

    render() {
      return (
        <Component
          {...this.state}
          {...this.props}
          {...this._resolvedDependencies}
        />
      );
    }
  }
}
