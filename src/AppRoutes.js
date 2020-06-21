import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';

const AppRoutes = () => {
  return (
    <Switch>
      <Route 
        exact
        path="/"
        render={routeProps => <Redirect {...routeProps} to="/home" />}
      />
      <Route 
        path="/home"
        render={routeProps => <Home { ...routeProps} />}
      />
      <Route 
        path="/how-it-works"
        render={routeProps => <HowItWorks {...routeProps} />}
      />
      <Route 
        path="/contact"
        render={routeProps => <Contact {...routeProps} />}
      />
      <Route 
        path="/testimonials"
        render={routeProps => <Testimonials {...routeProps} />}
      />
    </Switch>
  );
};

export default AppRoutes;
