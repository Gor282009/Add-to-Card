import React from 'react'
import "../App.css"

function Products() {
   const warehouse = [
     {id: 1, name: 'Product 1', price: 100 },
     {id: 2, name: 'Product 2', price: 200 },
     {id: 3, name: 'Product 3', price: 300 },
   ] 
  return (
    <div className='homeCont'>
        {
            warehouse.map(product => (
                <div key={product.id} className='box'>
                    <h3>{product.name}</h3>
                    <p>Price: ${product.price}</p>
                    <button className="add-btn">Add to Cart</button>
                </div>
            ))
        }
    </div>
  )
}

export default Products