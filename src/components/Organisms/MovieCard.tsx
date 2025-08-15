import AddCarrinho from './../../assets/addCarrinho.svg'
import './MovieCard.css'
import type { Produto } from '../../models/Produto';
import { useCart } from '../../context/CartContext';

interface Props {
  produto: Produto; 
}

function MovieCard({produto}:Props) {
  const { cartItems, addToCart } = useCart(); 
  const itemNoCarrinho = cartItems.find(item => item.produto.id === produto.id);
  const quantidade = itemNoCarrinho ? itemNoCarrinho.quantidade : 0;

  return (
    <div className='MovieCard'>
      <img className='MovieImg' src={produto.image} />
      <p className='MovieTitle'>{produto.title}</p>
      <p className='MoviePrice'> R$ {produto.price.toFixed(2)}</p>
      <button className={quantidade > 0 ? "MovieButton-success" : "MovieButton"}   onClick={() => addToCart(produto)} ><img src={AddCarrinho}/><span>{quantidade}</span> ADICIONAR AO CARRINHO</button>
    </div>
  )
}

export default MovieCard
