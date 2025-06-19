import React, { useState, useEffect } from "react";
import Pagination from "./pagination";
import PokemonDetail from "./pokemon-detail";
import PokemonBoard from "./pokemon-board";
const PAGE_SIZE = 50;
const MAX_TOTAL_PAGES = 27;

function Pokemon() {

    console.log("Loading Pokémon data...");

    const [allData, setAllData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedTerm, setDebouncedTerm] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(MAX_TOTAL_PAGES);
    const [pagedData, setPagedData] = useState([]);
    const [showDetail, setShowDetail] = useState(false);
    const [detail, setDetail] = useState({});

    useEffect(() => {
        const fetchAllFiles = async () => {
            let combined = [];
            for (let page = 1; page <= MAX_TOTAL_PAGES; page++) {
                const file = `pokemon_${page}.json`;
                try {
                    const res = await fetch(`/jsondata/${file}`);
                    const data = await res.json();
                    combined = [...combined, ...data];
                } catch (err) {
                    console.error(`Error loading ${file}:`, err);
                }
            }
            setAllData(combined);
        };
        fetchAllFiles();
    }, []);


    // Update visible page data whenever currentPage or allData changes


    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage((p) => p - 1);
    };

    const handleNext = () => {
        if (currentPage < Math.ceil(allData.length / PAGE_SIZE)) {
            setCurrentPage((p) => p + 1);
        }
    };

    const handleView = (detail) => {
        setDetail(detail);
        setShowDetail(true);
    }

   
   


    return (
        <>
            <div className="flex justify-between items-center bg-white shadow-md px-4 py-2">
                <div className='flex justify-center items-center p-2'>
                    <img className='h-12'
                        src="/pngegg.png" alt="pokemon-logo"
                    />
                </div>
                <div>
                    {/* <input
                        type="text"
                        placeholder="Search Pokémon"
                        value={searchTerm}
                        onChange={handleSearch}
                        className="border border-gray-300 rounded-lg p-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    /> */}
                </div>
            </div>
            <PokemonBoard data={allData} handleView={handleView} />

           
            <PokemonDetail show={showDetail} setShow={setShowDetail} detail={detail} />
        </>
    )
}
export default Pokemon;