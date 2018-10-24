import React, { Component } from "react";
import "./App.css";
import { BrowerRouter, Router } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import News from "./components/News";

class App extends Component {
  render() {
    return (
      <BrowerRouter>
        <div>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/news" component={News} exact />
        </div>
      </BrowerRouter>
    );
  }
}

export default App;
