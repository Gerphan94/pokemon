import React from "react";
import "./component.css"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


function PokeDetail( {id, name}) {
    const src_path = './img/' + id + '.png';
    return (
        <div className="box">
            <div className="box-img">
                <LazyLoadImage
                className="poke-avatar"
                effect="blur"
                src={ src_path} 
                alt={name} />
            </div>
            <div>{name}</div>
        </div>
    )
}
export default PokeDetail;