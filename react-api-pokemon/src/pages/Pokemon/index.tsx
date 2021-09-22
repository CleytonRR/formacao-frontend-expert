import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import { IPokemon as IPokemonInfo } from '../Home'
import style from './styles.module.css'

interface IParams {
    pokemon: string
}

interface IPokemon {
    height: number
    weight: number
    name: string
    species: IPokemonInfo
    base_experience: number
    types: {type: {name: string}}[]
    abilities: {ability: {name: string}}[]
    sprites: {other: {'official-artwork': {front_default: string}}}
}

const Pokemon: React.FC = () => {
    const {pokemon: pokemonName} = useParams<IParams>()
     
    const [pokemon, setPokemon] = useState<IPokemon>()

    useEffect(() => {
        const getPokemonInfo = async () => {
            const {data} = await api.get<IPokemon>(`pokemon/${pokemonName}`)

            setPokemon(data)
        }

        getPokemonInfo()
    }, [pokemonName])

    return (
        <div className={style.container}>
        <h1 className={style.title}>{pokemon?.name}</h1>
        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt={pokemon?.name} />

        <h2 className={style.card}>Altura: {pokemon?.height}</h2>
        <h2 className={style.card}>Peso: {pokemon?.weight}</h2>
        <h2 className={style.card}>Tipos: {pokemon?.types.map((type) => type.type.name).join(', ')}</h2>
        <h2 className={style.card}>Habilidades: {pokemon?.abilities.map((ability) => ability.ability.name).join(', ')}</h2>
        
        <Link to="/">
        <button>Voltar</button>
        </Link>

        </div>
    )
}

export default Pokemon