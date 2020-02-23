import React, { Component } from 'react';
import { ProductConcumer, ProductConsumer } from "../context";
import { Link } from 'react-router-dom';
import { BUttonContainer } from './Button';



export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(val) => {
          const {id, company, img, info, price, title, inCart} = val.detailProduct;
          return (
            <div className="container py-5">
              {/* title */} 
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>
                    {/* {title} */}
                    MAGZ
                  </h1>
                </div>
              </div>
              {/* product info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="product"/>
                </div>
                {/* product text */}
                <div className="col-10 mx-auto col-md-6 my-3 ">
                  <h2>{title} </h2>
                  <h4 className="text-title  text=muted mt-3 mb-2">
                    {/*made by : */}<span className="text-uppercase">
                      {company}
                    </span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      Price : <span>
                        $
                      </span>
                      {price}
                    </strong>
                  </h4>
                  <p className ="font-weigh-bold mt-3 mb-0">
                    history of product 
                  </p>
                  <p className="text-muted lead">
                    {info}
                  </p>
                  {/* buttons */}
                  <div>
                    <Link to="/">
                      <BUttonContainer>
                        Back
                      </BUttonContainer>
                    </Link>
                    <BUttonContainer 
                    cart
                    disabled = {inCart ? true : false}
                    onClick={()=> {
                      val.addToCart(id);
                      val.openModal(id);
                    }}
                    >
                      {inCart ? 'in cart' : "add to cart"}
                    </BUttonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    )
  }
}
