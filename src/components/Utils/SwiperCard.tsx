import Image from 'next/image'
import React from 'react'
import news1 from '../../../assets/news/news1.jpg'
import news2 from '../../../assets/news/news2.jpg'
import news3 from '../../../assets/news/news3.jpg'

const SwiperCard = () => {
  return (
    <div className=' w-96 h-96 overflow-x-scroll flex rounded-lg'>
        {/* <Image 
            src={news1}
            fill
            alt='flyer'
        />
        <Image 
            src={news2}
            fill
            alt='flyer'
        />
        <Image 
            src={news3}
            fill
            alt='flyer'
        /> */}
        {/* <div className='w-96 h-full bg-red-900'>

        </div>

        <div className='w-96 h-full bg-green-900'>

        </div>

        <div className='w-96 h-full bg-blue-900'>

        </div> */}
    </div>
  )
}

export default SwiperCard