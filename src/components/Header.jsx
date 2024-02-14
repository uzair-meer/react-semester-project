import React from 'react'
import { cart, logo } from '../assets'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
    const navigate = useNavigate()
    const productData = useSelector((state) => state.counter.productData)
    
    return (
        <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 sticky top-0 z-50">
            <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
                <Link to="/">
                <div>
                    <img className="w-28" src={logo} alt="Logo here" />
                </div>
                </Link>

                <div className="flex items-center gap-8">
                    <ul className="flex items-center gap-8">
                        <Link to="/">
                            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 cursor-pointer duration-300 font-titleFont">Home</li>
                        </Link> 
                        
                        <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 cursor-pointer duration-300 font-titleFont " onClick={() => navigate('/men')}>Men</li>

                        <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 cursor-pointer duration-300 font-titleFont " onClick={() => navigate('/women')}>Women</li>

                        <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 cursor-pointer duration-300 font-titleFont" onClick={() => navigate('/blog')}>Blog</li>

                    </ul>
                    <div className="relative">
                        <img className="w-12" src={cart} alt="cart" />
                        <span className="absolute w-12 top-2 left-1 text-sm flex items-center justify-center font-semibold">{productData.length}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header