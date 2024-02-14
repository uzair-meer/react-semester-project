import React from 'react'
import  { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCart from "../components/ProductCart"

const Men = () => {

    const [Products, setProducts] = useState([])
    const fetchProducts = async () => {
        const ProductsData = await axios.get('https://fakestoreapiserver.reactbd.com/products')
        setProducts(ProductsData.data)
    }
    useEffect(() => { fetchProducts() }, [])
    return (
        <div className="maw-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">
        {
          Products.map((product, index) => (
            product.category === "men" ? 
            <ProductCart key={index} product={product} />  
            :
            null 
          ))
        }

      </div>
    )
}

export default Men