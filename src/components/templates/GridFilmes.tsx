import React, { useEffect, useState } from 'react'
import MovieCard from '../Organisms/movieCard'
import './GridFilmes.css'
import axios from 'axios';
import { getFilmes } from '../../services/filmeService';
import ListaVazia from './ListaVazia';

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
