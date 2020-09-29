import React from "react";
import {
  Home,
  Navbar,
  New,
  NewsItem,
  Contact,
  Product,
  ProductItem,
  Bread,
  Cake,
  Cookie,
  Moon,
  MoonItem,
} from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Switch>
        <Route exact path="/product" component={Product} />
        <Route exact path="/product/bread" component={Bread} />
        <Route exact path="/product/cake" component={Cake} />
        <Route exact path="/product/cookie" component={Cookie} />
        <Route exact path="/product/:id" component={ProductItem} />
      </Switch>
      <Route exact path="/latest" component={New} />
      <Route path="/latest/:id" component={NewsItem} />
      <Route path="/contact" component={Contact} />
      <Route exact path="/moon" component={Moon} />
      <Route exact path="/moon/:id" component={MoonItem} />
    </Router>
  );
}

export default App;
