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

const LatestFlyersCard: React.FC<Props>  = ({flyer,onClick}) => {
    return (  
        // <div className='w-full h-36  ssm:h-40  lsm:h-56  llsm:h-64  sm:h-44  md:h-52 xmd:h-60  lg:h-72 xlg:h-80  xl:h-64  xxl:h-80  xxxl:h-[360px] rounded-md relative overflow-hidden shadow-sm transition duration-[0.4s] hover:scale-105 cursor-pointer' onClick={onClick}>
    
        <div className='w-[102px] h-36 ssm:w-32 ssm:h-40 lsm:w-[172px] lsm:h-56 llsm:w-52 llsm:h-64 sm:w-32 sm:h-44 md:w-32 md:h-52 xmd:w-[182px] xmd:h-60 lg:w-56 lg:h-72 xlg:h-80 xlg:w-64 xl:w-52 xl:h-64 xxl:w-60 xxl:h-80 xxxl:w-[300px] xxxl:h-[360px] rounded-md relative overflow-hidden shadow-sm transition duration-[0.4s] hover:scale-105 cursor-pointer' onClick={onClick}>
            <Image 
                src={flyer.pages?.length && flyer.pages?.length > 0 ? flyer.pages[0]?.page_image : ''}
                alt='flyer'
                style={{ objectFit: "contain", backgroundColor: "#DCDCDC",width:"100%",height:"100%" }}
                // sizes='height: 100%'
                width={450}
                height={400}
            />
    
            <div className='absolute bottom-0 flex flex-col w-full gap-1 p-2 bg-opacity-30 backdrop-blur-sm hover:bg-white'>
                <h4 className='text-sm font-medium capitalize'>
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
    );
}
 
export default LatestFlyersCard;