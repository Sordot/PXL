import React from "react";
import Row from "./Row.jsx"
import "../styles/canvas.scss"

const Canvas = ({width, height, selectedColor}) => {

    let rows = [];

    //add the appropriate amount of Row components to rows based off of the height (the canvas will always be a square)
    for(let i = 0; i < height; i++) {
        rows.push(<Row key={i} width={width} selectedColor={selectedColor} />)
    }

    return <>
        <div id='canvas'>
            <div id='pixels'>
                {rows}
            </div>
        </div>
    </>

}

export default Canvas