import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PokemonItem from '../../components/PokemonItem'
import PokemonLogo from '../../assets/images/pokemon.png'
import styles from './styles.module.css'
import api from '../../services/api';

export interface IPokemon {
  name: string
  url: string
}

interface IResponse {
  count: number
  next: string | null
  previous: number | null
  results: IPokemon[]
}

function Home() {
  const [pokemons, setPokemons] = useState<IPokemon[]>()

  
  useEffect(() => {
    const getAllPokemons = async () => {
      const {data} = await api.get<IResponse>('pokemon')
  
      setPokemons(data.results)
    }  
    
    getAllPokemons()
  }, [])

  return (
    <div className={styles.container}>
      <img src={PokemonLogo} alt='Pokemon logo' style={{width: '200px'}} />
      {pokemons ? 
      pokemons.map((pokemon) => (
      <Link key={pokemon.name} to={`/${pokemon.name}`}>
        <PokemonItem  name={pokemon.name} />
      </Link>
      )) 
      : <h1 className={styles.loading}>Carregando</h1>}
    </div>
  );
}

export default Home;
