import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Bar from './components/Bar';
import Main from './pages/Main';
import GlobalStyles from './styles/global';

export default class App extends Component {
  state = {
    page: Main,
  };

  render() {
    console.log(this.mainApp);
    const { page } = this.state;
    return (
      <>
        <Bar mainApp={this} />
        <Router>
          <Route component={page} />
        </Router>
        <GlobalStyles />
      </>
    );
  }
}
