import React, { useEffect } from 'react'

const ItemDetail = ({ product }) => {
    useEffect(() => {
        console.log('En useEffect del ItemDetail',product)
    }, [product])
  return (
      <div>{product.name}</div>
  )
}

export default ItemDetail