import React from "react";
import { useLocation } from "react-router-dom";
import { ImageCard } from "../component";
import "../styles/styles.css";

export const ImageScreen = () => {
    const { state } = useLocation();
    const { imageUrl } = state;
    return (
        <div className="container">
            <div>
                {
                    imageUrl ? <ImageCard imageUrl={imageUrl} /> : null
                }
            </div>
        </div>
    )
}