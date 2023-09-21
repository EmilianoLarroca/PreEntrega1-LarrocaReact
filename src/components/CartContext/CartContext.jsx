import React, { createContext } from 'react';


export const CartContext = createContext();

export const CartComponentContext = ({children}) => {

    const [carrito, setCarrito] = useState([])

    return <CartContext.Provider value={{}}>
        {children}
            </CartContext.Provider>
}

export default CartContext