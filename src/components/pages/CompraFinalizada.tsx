import React, { useEffect } from 'react'
import './CompraFinalizada.css'
import Man from './../../assets/man.svg'
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

function CompraFinalizada() {
  const { clearCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    clearCart(); // Limpa o carrinho quando o componente monta
  }, []);
  return (
    <div className='CompraFinalizada'>
        <h2>Compra realizada com sucesso!</h2>
        <img className='man' src={Man}/>
        <button onClick={() => navigate('/')}>VOLTAR</button>      
    </div>
  )
}

export default CompraFinalizada
