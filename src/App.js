import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Index from "./components/Index";

import { Provider } from "./context";

import "./App.css";

function App() {
  return (
    <Provider>
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
    </Provider>
  );
}

export default App;
