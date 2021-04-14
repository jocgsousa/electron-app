import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
// eslint-disable-next-line no-unused-vars
import Utils from './pages/Utils';

export default class Routes extends Component {
  state = {
    page: Home,
  };

  render() {
    const { page } = this.state;
    return (
      <Router>
        <Route component={page} />
      </Router>
    );
  }
}
