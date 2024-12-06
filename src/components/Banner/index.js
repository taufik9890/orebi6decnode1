'use client'
import Image from 'next/image'
import React from 'react'
import bannerimg from '../../../src/images/banner.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (

    <>
    <div>
    <Slider {...settings}>
          <div>
          <Image src={bannerimg} className='w-full' width={1500} height={1500}/>
       
          </div>
          <div>
          <Image src={bannerimg} className='w-full' width={1500} height={1500}/>
       
          </div>
          <div>
          <Image src={bannerimg} className='w-full' width={1500} height={1500}/>
       
          </div>
          <div>
          <Image src={bannerimg} className='w-full' width={1500} height={1500}/>
       
          </div>
         
        </Slider>
        
    </div>
      
    </>
  )
}

export default Banner
