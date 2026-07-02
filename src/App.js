import "./App.css";
import NavBar from "./Components/NavBar";

import React, { Component } from "react";
import News from "./Components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  apikey= process.env.REACT_APP_NEWS_API
  render() {
    return (
      <div>
        <Router>
        <NavBar />
        <Routes>
          <Route exact path="/"  element={<News  apikey={this.apikey} key="general" country="us" category="general" />}/>
          <Route exact path="/general"  element={<News apikey={this.apikey} key="general" country="us" category="general" />}/>
          <Route exact path="/business"  element={<News apikey={this.apikey} key="business" country="us" category="business" />}/>
          <Route exact path="/sports"  element={<News apikey={this.apikey} key="sports" country="us" category="sports" />}/>
          <Route exact path="/science" element={<News apikey={this.apikey} key="science" country="us" category="science" />}/>
          <Route exact path="/entertainment"  element={<News apikey={this.apikey} key="entertainment" country="us" category="entertainment" />}/>
          <Route exact path="/technology" element={<News apikey={this.apikey} key="technology"  country="us" category="technology" />}/>
          <Route exact path="/health"  element={<News apikey={this.apikey} key="health" country="us" category="health" />}/>
        </Routes>
        </Router>
      </div>
    );
  }
}
