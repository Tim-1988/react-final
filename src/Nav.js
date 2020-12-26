import React, { useEffect } from 'react';
import Logo from './Logo.png'
import { Link } from 'react-router-dom';
import './Nav.css';
import Cart from './Cart';
import { connect } from 'react-redux';
import { getNumbers } from './actions/getAction';


function Nav(props) {
    const navStyle = {
        color:'white'    
    };
  console.log(props);

    useEffect(() => {
      getNumbers();
    }, []);

  return (
    
    <nav>
        <Link style={navStyle} to="/">
        <img className="logo" src={Logo} alt="Logo"/>
        </Link>
        <ul className="nav-links">
            <div className="dropdown">
            <Link style={navStyle} to="/products">
            <li className="products">Products</li>
            </Link>
            <ul className="menu">
              <li>APPLE</li>
              <li>SAMSUNG</li>
              <li>XIAOMI</li>
              <li>SONY</li>
              <li>LAPTOPS</li>
              <li>ACCESSORIES</li>
            </ul>
            </div>
            <input type = "search" placeholder="Search product"/>
            <h4>Call Us: 777-77-77</h4>
            <Link style={navStyle} to="/about">
            <li>About</li>
            </Link>
            <Link style={navStyle} to="cart">
            <li className="cart"><a href="#">Cart <span>{props.cartProps.cartNumbers}</span></a></li>
            </Link>
        </ul>
    </nav>
  );
}

const mapStateToProps = state => ({
  cartProps: state.cartState
})

export default connect(mapStateToProps, { getNumbers })(Nav);