import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Navbar from './componets/Navbar';
import Footer from './componets/Footer';
import About from './pages/about';
import ShoppingList from './pages/Shoppinglist';
import Catalog from './pages/Catalog';
import Home from './pages/Home';
import Admin from './pages/Admin';
import GlobalProvider from "./context/GlobalProvider";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from "./pages/Cart";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>

          <Routes>
            <Route path="/" />
            <Route path='/home' element={<Home></Home>} />
            <Route path='/catalog' element={<Catalog></Catalog>} />
            <Route path='/about' element={<About></About>} />
            <Route path='/shoppinglist' element={<ShoppingList></ShoppingList>} />
            <Route path="/admin" element={<Admin></Admin>} />
            <Route path="/cart" element={<Cart />} />
          </Routes>

          <Footer></Footer>
        </div>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
