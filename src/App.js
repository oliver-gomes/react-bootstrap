import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import News from "./components/News";
import CustomNavbar from "./components/CustomNavbar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <CustomNavbar />
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/news" component={News} exact />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
