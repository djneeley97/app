import Product from "../componets/Product";
import "./Catalog.css";

function Catalog() {

    const data = [
        {
            title: "Tomatoes",
            price: 3.60,
            category: "Fruit",
            image: "tomatoes.jpg",
            _id: "0"
        },
        {
            title: "Oranges",
            price: 1.00,
            category: "Fruit",
            image: "oranges.png",
            _id: "1"
        },
        {
            title: "Eggs",
            price: 2.09,
            category: "",
            image: "eggs.jpg",
            _id: "2"
        },
        {
            title: "Strawberries",
            price: 2.51,
            category: "Fruit",
            image: "strawberries.jpeg",
            _id: "3"
        },
        {
            title: "Bananas",
            price: 0.63,
            category: "Fruit",
            image: "bananas.jpg",
            _id: "4"
        },
        {
            title: "Cheese",
            price: 5.55,
            category: "Fruit",
            image: "cheese.jpg",
            _id: "5"
        },
        {
            title: "Coffee",
            price: 6.09,
            category: "Fruit",
            image: "coffee.jpg",
            _id: "6"
        }
    ];

    return (
        <div className="catalog page">
            <h1>Our amazing catalog</h1>

            {data.map(prod => <Product info={prod} />)}
        </div>
    )
};

export default Catalog;