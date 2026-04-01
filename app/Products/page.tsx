import React from 'react'

const ProductPage = async () => {
    const res = await fetch('https://dummyjson.com/products', {
        cache: 'no-store'
    })
    const data = await res.json()
    const timestemp = new Date().toLocaleTimeString()
  return (
    <div>
        <p>🕒 timestemp at: {timestemp}</p>
    </div>
  )
}

export default ProductPage
