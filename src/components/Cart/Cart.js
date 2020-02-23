import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../context';



export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {val => {
            const { cart } = val;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="" title="cart" />
                  <CartColumns />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    )
  }
}
