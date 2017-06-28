import React from 'react'
import { Router, Route } from 'react-router-dom';
import history from './history'
import { MainContainer } from '../containers'

const routes = (
  <Router history={history}>
    <Route path='/' component={MainContainer} />
  </Router>
);

export default routes