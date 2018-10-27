import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom'
import OverviewPage from './components/OverviewPage'
import OfficesPage from './components/OfficesPage'

import "../src/css/bootstrap.css"
import "../src/css/app.css"
import "../src/css/font-awesome.min.css"

class App extends Component {
  render() {
    return (
      <div >
        <Route exact path="/" component = {OverviewPage}/>
        <Route path="/companies/:companyId" component = {OfficesPage}/>
      </div>
    );
  }
}

export default withRouter(App);
