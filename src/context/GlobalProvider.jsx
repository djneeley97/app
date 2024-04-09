import { useState } from "react";
import DataContext from "./dataContext";

function GlobalProvider(props) {
    const [cart, setCart] = useState([]);

    function addProductToCart(prod) {
        var copy = [...cart];
        copy.push(prod);
        setCart(copy);
    }

    function removeProductToCart() { }

    return (
        <DataContext.Provider value={{
            cart: cart,
            addProductToCart: addProductToCart,
            removeProductToCart: removeProductToCart,
        }}>

            {props.children}
        </DataContext.Provider>
    )
}

export default GlobalProvider;