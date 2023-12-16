import React from 'react';
import PokeDetail from './pokeDetail';
import "./component.css"
import pokeList from './pokelist.json'

function PokeList() {
    return (
        <div className='container'>
            <div className='title'>1000 Pokémons</div>
                <div className='grid'>
                    {pokeList.map((pokemon) => (
                        <PokeDetail key={pokemon.id} id={pokemon.id} name={pokemon.name}/> 
                    ))}
                </div>
        </div>
    )
}

export default PokeList;