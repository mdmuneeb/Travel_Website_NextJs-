"use client";
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import Destination from './Destination/Destination'
import Hotel from './Hotel/Hotel'
import WhyChoose from './WhyChoose/WhyChoose'
import Reviews from '../Reviews/Reviews'
import News from './News/News'
import NewsLetter from './NewsLetter/NewsLetter'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdEnergySavingsLeaf } from 'react-icons/md';


const Home = () => {

  useEffect(() =>{
      const initAOS = async() =>{
        await import('aos');
        AOS.init({
          duration:1000,
          easing: 'ease',
          once:true,
          anchorPlacement: 'top-bottom',

          
        })
      };

      initAOS();
  }, [])


  return (
    <div className='overflow-hidden'>
      <Hero/>
      <Destination/>
      <Hotel/>
      <WhyChoose/>
      <Reviews/>
      <News/>
      <NewsLetter/>

    </div>
  )
}

export default Home
