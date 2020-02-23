import React from 'react';
import CartItem from './CartItem';
import CartColumns from './CartColumns';

export default function CartList({ val }) {
  const { cart } = val;
  console.log(val, cart);
  
  return (
    <div className="container-fluid">
      {cart.map(item => {
        return <CartItem key={item.id} item={item} val={val} />;
      })}
    </div>
  );
}
