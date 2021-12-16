import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/ws_pages/Home";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './components/ws_pages/Shop';
import Cart from './components/ws_pages/Cart';
import SingleProduct from './components/ws_pages/SingleProduct';
import Apropos from './components/ws_pages/Apropos';
import Navbar from './components/ws_components/Navbar';
import Footer from './components/ws_components/Footer';
import Announcements from './components/ws_components/Announcements';
import Register from './components/ws_pages/Register';
import Contact from './components/ws_pages/Contact';

function App() {
  return (
    <>
      <Router>
        <Announcements />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boutique" element={<Shop />} />
          <Route path="/mon-panier" element={<Cart />} />
          <Route path="/un-produit" element={<SingleProduct />} />
          <Route path="/a-propos" element={<Apropos />} />
          <Route path="/creer-un-compte" element={<Register/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
