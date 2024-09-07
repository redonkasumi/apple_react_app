import logo from './logo.svg';
import './App.css';
import Footer from "./component/Footer/Footer"
import Header from "./component/Header/Header"
import Productpage from './component/Pages/ProductPage'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React, { Component } from 'react';
import Main from "./component/Main/main"
import IPhone from "./component/Pages/IPhone"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/iphone" exact component={IPhone} />
            <Route path="/iphone/:pid" exact component={Productpage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
