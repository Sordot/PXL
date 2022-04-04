import React from "react";
import Pixel from './Pixel'
import "../styles/row.scss"

const Row = ({width, selectedColor}) => {

    let pixels = [];

    //add the appropriate amount of Pixel components to pixels based off of the width provided
    for(let i = 0; i < width; i++) {
        pixels.push(<Pixel key={i} selectedColor={selectedColor} />)
    }

    return <>
        <div className='row'>
            {pixels}
        </div>
    </>

}

export default Row