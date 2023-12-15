import React, { useState, useEffect } from 'react';

function PokeList() {

    const [pokemonList, setPokemonList] = useState([]);
    useEffect(() => {
        const fetchPokemonList = async () => {
          try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            setPokemonList(data.results);
          } catch (error) {
            console.error('Error fetching Pokemon list:', error);
          }
        };
    
        fetchPokemonList();
      }, []);

    return (
        <div>
            <h1>Pokemon List</h1>
            <ul>
                {pokemonList.map((pokemon) => (
                <li key={pokemon.name}>{pokemon.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default PokeList;