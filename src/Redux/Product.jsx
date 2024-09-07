import React from 'react'
import "../App.css"
import { useDispatch, useSelector } from 'react-redux'

function Product() {
    const wareHouse = [
        {id: 1, name: 'Product 1', price: 100 },
        {id: 2, name: 'Product 2', price: 200 },
        {id: 3, name: 'Product 3', price: 300 },
    ]

    const dispatch = useDispatch()
    const handdleButton = () => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: [],
        })
    }
  return (
    <div className='homeCont'>
        {
            wareHouse.map(product => (
                <div key={product.id} className='box'>
                    <h3>{product.name}</h3>
                    <p>Price: ${product.price}</p>
                    <button className="add-btn" onClick={handdleButton}>Add To Card</button>
                </div>
            ))
        }
    </div>
  )
}

export default Product