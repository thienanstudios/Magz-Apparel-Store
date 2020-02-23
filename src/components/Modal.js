import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { BUttonContainer } from "./Button";
import { Link } from 'react-router-dom';

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(val) => {
          const { modalOpen, closeModal } = val;
          const { img, title, price } = val.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div id="modal" className="col-10 mx-auto col-md-7 col-lg-5 text-center text-capitalize p-5">
                      <h5> item added to the cart</h5>
                      <img src={img} className="img-fluid" alt="product" />
                      <h5>{title}</h5>
                      <h5 className="text-muted">price: ${price}</h5>
                      <Link to="/">
                        <BUttonContainer onClick={() => closeModal() }>
                          Continue Shopping
                        </BUttonContainer>
                      </Link>
                      <Link to="/cart">
                        <BUttonContainer cart onClick={() => closeModal() }>
                          Go To Cart
                        </BUttonContainer>
                      </Link>
                    </div>
                  </div>
                </div>

              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    )
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;