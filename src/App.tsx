import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Productos from './pages/Productos'
import Conatcto from './pages/Contacto'
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/contacto" element={<Conatcto />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;