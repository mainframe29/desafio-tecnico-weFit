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
    <div className="grid">
      <div className="tabela">
        {/* Cabeçalho - só visível em telas grandes */}
        <div className="header desktop-only">PRODUTO</div>
        <div className="header desktop-only">QTD</div>
        <div className="header">SUBTOTAL</div>
        <div className="header desktop-only"></div>

        {cartItems.map((item) => (
          <React.Fragment key={item.produto.id}>
            {/* Produto */}
            <div className="col-produto">
              <img src={item.produto.image} alt={item.produto.title} width="91px" />
              <div className="produto-info">
                <div className="titulo-preco">
                  <p>{item.produto.title}</p>
                  <p>R$ {item.produto.price.toFixed(2)}</p>
                </div>
                {/* Quantidade - no mobile fica logo abaixo */}
                <div className="col-qtd qtd-mobile">
                  <QtdButton produto={item.produto} />
                </div>
              </div>
            </div>

            {/* Quantidade - apenas desktop */}
            <div className="col-qtd desktop-only">
              <QtdButton produto={item.produto} />
            </div>

            {/* Subtotal */}
            <div className="col-subtotal">
              <span className="label-mobile">SUBTOTAL</span>
              R$ {(item.produto.price * item.quantidade).toFixed(2)}
            </div>

            {/* Deletar */}
            <div className="col-delete">
              <img
                src={DeleteButton}
                onClick={() => removeFromCart(item.produto.id)}
                alt="Remover"
              />
            </div>
          </React.Fragment>
        ))}
      </div>

      <div className="separador"></div>
      

      <div className="finalizar">
        <div className='botao-footer'>
          <button onClick={() => navigate('/compra-finalizada')}>FINALIZAR PEDIDO</button>
          <button className='botao-continuar' onClick={() => navigate('/')}>CONTINUAR COMPRANDO</button>
        </div>
        <div className="total">
          <label>TOTAL</label>
          <p>R$ {total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}

export default GridCarrinho
