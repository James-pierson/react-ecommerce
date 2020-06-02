import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Components/Navbar'
import Details from './Components/Details'
import Cart from './Components/Cart'
import ProductList from './Components/ProductList'
import Default from './Components/Default'

class App extends Component {
  return() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/" component={ProductList}/>
          <Route path="/details" component={Details}/>
          <Route path="/cart" component={Cart}/>
          <Route component={Default}/>
        </Switch>
        <ProductList />
        <Details />
        <Cart />
        <Default />
      </React.Fragment>
    )
  }
}

export default App;
