import axios from 'axios';
import type { Produto } from '../models/Produto';


const API_URL = 'https://wefit-movies.vercel.app/api/movies';

export const getFilmes = async (): Promise<Produto[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data.products; 
  } catch (error) {
    console.error('Erro ao buscar filmes:', error);
    return [];
  }
};
