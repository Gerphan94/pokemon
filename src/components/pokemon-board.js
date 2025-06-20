
import React, { useState } from "react";

import Pagination from "./pagination";

function PokemonBoard({ data, handleView }) {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 50; // You can adjust this value as needed
    // const [itemsPerPage, setItemsPerPage] = useState(50);
    const totalPages = Math.ceil(data.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const dataInPage = data.slice(startIndex, endIndex)



    return (
        <>
            <div className="grid grid-cols-10 gap-4 p-4">
                {dataInPage.map((pokemon) => {

                    if (pokemon.base64img !== 'NDA0OiBOb3QgRm91bmQ=') { // Itis base64 of Null
                        
                    return (
                        (
                            <div onClick={() => handleView(pokemon)} className="flex flex-col items-center hover:bg-gray-50 rounded-xl p-2 select-none" key={pokemon.id}>
                                <img className="size-14" src={`data:image/png;base64,${pokemon.image_base64 || pokemon.base64img}`} alt={pokemon.name} />
                                <div className="text-center">{pokemon.name}</div>
                            </div>
                        )
                    
                    )}
                })}
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
            />
        </>
    );
}

export default PokemonBoard;