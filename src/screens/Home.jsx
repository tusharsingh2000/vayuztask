import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, ImageCard } from "../component";
import "../styles/styles.css";

export const Home = () => {
    const history = useHistory();
    const [imageUrl, setImageUrl] = useState('');

    const clickHandler = () => {
        axios
            .get("image/random")
            .then((res) => {
                setImageUrl(res.data.message);
            })
            .catch(e => console.log(e));
    }

    const imageClick = () => {
        history.push('/image', { imageUrl: imageUrl })
    }

    return (
        <div className="container">
            <div>
                <Button clickHandler={clickHandler.bind(this)} />
            </div>
            <div>
                {
                    imageUrl ? <div onClick={imageClick} style={{ cursor: 'pointer' }}>
                        <ImageCard imageUrl={imageUrl} />
                        <div style={{ textAlign: 'center' }}>Click on the image</div>
                    </div> : null
                }
            </div>
        </div>
    )
}