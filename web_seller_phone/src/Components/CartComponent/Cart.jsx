// Cart.js
import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cart, onRemove }) => {
    return (
        <div>
            <h2>Your Shopping Cart</h2>
            {cart.map(item => (
                <CartItem key={item.id} product={item} onRemove={onRemove} />
            ))}
        </div>
    );
};

export default Cart;
