import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


function PokeDetail( { onClose, id, name, height, weight, types } ) {

    const formattedNumber = String(id).padStart(4, '0');
    const height_m = height/10;
    const weight_m = weight/10;

    return (
        <div className="modal-overlay">
        <div className="modal">
            <div className="modal-header">
                <div className="modal-close">
                    <AiOutlineClose onClick={onClose}/>
                </div>
                
            </div>
            <div className="modal-content">
                <div className="content-img">
                    <LazyLoadImage
                        effect="blur"
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} 
                        alt={name} />
                </div>

                <div className="content-detail">
                    <div className="detail-row" id="poke_id">#{formattedNumber}</div>
                    <div className="detail-row" id="poke_name">{name}</div>
                    <div className="detail-row" id="poke_height">Height: {height_m} m</div>
                    <div className="detail-row" id="poke_weight">Weight: {weight_m} Kg</div>
                    <div className="detail-row">
                    {types.map((item) => (
                        <span className={item}>{item}</span>
                    ))}
                    </div>
                    
                </div>
            
            </div>
        </div>
        </div>
  );
}
export default PokeDetail;