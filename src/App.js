import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Index from "./components/Index";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="" component={Index} />
          </Switch>
        </div>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
