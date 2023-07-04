import React from "react";

const CartContext = React.createContext({
    items: [],
    amount: 0,
    addTocart: () => {}
    
});

export default CartContext