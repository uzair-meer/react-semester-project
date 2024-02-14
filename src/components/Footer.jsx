import React from 'react'
import { logo } from '../assets'
import { BiLogoWhatsapp, BiLogoFacebook, BiLogoGithub } from "react-icons/bi"
import { useNavigate } from 'react-router-dom'

const Footer = () => {

  const navigate = useNavigate()

  return (
    <div className="bg-black text-white font-titleFont py-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        <div>
          <img className="w-28" src={logo} alt="Logo here" />
          <p className="text-white text-sm tracking-wide">
            @Abdessamad-Store.ma
          </p>
          <div className="flex gap-5 mt-5 text-xl">
            <BiLogoGithub className="hover:cursor-pointer" />
            <BiLogoWhatsapp className="hover:cursor-pointer" />
            <BiLogoFacebook className="hover:cursor-pointer" />
          </div>
        </div>


        {/* Locate US */}
        <div>
          <h2 className="text-2xl text-white mb-4">Locate us</h2>
          <div className="text-base flex flex-col gap-2">
            <p>Morroco Marrackech</p>
            <p>+212608628306</p>
            <p>abdessamad@gmail.com</p>
          </div>
        </div>

        {/* Profile */}
        <div>
          <h2 className="text-2xl text-white mb-4">Quick Links</h2>
          <div className="text-base flex flex-col gap-2">
            <p className="hover:cursor-pointer hover:text-purple-500" onClick={() => navigate('/')}>Home</p>
            <p className="hover:cursor-pointer hover:text-purple-500" onClick={() => navigate('/men')}>Men clothes</p>
            <p className="hover:cursor-pointer hover:text-purple-500" onClick={() => navigate('/women')}>Women</p>
            <p className="hover:cursor-pointer hover:text-purple-500" onClick={() => navigate('/blog')}>Our Blog</p>
          </div>
        </div>

        {/* Subscription */}
        <div>
          <h2 className="text-2xl text-white mb-4">Subscribe</h2>
          <div className="text-base flex flex-col gap-2">
            <input type="email" placeholder="your email address" className="bg-black text-white border-white border-solid p-3" />
            <button type="submit" className="m-5 bg-white p-2 text-black border-white">Subscribe</button> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer