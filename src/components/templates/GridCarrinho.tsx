import React from 'react'
import DeleteButton from './../../assets/delete.svg'
import QtdButton from '../molecules/QtdButton'
import './GridCarrinho.css'
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import ListaVazia from './ListaVazia';

function GridCarrinho() {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, total } = useCart();

  if (cartItems.length === 0) {
    return <ListaVazia />;
  }

  return (
    <div className="cart-container">
      {/* Layout para desktop */}
      <div className="cart-desktop">
        <div className="cart-header">
          <span>PRODUTO</span>
          <span>QTD</span>
          <span>SUBTOTAL</span>
          <span></span>
        </div>
        {cartItems.map((item) => (
          <div key={item.produto.id} className="cart-row">
            <div className="cart-product">
              <img src={item.produto.image} alt={item.produto.title} />
              <div>
                <p>{item.produto.title}</p>
                <p>R$ {item.produto.price.toFixed(2)}</p>
              </div>
            </div>
            <div className="cart-qty">
              <QtdButton produto={item.produto}/>
            </div>
            <div className="cart-subtotal">R$ {(item.produto.price * item.quantidade).toFixed(2)}</div>
            <img
                src={DeleteButton}
                onClick={() => removeFromCart(item.produto.id)}
                alt="Remover"
              />
          </div>
        ))}
        <div className="cart-footer">
          <div className='buttons-footer'>
          <button onClick={() => navigate('/compra-finalizada')}>FINALIZAR PEDIDO</button>
          <button className='btn-continuar' onClick={() => navigate('/')}>CONTINUAR COMPRANDO</button>
          </div>
          <span className="cart-total"><span className='label-total-desktop'>TOTAL</span> R$ {total.toFixed(2)}</span>
        </div>
      </div>

      {/* Layout para mobile */}
      <div className="cart-mobile">
        {cartItems.map((item) => (
          <div key={item.produto.id} className="cart-card">
            <div className="cart-card-info">
              <img src={item.produto.image} alt={item.produto.title} />
              <div>
                <p>{item.produto.title}</p>
                <p>R$ {item.produto.price.toFixed(2)}</p>
              </div>
              <img
                className='img-delete'
                src={DeleteButton}
                onClick={() => removeFromCart(item.produto.id)}
                alt="Remover"
              />
            </div>
            <div className="cart-card-actions">
              <div className="cart-qty">
                <QtdButton produto={item.produto}/>
              </div>
              <p>SUBTOTAL R$ {(item.produto.price * item.quantidade).toFixed(2)}</p>
            </div>
          </div>
        ))}
        <div className="cart-footer">
          <div className="cart-total-conteiner">
            <span className='label-total'>TOTAL</span>
            <span className="cart-total"> R$ {total.toFixed(2)}</span>
          </div>
          <button className='btn-continuar' onClick={() => navigate('/')}>CONTINUAR COMPRANDO</button>
          <button className='btn-finalizar' onClick={() => navigate('/compra-finalizada')}>FINALIZAR PEDIDO</button>
        </div>
      </div>
    </div>
  )
}

export default GridCarrinho
