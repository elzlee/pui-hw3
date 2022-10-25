// Create a React component for the homepage here in index.js

import React, { Component } from 'react';
import '../../index.css';
import ProductCard from './productCard';


class HomePage extends Component {
  render() {
    return (
      <div className="homepage-container">
        <header>
          <div className="header-left">
            <img id="logo-img" src="pui-hw3/assets/logo-01.svg" alt="bunbun bake shop logo"/>
          </div>

          <div className="header-right">
            <div className="navbar"> 
              <a className="selected navtab" href="#">PRODUCTS</a>
              <a href="index.html" className="navtab">CART</a>  
             
              <div id="cart-summary">
                <p id="line1">0 items</p>
                <p id="line2">Total: $0.00</p>
              </div>
            </div>

            <div id="line"> <hr/> </div>

            <div id="pagetitle">
              <h1>Our hand-made cinnamon rolls</h1>
            </div>
          </div>

        </header>

        <div id="productCardList">
          <div className="listing-row">
            <ProductCard 
              imageURL="pui-hw3/assets/original-cinnamon-roll.jpg" 
              productName="Original Cinnamon Roll" 
              productPrice="2.49" />
            <ProductCard 
              imageURL="pui-hw3/assets/apple-cinnamon-roll.jpg" 
              productName="Apple Cinnamon Roll" 
              productPrice="2.49" />
            <ProductCard 
              imageURL="pui-hw3/assets/raisin-cinnamon-roll.jpg" 
              productName="Raisin Cinnamon Roll" 
              productPrice="2.49" />
          </div>
          <div className="listing-row">
            <ProductCard 
              imageURL="pui-hw3/assets/walnut-cinnamon-roll.jpg" 
              productName="Walnut Cinnamon Roll" 
              productPrice="2.49" />
            <ProductCard 
              imageURL="pui-hw3/assets/double-chocolate-cinnamon-roll.jpg" 
              productName="Double Chocolate  Roll" 
              productPrice="2.49" />
            <ProductCard 
              imageURL="pui-hw3/assets/strawberry-cinnamon-roll.jpg" 
              productName="Strawberry Cinnamon Roll" 
              productPrice="2.49" />
          </div>
          
        </div>
      </div>
  
    );
  }
}

export default HomePage