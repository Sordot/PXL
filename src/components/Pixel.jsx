import React, {useState} from "react";
import "../styles/pixel.scss"

const Pixel = ({selectedColor}) => {

    const [pixelColor, setPixelColor] = useState('#FFFFFF')
    const [oldColor, setOldColor] = useState(pixelColor)
    const [canChangeColor, setCanChangeColor] = useState(true)

    //applies selected color to the clicked pixel, user cannot change this color until they mouse over another pixel and come back
    const applyColor = () => {
        setPixelColor(selectedColor)
        setCanChangeColor(false)
    }

    //covers hovered pixel with new color
    const changeColorOnHover = () => {
        setOldColor(pixelColor)
        setPixelColor(selectedColor)
    }

    //when mouse leaves a given pixel, reset it to its previous color if it hasnt been changed
    //otherwise reset the value of canChangeColor
    const resetColor = () => {
        if (canChangeColor) {
            setPixelColor(oldColor)
        }

        setCanChangeColor(true)
    }

    return <>
        <div className='pixel' style={{backgroundColor: pixelColor}} onClick={applyColor} onMouseEnter={changeColorOnHover} onMouseLeave={resetColor}></div>
    </>

}

export default Pixel