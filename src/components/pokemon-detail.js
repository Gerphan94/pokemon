import React from "react";


function DetailModal({ show, setShow, detail }) {


    if (!show) {
        return null;
    }

    const color = [
        { name: "normal", color: "#A8A77A" },
        { name: "fire", color: "#EE8130" },
        { name: "water", color: "#6390F0" },
        { name: "electric", color: "#F7D02C" },
        { name: "grass", color: "#7AC74C" },
        { name: "ice", color: "#96D9D6" },
        { name: "fighting", color: "#C22E28" },
        { name: "poison", color: "#A33EA1" },
        { name: "ground", color: "#E2BF65" },
        { name: "flying", color: "#A98FF3" },
        { name: "psychic", color: "#F95587" },
        { name: "bug", color: "#A6B91A" },
        { name: "rock", color: "#B6A136" },
        { name: "ghost", color: "#735797" },
        { name: "dragon", color: "#6F35FC" },
        { name: "dark", color: "#705746" },
        { name: "steel", color: "#B7B7CE" },
    ]

    return (

        <>
            <div className="fixed inset-0 z-50 outline-none focus:outline-none lg:p-10 p-4 w-screen h-screen ">
                <div className="relative md:w-1/3 w-full top-20  mx-auto bg-white rounded-xl shadow-lg">
                    <div className="h-full ">
                        {/* HEADER */}
                        <div className="flex justify-between text-lg font-bold border-b-black w-full px-4 py-3  rounded-xl">
                            <div className="text-4xl text-[#FE7743]">#{detail.id}</div>
                            <button className="text-gray-300 hover:text-gray-600" onClick={() => setShow(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="flex gap-4  px-4 py-10">
                            <div>
                                <img className="w-full h-64 object-contain" src={`data:image/png;base64,${detail.image_base64 || detail.base64img}`} alt={detail.name} />
                            </div>
                            <div className="text-[#183B4E] text-left font-medium space-y-2 p-2">

                                <p className="text-4xl  ">{detail.name}</p>
                                <p className="">Height: {detail.height / 10} m</p>
                                <p className="">Weight: {detail.weight / 10} kg</p>
                                <div className="flex flex-wrap pt-6 gap-2">
                                    {detail.types.map((item, index) => {
                                        const typeColor = color.find(c => c.name.toUpperCase() === item.toUpperCase());
                                        return (
                                            <span key={index} className="inline-block px-4 py-1 mr-2 rounded-full text-white" style={{ backgroundColor: typeColor ? typeColor.color : '#ccc' }}>
                                                {item.charAt(0).toUpperCase() + item.slice(1)}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>

        </>
    )

}

export default DetailModal;