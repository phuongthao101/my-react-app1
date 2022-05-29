import React from "react";
import { useState } from "react"

const getNewColor = () => {
    const colors = ['black', 'blue', 'red']
    const randomColor = Math.trunc(Math.random() * colors.length)
    return colors[randomColor]
}
const ColorBox = () => {
    const handleClick = () => {
        const newColor = getNewColor()
        setColor(newColor)
        localStorage.setItem('color-box', newColor)
    }


    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('color-box') || 'pink'
        return initColor
    })
    return (
        <div>
            <button
                style={{ backgroundColor: color }}
                onClick={handleClick}
            >ColorBox</button>
        </div>
    )
}
export default ColorBox