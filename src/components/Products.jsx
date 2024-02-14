import React, { useEffect, useState } from 'react'
import ProductCart from './ProductCart'
import axios from 'axios'

const Products = () => {
  
  const [Products, setProducts] = useState([])
  const fetchProducts = async () => {
    const ProductsData = await axios.get('https://fakestoreapiserver.reactbd.com/products')
    setProducts(ProductsData.data)
  }
  useEffect(() => { fetchProducts() }, [])
  return (
    <>
      <div className="flex flex-col items-center gap-4 m-3">
        <h2 className="text-2xl text-white py-2 bg-black w-80 text-center">Shopping Deal! </h2>
        <span className="w-20 h-1 bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center contents">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fuga quisquam odit, qui minus fugiat id beatae accusantium vel animi, porro nostrum dicta vitae voluptas iure adipisci dolore voluptatum natus!
          
        </p>
      </div>

      <div className="maw-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">
        {
          Products.map((product, index) => (
            <ProductCart key={index} product={product} />
          ))
        }

      </div>
    </>
  )
}

export default Products