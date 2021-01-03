import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Error from "./components/Error";

const App = () => {
  return (
    <div>
      <button className="button1">
        <Link className="link" to="/">
          Home
        </Link>
      </button>
      <button className="button2">
        <Link className="link" to="/about">
          About
        </Link>
      </button>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
