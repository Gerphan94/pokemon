import React from "react";
import "./component.css"

function PokeDetail( {id, name}) {
    const src_path = './img/' + id + '.png';
    return (
        <div>
            <img className="poke-avatar" src={ src_path} alt={name}></img>
            <div>{name}</div>
        </div>
    )
}

export default PokeDetail;