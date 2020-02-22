import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.products;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          {/* can change padding of image here "p-5" or p-0 */}
          <div className="img-container p-0.8" onClick={() => console.log("You clciked me on img container")}>
            <Link to="/details">
              <img src={img} alt="product" className="card-img-top" />
            </Link>
            
          </div>
        </div>
      </ProductWrapper>
    )
  }
}

const ProductWrapper = styled.div`

`