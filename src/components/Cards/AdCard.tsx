import gad from '../../../assets/ad/googleads.png'
import { RiPinDistanceFill } from 'react-icons/ri'
import { FaCalendar } from 'react-icons/fa'
import Image from 'next/image'
import flyer1 from '../../../assets/flyers/flyer_1.jpg'
import flyer2 from '../../../assets/flyers/flyer_2.jpg'

const AdCard = () => {
    return (
        <div className="flex justify-between bg-white px-8 py-4 rounded">
            <div className='w-full max-w-[12.5rem] min-w-[12.5rem] h-64 rounded-sm relative overflow-hidden shadow-sm transition duration-[0.4s] hover:scale-105 cursor-pointer'>
                <Image
                    src={flyer1}
                    layout='fill'
                    alt='flyer'
                />

                <div className='absolute bottom-0 w-full flex flex-col gap-1 p-2 bg-white bg-opacity-30 backdrop-blur-sm'>
                    <h4 className='text-sm capitalize font-medium'>
                        KREO BRICO AND CASA
                    </h4>

                    <div className='flex items-center justify-between'>
                        <p className='text-xs font-normal'>
                            shop name
                        </p>

                        <div className='flex items-center gap-1'>
                            <RiPinDistanceFill className='w-3 h-3' />
                            <span className='text-sm font-medium'>10KM</span>
                        </div>
                    </div>

                    <div className='flex items-center gap-2 mt-2'>
                        <FaCalendar className='w-3 h-3' />
                        <p className='text-xs font-normal'>
                            Untill 24 september
                        </p>
                    </div>
                </div>

            </div>

            {/* ....... */}
        
                <Image src={gad} alt="ads" />
            {/* ....... */}
            <div className='w-full max-w-[12.5rem] min-w-[12.5rem] h-64 rounded-sm relative overflow-hidden shadow-sm transition duration-[0.4s] hover:scale-105 cursor-pointer'>
                <Image
                    src={flyer2}
                    layout='fill'
                    alt='flyer'
                />

                <div className='absolute bottom-0 w-full flex flex-col gap-1 p-2 bg-white bg-opacity-30 backdrop-blur-sm'>
                    <h4 className='text-sm capitalize font-medium'>
                        KREO BRICO AND CASA
                    </h4>

                    <div className='flex items-center justify-between'>
                        <p className='text-xs font-normal'>
                            shop name
                        </p>

                        <div className='flex items-center gap-1'>
                            <RiPinDistanceFill className='w-3 h-3' />
                            <span className='text-sm font-medium'>10KM</span>
                        </div>
                    </div>

                    <div className='flex items-center gap-2 mt-2'>
                        <FaCalendar className='w-3 h-3' />
                        <p className='text-xs font-normal'>
                            Untill 24 september
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AdCard;