import React from 'react'

const CountClick = ({handleClick, children}) => {
    console.log(`children ${children}`)

    return (
        <div>
            <button onClick={handleClick}>{children}</button>
        
        </div>
    )
}

export default React.memo(CountClick)
