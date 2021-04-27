import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Missing from './components/Missing';

const App = () => (
  <Fragment>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={Missing} />
    </Switch>
  </Fragment>
);

export default App;
