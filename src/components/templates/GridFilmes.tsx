import { useEffect, useState } from 'react'
import './GridFilmes.css'
import { getFilmes } from '../../services/filmeService';
import ListaVazia from './ListaVazia';
import MovieCard from '../Organisms/MovieCard';

interface Produto {
  id: number;
  title: string;
  price: number;
  image: string;
}

function GridFilmes() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    getFilmes().then(setProdutos);
  }, []);

  if (produtos.length === 0) {
    return <ListaVazia />; 
  }

  return (
    <div>
      <div className='container'>
          {produtos.map((produto) => (
              <div className='item'><MovieCard produto={produto}></MovieCard></div>
          ))}
      </div>
    </div>
  )
}

export default GridFilmes
