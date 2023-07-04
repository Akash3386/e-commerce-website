import React, { useState } from "react";

import CartContext from "./CartContext";

const CartProvider = (props) => {

    const [cartItem,setCartItem] = useState([])

    const [amount, setAmount] = useState(0)


    const addToCartt = (product) => {
        console.log(product)
        console.log(amount)
        setCartItem(prev => [...prev,product])
        setAmount(amount => amount+1)

    }



    return (
        <>
        <CartContext.Provider value={{
                items: cartItem,
                amount: amount,
                addToCart: addToCartt
        }}>{props.children}</CartContext.Provider>
        </>
    )
}

export default CartProvider