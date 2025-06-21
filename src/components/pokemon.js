import { useState, useEffect } from "react";
import PokemonDetail from "./pokemon-detail";
import PokemonBoard from "./pokemon-board";
import FilterPanel from "./filter-panel";


const MAX_TOTAL_PAGES = 27;

function Pokemon() {

    console.log('Pokemon');

    const [allData, setAllData] = useState([]);
    const [showDetail, setShowDetail] = useState(false);
    const [detail, setDetail] = useState({});
    const [loading, setLoading] = useState(false);
    const [sltPokemonType, setSltPokemonType] = useState({ id: 'all', name: 'All', color: '#ffffff' });


  


    const pokemontypes = [
        { id: "normal", name: "Normal", color: "#A8A77A", icon: "🔘" },
        { id: "fire", name: "Fire", color: "#EE8130", icon: "🔥" },
        { id: "water", name: "Water", color: "#6390F0", icon: "💧" },
        { id: "electric", name: "Electric", color: "#F7D02C", icon: "⚡" },
        { id: "grass", name: "Grass", color: "#7AC74C", icon: "🌿" },
        { id: "ice", name: "Ice", color: "#96D9D6", icon: "❄️" },
        { id: "fighting", name: "Fighting", color: "#C22E28", icon: "🥊" },
        { id: "poison", name: "Poison", color: "#A33EA1", icon: "☠️" },
        { id: "ground", name: "Ground", color: "#E2BF65", icon: "🌍" },
        { id: "flying", name: "Flying", color: "#A98FF3", icon: "🕊️" },
        { id: "psychic", name: "Psychic", color: "#F95587", icon: "🔮" },
        { id: "bug", name: "Bug", color: "#A6B91A", icon: "🐛" },
        { id: "rock", name: "Rock", color: "#B6A136", icon: "🪨" },
        { id: "ghost", name: "Ghost", color: "#735797", icon: "👻" },
        { id: "dragon", name: "Dragon", color: "#6F35FC", icon: "🐉" },
        { id: "dark", name: "Dark", color: "#705746", icon: "🌑" },
        { id: "steel", name: "Steel", color: "#B7B7CE", icon: "⚙️" },
    ];



    useEffect(() => {

        const fetchAllFiles = async () => {
            setLoading(true);
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
            setLoading(false);
            setAllData(combined);
        };
        fetchAllFiles();

    }, []);


    // Update visible page data whenever currentPage or allData changes

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

                <div className="flex gap-3 items-center">
                    <div className={`w-28 px-2 py-0.5  rounded-lg border text-white`}
                        style={{ backgroundColor: sltPokemonType.color }}
                    >{sltPokemonType.name}</div>
                    <div>
                        <FilterPanel
                            pokemontypes={pokemontypes}
                            sltpokemonType={sltPokemonType}
                            setSltPokemonType={setSltPokemonType}
                        />
                    </div>

                </div>

            </div>
            <PokemonBoard data={allData} handleView={handleView} loading={loading} />
            <PokemonDetail show={showDetail} setShow={setShowDetail} detail={detail} />

        </>
    )
}
export default Pokemon;