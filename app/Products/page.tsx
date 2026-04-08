import React from 'react'
import { revalidateProduct } from './revalidate'

const ProductPage = async () => {
    const res = await fetch('https://dummyjson.com/products', {
        next: { tags: ['products'] }
    })
    const data = await res.json()
    const timestemp = new Date().toLocaleTimeString() 
    return (
        <div>
            <p>🕒 timestemp at: 20s fetching {timestemp}</p>
            <button onClick={() => revalidateProduct}>🔄 Revalidate</button>
        </div>
    )
}

export default ProductPage
