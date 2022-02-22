import React from "react";
import "../styles/styles.css";

export const Button = ({ clickHandler }) => {

    return (
        <div>
            <button onClick={clickHandler} className="button">Fetch</button>
        </div>
    )
}