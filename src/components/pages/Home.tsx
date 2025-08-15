import React from 'react'
import ListaVazia from '../templates/ListaVazia'
import MovieCard from '../Organisms/movieCard'
import GridFilmes from '../templates/GridFilmes'

const Home = () => {
  return (
    <div>
      {/* <ListaVazia></ListaVazia> */}
      <GridFilmes></GridFilmes>
    </div>
  )
}

export default Home
