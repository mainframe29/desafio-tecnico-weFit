import React, { useMemo, useState } from 'react'
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
    <div className="grid">
      <div className="tabela">
        {/* Cabeçalho */}
        <div>PRODUTO</div>
        <div>QTD</div>
        <div>SUBTOTAL</div>
        <div></div>

        {/* Linhas */}
        {cartItems.map((item) => (
          <React.Fragment key={item.produto.id}>
            {/* Coluna 1 - Produto */}
            <div className="col-produto">
              <img src={item.produto.image} alt={item.produto.title} width="91px" />
              <div>
                <p>{item.produto.title}</p>
                <p>R$ {item.produto.price.toFixed(2)}</p>
              </div>
            </div>

            {/* Coluna 2 - Quantidade */}
            <div className="col-qtd">
              <QtdButton produto= {item.produto} />
            </div>

            {/* Coluna 3 - Subtotal */}
            <div className="col-subtotal">
              R$ {(item.produto.price * item.quantidade).toFixed(2)}
            </div>

            {/* Coluna 4 - Botão deletar */}
            <div className="col-delete">
              <img src={DeleteButton} onClick={() => removeFromCart(item.produto.id)} alt="Remover" />
            </div>
          </React.Fragment>
        ))}
      </div>

      <div className="separador"></div>

      <div className="finalizar">
        <button onClick={() => navigate('/compra-finalizada')}>FINALIZAR PEDIDO</button>
        <div className="total">
          <label>TOTAL</label>
          <p>R$ {total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}

export default GridCarrinho
