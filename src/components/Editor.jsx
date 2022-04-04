import React, {useState} from "react";
import { CirclePicker } from "react-color";
import Canvas from "./Canvas.jsx";
import "../styles/editor.scss";

const Editor = () => {

    const [canvasWidth, setCanvasWidth] = useState(16)
    const [canvasHeight, setCanvasHeight] = useState(16)
    const [hideOptions, setHideOptions] = useState(false)
    const [hideCanvas, setHideCanvas] = useState(true)
    const [buttonText, setButtonText] = useState("Start Drawing")
    const [selectedColor, setSelectedColor] = useState("#f44336")

    const initializeCanvas = () => {
        setHideOptions(!hideOptions)
        setHideCanvas(!hideCanvas)

        buttonText === "Start Drawing" ? setButtonText("Reset") : setButtonText("Start Drawing")
    }

    const changeColor = (color) => {
        setSelectedColor(color.hex)
    }
    
    return <>
        <div id='editor'>
            <h1>PXL Editor</h1>

            {/* while hideCanvas is true (i.e. while user is selecting canvas dimensions), show the options below... */}
            {hideCanvas && <h2>Enter Panel Dimensions</h2>}
                {hideCanvas && <div id='options'>
                    <div className='option'>
                        <input 
                            type='number' 
                            className='panelInput' 
                            defaultValue={canvasWidth}
                            onChange={e => setCanvasWidth(e.target.value)}
                        />
                        <span>Width</span>
                    </div>
                    <div className='option'>
                        <input 
                            type='number' 
                            className='panelInput' 
                            defaultValue={canvasHeight}
                            onChange={e => setCanvasHeight(e.target.value)} 
                        />
                        <span>Height</span>
                    </div>
                </div>}

            <button className='button' onClick={initializeCanvas}>{buttonText}</button>

            {/* once hideCanvas is false and hideOptions is true, show the color picker and canvas */}
            {hideOptions && <CirclePicker color={selectedColor} onChangeComplete={changeColor}/>}
            {hideOptions && <Canvas width={canvasWidth} height={canvasHeight} selectedColor={selectedColor} />}
        </div>
    </>

}

export default Editor