import React, { Component } from 'react';
import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom';
import App from '../pages/App';
import Login from '../pages/Login';
import Landing from '../pages/Landing';

class Routes extends Component {
  componentDidMount() {
    // const stUser = sessionStorage.getItem("userLogged");
    // if(stUser){
    //   const user = JSON.parse(stUser);
    // }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/landing" />} />
          <Route path="/landing" component={Landing} />
          <Route path="/login" component={Login} />
          <Route exact path="/app/main" component={App} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
