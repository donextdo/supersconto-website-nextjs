import Image from 'next/image'
import React, {MouseEventHandler} from 'react'
import { FaCalendar } from 'react-icons/fa'
import { RiPinDistanceFill } from 'react-icons/ri'
import { Catelog, Flyer } from '../../../typings'
import { dateParser } from '../../../utils/dateParser'


interface Props {
    flyer: Catelog,
    onClick?: MouseEventHandler<HTMLDivElement>

}

const FlyerCard: React.FC<Props> = ({flyer,onClick}) => {
  return (
    <div className='w-full max-w-[12.5rem] min-w-[12.5rem] h-64 rounded-md relative overflow-hidden shadow-sm transition duration-[0.4s] hover:scale-105 cursor-pointer' onClick={onClick}>
        <Image 
            src={flyer.pages ? flyer.pages[0].page_image : ''}
            fill
            alt='flyer'
            sizes='width: 100%'
        />

        <div className='absolute bottom-0 w-full flex flex-col gap-1 p-2 bg-white bg-opacity-30 backdrop-blur-sm'>
            <h4 className='text-sm capitalize font-medium'>
                { flyer.title }
            </h4>

            <div className='flex items-center justify-between'>
                <p className='text-xs font-normal'>
                    { flyer.shop_id?.shop_name }
                </p>

                <div className='flex items-center gap-1'>
                    <RiPinDistanceFill className='w-3 h-3'/>
                    <span className='text-sm font-medium'> 10KM </span>
                </div>
            </div>

            <div className='flex items-center gap-2 mt-2'>
                <FaCalendar className='w-3 h-3'/>
                <p className='text-xs font-normal'>
                    until { dateParser(flyer.expiredate) }
                </p>
            </div>
        </div>

    </div>
  )
}

export default FlyerCard