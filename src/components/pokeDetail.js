import React from "react";
import "./component.css"
import { LazyLoadImage } from 'react-lazy-load-image-component';

function PokeDetail( {id, name}) {
    const src_path = './img/' + id + '.png';
    return (
        <div className="box">
            <div className="box-img">
                <LazyLoadImage
                className="poke-avatar" 
                src={ src_path} 
                alt={name} />
            </div>
            <div>{name}</div>
        </div>
    )
}
export default PokeDetail;