import Image from 'next/image'
import React from 'react'
import { FaCalendar } from 'react-icons/fa'
import { RiPinDistanceFill } from 'react-icons/ri'
import { Itm } from '../../../typings'


interface Props {
    item: Itm
}

const LatestItemCard: React.FC<Props> = ({item}) => {
    // console.log(item)
  return (
    <div className='w-[12.5rem] h-64 rounded-md relative overflow-hidden shadow-sm transition duration-[0.4s] hover:scale-105 cursor-pointer'>
        <Image 
            // src={item.image}
            src={item.product_image}
            fill
            alt='flyer'
            sizes='width: 100%'
           
        />

        <div className='absolute bottom-0 w-full flex flex-col gap-1 p-2 bg-white bg-opacity-30 backdrop-blur-sm'>
            <h4 className='text-sm capitalize font-medium'>
                { item.name }
            </h4>

            <h4 className='text-base font-medium'>
                { item.price }
            </h4>

        </div>

    </div>
  )
}

export default LatestItemCard