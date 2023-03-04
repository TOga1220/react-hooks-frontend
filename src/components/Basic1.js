import React, {useState} from 'react'

const Basic1 = (props) => {
    const clickHandler = () => {
        console.log("clicked")
    }

    // const [count, setCount] = useState(0)
    const [product, setProduct] = useState({name:"", price:""})
    return (
    <div>
        {/* <button onClick={() => {setCount(previousCount=>previousCount+1); setCount(previousCount=>previousCount+1) } }>
            Count {count}
        </button> */}
        <form>
            <input type="text" value={product.name}
            onChange={evt => setProduct({...product, name: evt.target.value})}/>

            <input type="text" value={product.price}
            onChange={evt => setProduct({...product, price: evt.target.value})}/>

        </form>
        <h3>Product name is {product.name}</h3>
        <h3>Product price is {product.price}</h3>

    </div>
    )
}

export default Basic1
