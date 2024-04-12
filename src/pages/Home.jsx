import './Home.css';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div className='home page'>
            <h1>The Organic Store</h1>
            <div className='home-img'>
                <img src="./images/organicstore.jpg" alt="" />
            </div>
            <Link className="btn" to="/Catalog">
                <h3>Check out our amazing catalog</h3>
            </Link>
        </div>
    );
}

export default Home;