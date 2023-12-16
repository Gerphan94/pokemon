import React, { useState } from 'react';
import PokeDetail from './pokeDetail';
import "./component.css"
import pokeList from './pokelist.json'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { SiPokemon } from "react-icons/si";

function PokeList() {

    const [detailID, setDetailID] = useState('');
    const [detailName, setDetailName] = useState('');
    const [detailW, setDetailW] = useState('');
    const [detailH, setDetailH] = useState('');
    const [detailType, setDetailType] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const openModal = (id, name, height, weight, types) => {
        setShowModal(true);
        setDetailID(id);
        setDetailName(name);
        setDetailH(height)
        setDetailW(weight);
        setDetailType(types);
    };

    const closeModal = () => {
        setShowModal(false);
    };


    return (
        <div>
            <div className='container'>
                <SiPokemon className='title-icon'/> 
                
                <div className='grid'>
                    {pokeList.map((pokemon) => (
                        <div key={pokemon.id} 
                            className="box" 
                            onClick={() => openModal(pokemon.id, pokemon.name, pokemon.height, pokemon.weight, pokemon.types)} >
                            <div className="box-img">
                                <LazyLoadImage
                                className="poke-avatar"
                                effect="blur"
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} 
                                alt={pokemon.name} />
                            </div>
                            <div>{pokemon.name}</div>
                        </div>
                    ))}
                </div>
            </div>
            {showModal && 
                <PokeDetail 
                    onClose={closeModal} 
                    id={detailID} 
                    name={detailName} 
                    height={detailH} 
                    weight={detailW}
                    types={detailType}
                    />
            }
        </div>
    )
}

export default PokeList;