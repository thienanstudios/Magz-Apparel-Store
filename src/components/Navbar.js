import React, { Component } from 'react'
import { Link } from "react-router-dom";
// change logo image here vvv (top left corner logo)
import logo from '../magz3.jpg'
import styled from "styled-components"
import { BUttonContainer } from './Button';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expnd-sm bg-primary navbar-dark px-sm-5">
        {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
          Creative Commons (Attribution 3.0 Unported);
          https://www.iconfinder.com/Makoto_msk 
        */}
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-tem ml-5">
            <Link to="/" className="nav-link">
              products
        </Link>
          </li>
        </ul>
        <Link to="./cart" className="ml-auto">
          <BUttonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            my cart
          </BUttonContainer>
        </Link>
      </nav>
    );
  }
}

