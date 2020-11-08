import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './App';
import NavBar from "../common/components/NavBar";

// Use something like react-router-dom to manage multiple pages/routes
const Routes = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/about" exact>
          <>
            <h2>About Us</h2>
            <Home />
          </>
        </Route>
        <Route path="/contact" exact>
          <>
            <h2>Contact Us</h2>
            <Home />
          </>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}
export default Routes;
