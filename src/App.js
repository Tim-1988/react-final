import React from 'react';
import './App.css';
import Home from './Home';
import Nav from './Nav';
import About from './About';
import Cart from './Cart';
import Products from './Products';
import Bottom from './bottom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.js';


function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
      <Nav />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/about" component={About} />
      <Route path="/cart" component={Cart} />
      </Switch>
      <Bottom />
    </div>
    </Router> 
    </Provider> 
  );
}



export default App;
