import React from 'react'
import Slider from '../Utils/Slider'
import FlyerCard from '../Flyer/FlyerCard'
import { Flyer } from '../../../typings'
import SwiperCard from '../Utils/SwiperCard'

const News = () => {

  return (
    <div className='w-full flex flex-col gap-6'>
        
        <h2 className='text-lg font-semibold'>
            NEWS
        </h2>

        <Slider >

            {/* <SwiperCard /> */}

        </Slider>

    </div>
  )
}

export default News