import React from "react";
import "./component.css"

function PokeDetail( {id, name}) {
    const src_path = './img/' + id + '.png';
    return (
        <div className="box">
            <div className="box-img">
                <img
                    loading="lazy"
                    className="poke-avatar" 
                    src={ src_path} 
                    alt={name}>

                </img>
            </div>
            
            <div>{name}</div>
        </div>
    )
}
export default PokeDetail;