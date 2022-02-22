import React from "react";

export const ImageCard = ({ imageUrl }) => {
    return (
        <div style={{ padding: '10vw' }}>
            <img style={{ height: '20vw' }} src={imageUrl} alt='response' />
        </div>
    )
}