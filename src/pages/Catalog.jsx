import { useEffect, useState } from "react";
import Product from "../componets/Product";
import "./Catalog.css";
import DataService from "../services/dataService";

function Catalog() {
    const [data, setData] = useState([]);

    async function loadCatalog() {
        let service = new DataService
        let cat = await service.getCatalog();
        setData(cat);
    }

    useEffect(function () {
        loadCatalog();
    }, []);

    return (
        <div className="catalog page">
            <h1>Our organic products</h1>

            {data.map(prod => (
                <Product key={prod._id} info={prod} />
            ))}
        </div>
    );
}

export default Catalog;