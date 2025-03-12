import React from 'react'
import SedctionHeading from '../../Helper/SedctionHeading'
import DestinationSlider from './DestinationSlider'

const Destination = () => {
  return (
    <div className='pt-20 pb-20 '>
      <SedctionHeading heading="Exploring Popular Destination"/>
      <div className='mt-14 w-[80%] mx-auto '>
        <DestinationSlider/>
      </div>
    </div>
  )
}

export default Destination
