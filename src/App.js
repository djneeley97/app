import './App.css';
import Navbar from './componets/Navbar';
import Footer from './componets/Footer';
import Catalog from './pages/Catalog';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Catalog></Catalog>

      <Footer></Footer>
    </div>
  );
}

export default App;
