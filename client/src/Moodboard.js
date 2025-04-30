import React from "react";

export default function Moodboard({ items }){
    return (
        <>
        <h5>Moodboard</h5>
        <div className="masonry-grid">
            {
                items.map(item => 
                    <figure>
                        <img src={item.src} className="img-fluid rounded shadow-sm" />
                    </figure>
                )
            }
        </div>
        </>
    )
}