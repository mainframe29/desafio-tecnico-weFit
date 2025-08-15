import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Carrinho from './components/pages/Carrinho'
import Home from './components/pages/Home'
import Header from './components/templates/Header';
import CompraFinalizada from './components/pages/CompraFinalizada';
import { CartProvider } from './context/CartContext';

function App() {

  return (
    <>
      <CartProvider>
        <Router>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/compra-finalizada" element={<CompraFinalizada />} />
          </Routes>
        </Router>
      </CartProvider>
    </>
  )
}

export default App
