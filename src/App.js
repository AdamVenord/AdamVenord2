import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Coding from './components/Coding';
import Contact from './components/Contact';
import Music from './components/Music';
import Photography from './components/Photography';
import Resume from './components/Resume';
import Missing from './components/Missing';

const App = () => (
  <Fragment>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Coding" component={Coding} />
      <Route exact path="/Contact" component={Contact} />
      <Route exact path="/Music" component={Music} />
      <Route exact path="/Photography" component={Photography} />
      <Route exact path="/Resume" component={Resume} />
      <Route component={Missing} />
    </Switch>
  </Fragment>
);

export default App;
