import './ListaVazia.css'
import Woman from './../../assets/group.svg'
import { useNavigate } from 'react-router-dom';

function ListaVazia() {
  const navigate = useNavigate();
  return (
    <div className='ListaVazia'>
        <h2>Parece que não há nada por aqui :(</h2>
        <img className='woman' src={Woman}/>
        <button onClick={() => navigate('/')}>Recarregar Página</button>      
    </div>
  )
}

export default ListaVazia
