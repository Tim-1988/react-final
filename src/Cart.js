import React, { Fragment } from 'react';
import "./Cart.css";
import { connect } from 'react-redux';
import { productQuantity, clearProduct } from './actions/productQuantity';
import iphone11 from './images/productimg/iphone11.jpg';
import iphone7 from './images/productimg/iphone7.jpg';
import galaxya71 from './images/productimg/galaxya71.jpg';
import galaxys20 from './images/productimg/galaxys20+.jpg';

function Cart({cartProps, productQuantity, clearProduct}) {
  console.log(cartProps);

  let productsInCart = [];

  Object.keys(cartProps.products).forEach( function(item) {
    console.log(item);
    console.log(cartProps.products[item].inCart);
    if(cartProps.products[item].inCart) {
      productsInCart.push(cartProps.products[item])
    }
    console.log(productsInCart);
  });

  //const productImages = [iphone11, iphone7, galaxya71, galaxys20] 
  const productImages = (product) => {
    if( product.tagName === 'iphone11') {
      return iphone11;
    }else if( product.tagName === 'iphone7') {
      return iphone7;
    }else if( product.tagName === 'galaxya71') {
      return galaxya71;
    }else if( product.tagName === 'galaxys20') {
      return galaxys20;
    }
  }

  productsInCart = productsInCart.map( (product, index) => {
    console.log("My product is");
    console.log(product);
    return (
      <Fragment key={index}>
        <div className="product"><ion-icon onClick={() => clearProduct(product.tagName)} name="close-circle"></ion-icon><img src={productImages(product)} />
          <span className="sm-hide">{product.name}</span>
        </div>
        <div className="price sm-hide">${product.price},00</div>
        <div className="quantity">
          <ion-icon onClick={() => productQuantity('decrease', product.tagName)} className="decrease" name="arrow-back-circle-outline"></ion-icon>
            <span>{product.numbers}</span>
          <ion-icon onClick={() => productQuantity('increase', product.tagName)} className="increase" name="arrow-forward-circle-outline"></ion-icon>
        </div>
        <div className="total">${product.numbers * product.price},00</div>
      </Fragment>
    )
  });

    return (
      <div className="container-products">
          <div className="product-header">
            <h5 className="product-title">PRODUCT</h5>
            <h5 className="price sm-hide">PRICE</h5>
            <h5 className="quantity">QUANTITY</h5>
            <h5 className="total">TOTAL</h5>
          </div>
          <div className="products">
            { productsInCart }
          </div>
          <div className="cartTotalContainer">
            <h4 className="cartTotalTitle">Cart Total</h4>
            <h4 className="cartTotal">{cartProps.cartCost},00</h4>
          </div>
      </div>
  );
}

const mapStateToProps = state => ({
  cartProps: state.cartState
});

export default connect(mapStateToProps, { productQuantity, clearProduct } )(Cart);