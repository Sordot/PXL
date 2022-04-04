import React, {useRef} from "react";
import Row from "./Row.jsx"
import { exportComponentAsPNG } from "react-component-export-image";
import "../styles/canvas.scss"

const Canvas = ({width, height, selectedColor}) => {

    const panelRef = useRef()

    let rows = [];

    //add the appropriate amount of Row components to rows based off of the height
    for(let i = 0; i < height; i++) {
        rows.push(<Row key={i} width={width} selectedColor={selectedColor} />)
    }

    return <>
        <div id='canvas'>
            <div id='pixels' ref={panelRef}>{rows}</div>
            <button className="button" onClick={() => exportComponentAsPNG(panelRef)}>Export as PNG</button>
        </div>
    </>

}

export default Canvas