import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Index from "./components/Index";
import Lyrics from "./components/Lyrics";

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
              <Route exact path="/" component={Index} />
              <Route exact path="/lyrics/track/:id" component={Lyrics} />
            </Switch>
          </div>
        </React.Fragment>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
