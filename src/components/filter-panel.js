import React, { useState } from "react";
import { FcFilledFilter } from "react-icons/fc";

function FilterPanel({ pokemontypes, sltpokemonType, setSltPokemonType }) {

    const [show, setShow] = useState(false);

    const handleClick = (type) => {
        setSltPokemonType(type);
        setShow(false);
    };

    return (
        <div className="w-full relative">
            <button
                onClick={() => setShow(!show)}>
                <FcFilledFilter className="w-8 h-8" />

            </button>
            {show && (
                <div className="w-80 absolute bg-white border rounded-xl shadow-md right-0 grid grid-cols-2 gap-1 mt-2 p-3">
                    {pokemontypes && pokemontypes.map((type) => (
                        <button
                            key={type.id}
                            className="px-2 py-1 rounded-md flex gap-2 items-center bg-white hover:text-white transition-colors duration-200"
                            style={sltpokemonType && sltpokemonType.id === type.id ? { backgroundColor: type.color, color: 'white' } : {}}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = type.color;
                                e.currentTarget.style.color = 'white';
                            }}
                            onMouseLeave={(e) => {
                                if (sltpokemonType && sltpokemonType.id !== type.id) {
                                    e.currentTarget.style.backgroundColor = 'white';
                                    e.currentTarget.style.color = 'black';
                                }



                            }}
                            onClick={() => handleClick(type)}
                        >
                            <span>{type.icon}</span>
                            {type.name}
                        </button>
                    ))}

                </div>
            )
            }
        </div >
    );
}

export default FilterPanel;