import React from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from './Shopcontext'
import "./Product.css"
function Product() {
  const { all_p } = useContext(ShopContext)
  let clickproduct = all_p.filter((p) => {
    return (p.id == Id);

  })
  const { Id } = useParams()
  return (

    clickproduct.name

  )
}

export default Product



