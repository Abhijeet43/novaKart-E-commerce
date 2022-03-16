import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>NovaKart - an all in one store for all your needs</p>
      </div>
      <div className="footer-nav">
        <ul>
          <li className="footer-item">
            <a className="footer-link" href="../landing-page/landing-page.html"
              >Home</a
            >
          </li>
          <li className="footer-item">
            <a className="footer-link" href="../all-products/all-products.html"
              >Products</a
            >
          </li>
          <li className="footer-item">
            <a className="footer-link" href="#">About</a>
          </li>
        </ul>
      </div>
      <div className="footer-nav">
        <ul>
          <li className="footer-item">
            <a className="footer-link" href="../cart/cart.html">My Cart</a>
          </li>
          <li className="footer-item">
            <a className="footer-link" href="../wishlist/wishlist.html"
              >My Wishlist</a
            >
          </li>
          <li className="footer-item">
            <a className="footer-link" href="#">Settings</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export { Footer }