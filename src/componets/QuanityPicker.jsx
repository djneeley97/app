import { useState } from "react";
import "./QuanityPicker.css";

function QuanityPicker(props) {
    const [quantity, setQuantity] = useState(1);


    function increase() {
        let newVal = quantity + 1;
        setQuantity(newVal);
        props.onChange(newVal);
    }
    function deacrease() {
        let newVal = quantity - 1;
        if (newVal > 0) {
            setQuantity(newVal);
            props.onChange(newVal);
        }
    }


    return (
        <div className="qt-picker">
            <button className="minus" disabled={quantity == 1} onClick={deacrease}>-</button>
            <label>{quantity}</label>
            <button className="plus" onClick={increase}>+</button>
        </div>
    )
}

export default QuanityPicker;