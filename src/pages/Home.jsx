import './Home.css';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div className='home page'>
            <h1>Welcome to The Organic Store</h1>
            <div>
                <img src="./images/organic store.png" alt="" />
            </div>
            <Link className="" to="/Catalog">
                <h3>Check out our amazing catalog</h3>
            </Link>
        </div>
    );
}

export default Home;