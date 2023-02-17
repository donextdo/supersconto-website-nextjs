import Image from 'next/image'
import React, {MouseEventHandler, useEffect} from 'react'
import { FaCalendar } from 'react-icons/fa'
import { RiPinDistanceFill } from 'react-icons/ri'
import { Catalog } from '../../../typings'
import { dateParser } from '../../../utils/dateParser'


interface Props {
    flyer: Catalog,
    onClick?: MouseEventHandler<HTMLDivElement>

}

const FlyerCard: React.FC<Props> = ({flyer,onClick}) => {
    useEffect(() => {
        console.log(flyer);
    }, [])
  return (
    <div className='w-32 h-48 md:w-40 lg:w-56 lg:h-72 xl:w-52 xxl:w-60 xxl:h-80 xxxl:w-[300px] xxxl:h-96 rounded-md relative overflow-hidden shadow-sm transition duration-[0.4s] hover:scale-105 cursor-pointer' onClick={onClick}>
        <Image 
            src={flyer.pages?.length && flyer.pages?.length > 0 ? flyer.pages[0]?.page_image : ''}
            fill
            alt='flyer'
            sizes='width: auto'
        />

        <div className='absolute bottom-0 w-full flex flex-col gap-1 p-2  bg-opacity-30 backdrop-blur-sm'>
            <h4 className='text-sm capitalize font-medium'>
                { flyer.title }
            </h4>

            <div className='flex items-center justify-between'>
                <p className='text-xs font-normal'>
                    { flyer.shop_id?.shop_name }
                </p>

                {flyer.shop_id?.distance && <div className='flex items-center gap-1'>
                    <RiPinDistanceFill className='w-3 h-3'/>
                    <span className='text-sm font-medium'> {(flyer.shop_id?.distance / 1000).toFixed(2)} KM</span>
                </div>}
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