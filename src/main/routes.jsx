import React from "react";
import {Router, Route, IndexRoute, Redirect, hashHistory} from 'react-router';
import Dashboard from "../dashboard/dashboard";
import BillingCycle from "../billingCycle/billingCycle";
import App from './app';

export default function Routes(props) {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Dashboard} />
        <Route path='billingCycles' component={BillingCycle} />
      </Route>
      <Redirect from='*' to='/' />
    </Router>
  )
}