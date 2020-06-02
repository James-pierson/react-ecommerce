import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Components/Navbar'
import Details from './Components/Details'
import Cart from './Components/Cart'
import ProductList from './Components/ProductList'
import Default from './Components/Details'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <ProductList />
      <Details />
      <Cart />
      <Default />
    </React.Fragment>
  );
}

export default App;
