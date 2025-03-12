import React from 'react'
import SedctionHeading from '../../Helper/SedctionHeading'
import { hotelsData } from '../../data/data'
import HotelCard from './HotelCard'

const Hotel = () => {
  return (
    <div  className='pt-20 pb-20 '>
        <SedctionHeading heading="Recommended Hotels"/>
        <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center mt-16'>
            {hotelsData.map((data,index)=>{
                return <div data-aos="fade-right"  data-aos-anchorplacement="top-center" data-aos-delay={`${index*100}`}  key={data.id}>
                    <HotelCard hotel={data}/>
                </div>
            })}
        </div>
    </div>
  )
}

export default Hotel
