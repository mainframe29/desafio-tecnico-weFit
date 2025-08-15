import React, { useState } from "react";
import "./QtdButton.css";
import Somar from "./../../assets/addButton.svg"
import Subtrair from "./../../assets/minusButton.svg"
import { useCart } from "../../context/CartContext";
import type { Produto } from "../../models/Produto";
interface Props {
  produto: Produto;
}

const QtdButton = ({ produto }: Props) => {
  const { cartItems, addToCart, removeFromCart, removeFromCartPartial } = useCart();

  // Puxa a quantidade atual do item no carrinho
  const itemNoCarrinho = cartItems.find(item => item.produto.id === produto.id);
  const quantidade = itemNoCarrinho ? itemNoCarrinho.quantidade : 0;

  const decrementar = () => {
    if (quantidade > 1) {
      // Atualiza a quantidade subtraindo 1
      removeFromCartPartial(produto.id);
    } else if (quantidade === 1) {
      // Remove o item do carrinho
      removeFromCart(produto.id);
    }
  };

  return (
    <div className="contador">
      <img src={Subtrair} onClick={decrementar}/>
      <input
        type="number"
        className="input-quantidade"
        value={quantidade}
      />
      <img src={Somar} onClick={() => addToCart(produto)} />
    </div>
  );
};

export default QtdButton;
