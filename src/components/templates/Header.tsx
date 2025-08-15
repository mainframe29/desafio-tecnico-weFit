import React from 'react'
import cartLogo from './../../assets/carrinho.svg'
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Header.css'

function Header() {
    const navigate = useNavigate();
    const { cartItems } = useCart();


    const totalItens = cartItems.reduce((sum, item) => sum + item.quantidade, 0);
    return (
        <div className="header">
            <div className='title'>
            <h3>WeMovies</h3>
            </div>
            <div className='button-carrinho'>
            <div>
                <p className='title-carrinho'>Meu Carrinho</p>
                <p> {<span>{totalItens}</span>} {totalItens > 1 ? "itens" : "item" }</p>
            </div>
            <div>
                <img src={cartLogo} onClick={() => navigate('/carrinho')} />
            </div>
            </div>
        </div>
    )
}

export default Header
