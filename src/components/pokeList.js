import React, { useState } from 'react';
import PokeDetail from './pokeDetail';
import pokeList from './pokelist.json'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Pagination from './pagination';
function PokeList() {

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(45);
    const totalPages = Math.ceil(pokeList.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const dataInPage = pokeList.slice(startIndex, endIndex)

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
            <div className='p-2'>
                <div className='flex justify-center items-center '>
                    <img className='h-16' 
                    src="/pngegg.png" alt="pokemon-logo" 
                    />

                </div>
                <div className='grid grid-cols-9 gap-2 p-6 '>
                    {dataInPage.map((pokemon) => (
                        <div key={pokemon.id}
                            className="flex flex-col items-center justify-center p-2 bg-white rounded-xl  cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                            onClick={() => openModal(pokemon.id, pokemon.name, pokemon.height, pokemon.weight, pokemon.types)} >
                            <div className="flex flex-col items-center justify-center">
                                <LazyLoadImage
                                    className="size-16"
                                    effect="blur"
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                                    alt={pokemon.name} />
                            </div>
                            <div>{pokemon.name}</div>
                        </div>
                    ))}
                </div>
                <div>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        setCurrentPage={(page) => setCurrentPage(page)}
                    />

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