import Image from 'next/image'
import React from 'react'
import { FaCalendar } from 'react-icons/fa'
import { RiPinDistanceFill } from 'react-icons/ri'
import { Item } from '../../../typings'


interface Props {
    item: Item
}

const LatestItemCard: React.FC<Props> = ({item}) => {
    console.log(item)
  return (
    <div className='w-[12.5rem] h-64 rounded-md relative overflow-hidden shadow-sm transition duration-[0.4s] hover:scale-105 cursor-pointer'>
        <Image 
        
            src={item.product_image}
            alt='flyer'
          //   style={{objectFit:"cover"}}
          // sizes='height: 100%'
          // height={600}
          // width={400}
          style={{ objectFit: "contain", backgroundColor: "#DCDCDC",width:"100%",height:"100%" }}
          // sizes='height: 100%'
          width={450}
          height={400}
           
        />

        <div className='absolute bottom-0 w-full flex flex-col gap-1 p-2 bg-white bg-opacity-30 backdrop-blur-sm'>
            <h4 className='text-sm capitalize font-medium'>
                { item.product_name }
            </h4>

            <h4 className='text-base font-medium'>
                USD { parseInt(item.unit_price).toFixed(2) }
            </h4>

        </div>

    </div>
  )
}

export default LatestItemCard