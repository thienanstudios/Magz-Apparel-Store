import React, { Component } from 'react'
import Product from "./Product";
import Title from './Title';
import { ProductConsumer } from "../context";

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="Magz" title="Studios" />

            <div className="row">
              <ProductConsumer>
                {val => {
                  return val.products.map(product => {
                    return <Product key={product.id} products={product} />;
                  })
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}