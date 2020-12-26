import React, { useState } from 'react';
import './App.css';
import './Products.css';
import './Nav.js'
import Cart from './Cart';
import iphone11 from './images/productimg/iphone11.jpg';
import iphone7 from './images/productimg/iphone7.jpg';
import galaxya71 from './images/productimg/galaxya71.jpg';
import galaxys20 from './images/productimg/galaxys20+.jpg';
import { connect } from 'react-redux';
import { addCart } from './actions/addAction';


const Products = (props) => {
  console.log(props);

  return(
    <div className="container">
      <div className="image">
        <img src={iphone11} alt="iPhone 11" />
        <h3>Apple iPhone 11</h3>
        <h3>$900,00</h3>
        <a onClick={() => props.addCart('iphone11')} className="addToCart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={iphone7} alt="iPhone 7" />
        <h3>Apple iPhone 7</h3>
        <h3>$500,00</h3>
        <a onClick={() => props.addCart('iphone7')} className="addToCart2" href="#">Add to Cart</a>
      </div>
        <div className="image">
        <img src={galaxya71} alt="galaxy a71" />
        <h3>Samsung Galaxy A71</h3>
        <h3>$300,00</h3>
        <a onClick={() => props.addCart('galaxyA71')} className="addToCart3" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={galaxys20} alt="galaxy s20" />
        <h3>Samsung Galaxy S20 plus</h3>
        <h3>$850,00</h3>
        <a onClick={() => props.addCart('galaxyS20')} className="addToCart4" href="#">Add to Cart</a>
      </div>
    </div>
  )
}


export default connect(null, { addCart })(Products);
