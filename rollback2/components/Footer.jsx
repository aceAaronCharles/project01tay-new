import Image from "next/image";
import Link from "next/link"
import React, { useState, useEffect } from "react"
import {
  BsArrowBarRight,
  BsArrowRight,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs"
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import QuoteModal from "./Quote/QuoteModal";
import { urlFor } from '../lib/sanity';


const Footer = () => {
  const timestamp = new Date().getTime();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [logoImage, setLogoImage] = useState(null)

  useEffect(() => {
    const handleManualStorageChange = () => {
      const logos = localStorage.getItem("siteLogos");
      setLogoImage(JSON.parse(logos)[0]?.footerLogo);
    };
    window.addEventListener("site-logos", handleManualStorageChange);
  }, [])

  return (
    <>
      <section className="bg-gradient-to-br from-[#FF5000] via-[#FF6B35] to-[#FF8A50] text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-16 h-16 bg-white rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-white rounded-full animate-bounce-gentle" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container py-12 relative z-10">
          <div className="row py-8">
            <div className="col-12 text-center animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-shadow-lg">
                Request a Quotation
              </h2>
              <p className="text-lg md:text-xl font-light mb-8 text-white/90">
                Feel Free to ask, or send your request via chat
              </p>
              <div className="flex justify-center animate-scale-in" style={{animationDelay: '0.3s'}}>
                <QuoteModal quotebtn={"default"} />
              </div>
            </div>
          </div>
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#6D6E71] to-transparent"></div>
      </section>
      <section className='bg-white text-gray-800 w-full px-2 flex flex-col items-center justify-center relative overflow-hidden'>
        
        <div className='pt-16 pb-8 container w-full relative z-10'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Got any queries on moving? */}
            <div className='p-6 animate-fade-in-up'>
              <h3 className='text-[#FF5000] font-bold text-xl mb-4'>
                Got any queries on moving?
              </h3>
              <div className='space-y-3'>
                <Link className="block" href='/faq'>
                  <div className='flex items-center p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 hover-scale group'>
                    <BsArrowRight size={16} className='mr-3 text-[#FF5000] group-hover:translate-x-1 transition-transform duration-300' />
                    <p className='text-gray-700 group-hover:text-[#FF5000] transition-colors duration-300'>Frequently asked questions</p>
                  </div>
                </Link>
                <div className='flex items-center p-2'>
                  <span className='text-gray-700'>Email: </span>
                  <a href='mailto:info@taylorea.com' className='text-[#FF5000] hover:text-[#FF8A50] transition-colors duration-300 ml-2 font-semibold'>info@taylorea.com</a>
                </div>
              </div>
            </div>
            
            {/* Our Services */}
            <div className='p-6 animate-fade-in-up' style={{animationDelay: '0.1s'}}>
              <h3 className='text-[#FF5000] font-bold text-xl mb-4'>
                Our services
              </h3>
              <div className='space-y-3'>
                <Link className="block" href='/services/household-moving'>
                  <div className='flex items-center p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 hover-scale group'>
                    <BsArrowRight size={16} className='mr-3 text-[#FF5000] group-hover:translate-x-1 transition-transform duration-300' />
                    <p className='text-gray-700 group-hover:text-[#FF5000] transition-colors duration-300'>Household Moves</p>
                  </div>
                </Link>
                <Link className="block" href='/services/office-moving'>
                  <div className='flex items-center p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 hover-scale group'>
                    <BsArrowRight size={16} className='mr-3 text-[#FF5000] group-hover:translate-x-1 transition-transform duration-300' />
                    <p className='text-gray-700 group-hover:text-[#FF5000] transition-colors duration-300'>Office Moves</p>
                  </div>
                </Link>
                <Link className="block" href='/services/corporate-moving'>
                  <div className='flex items-center p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 hover-scale group'>
                    <BsArrowRight size={16} className='mr-3 text-[#FF5000] group-hover:translate-x-1 transition-transform duration-300' />
                    <p className='text-gray-700 group-hover:text-[#FF5000] transition-colors duration-300'>Corporate Staff Relocation</p>
                  </div>
                </Link>
                <Link className="block" href='/services/international-moving'>
                  <div className='flex items-center p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 hover-scale group'>
                    <BsArrowRight size={16} className='mr-3 text-[#FF5000] group-hover:translate-x-1 transition-transform duration-300' />
                    <p className='text-gray-700 group-hover:text-[#FF5000] transition-colors duration-300'>International Moves</p>
                  </div>
                </Link>
                <Link className="block" href='/services/specialised-services'>
                  <div className='flex items-center p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 hover-scale group'>
                    <BsArrowRight size={16} className='mr-3 text-[#FF5000] group-hover:translate-x-1 transition-transform duration-300' />
                    <p className='text-gray-700 group-hover:text-[#FF5000] transition-colors duration-300'>Specialised Services</p>
                  </div>
                </Link>
              </div>
            </div>
            
            {/* Contact us */}
            <div className='p-6 animate-fade-in-up' style={{animationDelay: '0.2s'}}>
              <h3 className='text-[#FF5000] font-bold text-xl mb-4'>
                Contact us:
              </h3>
              <div className='space-y-4'>
                <div className='bg-gray-50 rounded-lg p-4'>
                  <p className='text-gray-700 text-sm leading-relaxed'>
                    <span className='font-semibold'>Nairobi Office:</span><br/>
                    Nazarene Complex Suite 1<br/>
                    Central Church of the Nazarene,<br/>
                    Ngong Road Nairobi KE
                  </p>
                </div>
                <div className='bg-gray-50 rounded-lg p-4'>
                  <p className='text-gray-700 text-sm leading-relaxed'>
                    <span className='font-semibold'>Warehouse:</span><br/>
                    Emerald Business Park Warehouse,<br/>
                    Kutch Road, Off Mombasa Road
                  </p>
                </div>
                <div className='bg-gray-50 rounded-lg p-4'>
                  <p className='text-gray-700 text-sm leading-relaxed'>
                    <span className='font-semibold'>Main Office:</span><br/>
                    <a href='tel:0721410517' className='text-[#FF5000] hover:text-[#FF8A50] transition-colors'>0721 410 517</a> / <a href='tel:0759222111' className='text-[#FF5000] hover:text-[#FF8A50] transition-colors'>0759 222 111</a>
                  </p>
                </div>
                <div className='bg-gray-50 rounded-lg p-4'>
                  <p className='text-gray-700 text-sm leading-relaxed'>
                    <span className='font-semibold'>WhatsApp:</span><br/>
                    <a href='https://wa.me/254721410517' target='_blank' className='text-[#FF5000] hover:text-[#FF8A50] transition-colors'>0721 410 517</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <hr className='border border-[#313D39] w-full my-6' /> */}

        {/* Modern Footer Bottom */}
        <div className="container w-full py-8 border-t border-gray-200 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col items-center md:items-start mb-6 md:mb-0 animate-fade-in-left">
              {!logoImage ?
                <Image
                  width={200}
                  height={80}
                  className='object-contain w-[180px] md:w-[280px] hover-scale transition-all duration-300'
                  src={`/assets/General/logo.png?cb=${timestamp}`} 
                  alt='Taylor Movers Logo' 
                />
                :
                <Image
                  src={urlFor(logoImage?.image)?.url()}
                  alt={logoImage?.alt}
                  width={200}
                  height={80}
                  className='object-contain w-[180px] md:w-[280px] hover-scale transition-all duration-300'
                />
              }
              <p className="mt-4 text-lg font-semibold text-[#FF5000]">
                Experience delightful moving!
              </p>
              <p className="text-sm text-gray-600 mt-2">
                © {new Date().getFullYear()} Taylor Movers. All rights reserved.
              </p>
              {/* Developer Credit */}
              <div className="mt-4 text-xs text-gray-500 flex items-center justify-center md:justify-start">
                <span className="mr-1">♠</span>
                <span>Created by aceaaroncharles</span>
                <span className="ml-1">♠</span>
              </div>
            </div>
            
            <div className='flex flex-col items-center animate-fade-in-right'>
              <p className="text-lg font-semibold text-[#FF5000] mb-4">Follow Us</p>
              <div className='flex space-x-4'>
                <a 
                  href='https://web.facebook.com/taylormoversea' 
                  target="_blank"
                  className='social-icon-modern facebook-hover'
                >
                  <div className='w-12 h-12 rounded-full bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200 flex items-center justify-center hover-scale hover:shadow-xl transition-all duration-300 hover:bg-[#1877F2]/10'>
                    <FaFacebook size={20} className='text-[#1877F2]' />
                  </div>
                </a>
                <a 
                  href='https://web.instagram.com/taylormoversea' 
                  target="_blank"
                  className='social-icon-modern instagram-hover'
                >
                  <div className='w-12 h-12 rounded-full bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200 flex items-center justify-center hover-scale hover:shadow-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-[#E4405F]/10 hover:to-[#FCCC63]/10'>
                    <BsInstagram size={20} className='text-[#E4405F]' />
                  </div>
                </a>
                <a 
                  href='https://twitter.com/taylormoverske' 
                  target="_blank"
                  className='social-icon-modern twitter-hover'
                >
                  <div className='w-12 h-12 rounded-full bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200 flex items-center justify-center hover-scale hover:shadow-xl transition-all duration-300 hover:bg-black/10'>
                    <RiTwitterXLine size={20} className='text-black' />
                  </div>
                </a>
                <a 
                  href='https://www.linkedin.com/company/taylor-movers-ea/?originalSubdomain=ke' 
                  target="_blank"
                  className='social-icon-modern linkedin-hover'
                >
                  <div className='w-12 h-12 rounded-full bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200 flex items-center justify-center hover-scale hover:shadow-xl transition-all duration-300 hover:bg-[#0077B5]/10'>
                    <FaLinkedin size={20} className='text-[#0077B5]' />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
