import { createContext } from "react";

/**
 * context is an interface / definition of the data
 * should not have implementations
 * 
 */

const DataContext = createContext({
    cart: [],
    addProductToCart: () => { },
    removeProductFromCart: () => { }
});

export default DataContext;