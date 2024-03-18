import "./Product.css";
import QuanityPicker from "./QuanityPicker";

function Product(props) {
    return (
        <div className="product">
            <img src="https://picsum.photos/200" />
            <h6>{props.info.title}</h6>
            <label>${props.info.price}/lb</label>

            <QuanityPicker></QuanityPicker>
        </div>
    );
}

export default Product;
