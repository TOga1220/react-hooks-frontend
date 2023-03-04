import React from 'react'

const Basic1 = (props) => {
    const clickHandler = () => {
        console.log("clicked")
    }

    return (
    <div>
        <button onClick={clickHandler}>Button
        </button>
        <h1>Hello {props.name}</h1>
    </div>
    )
}

export default Basic1
