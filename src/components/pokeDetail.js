import React from "react";
import "./component.css"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


function PokeDetail( {id, name}) {
    return (
        <div className="box">
            <div className="box-img">
                <LazyLoadImage
                className="poke-avatar"
                effect="blur"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} 
                alt={name} />
            </div>
            <div>{name}</div>
        </div>
    )
}
export default PokeDetail;