import React from 'react'

interface ProductDetailsProps {
    params: {
        id: string
    }
}
const ProductDetails = ({ params }: ProductDetailsProps) => {
    return (
        <div>ProductDetails Page{params.id}</div>
    )
}

export default ProductDetails