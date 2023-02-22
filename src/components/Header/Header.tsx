import React, { useState } from 'react'
// import { FaBars } from 'react-icons/fa'
import Link from 'next/link'
import TextInput from '../Utils/TextInput'
import logo from '../../../assets/logo/logo.png'
import Image from 'next/image'
import { FaSearch, FaLocationArrow, FaUserCircle } from "react-icons/fa";
import { SlUser } from "react-icons/sl";

const Header = () => {

    const [query, setQuery] = useState<string>('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setQuery(e.target.value)
    }

    return (
        <header>
            <div className='px-10 flex items-center w-full'>
                <div className='flex items-center gap-4 w-full pl-16 lsm:pl-0'>


                    <Link href={'/'}
                        className='text-3xl text-[#008C45] font-semibold '
                    >
                        <Image src={logo} alt="LOGO" className='h-11 sm:h-14 md:h-16 w-auto'></Image>
                    </Link>

                    
                </div>

                <div className='flex items-center gap-4 text-right'>
                    <section className='hidden md:block'>
                    <div className='flex flex-raw items-center'>

                        <TextInput
                            value={query}
                            onChange={handleChange}
                            Styles='bg-[#EDEDED] text-[#3D3B3B] text-sm font-light md:w-48 lg:w-60 xl:w-96 rounded-md h-[40px]'
                            placeholder='Search by Category or Items'
                        />
                        <button className='relative'>
                            <FaSearch className='absolute text-white bg-[#008C45] w-12 h-[40px] px-4 -left-8 -bottom-[20px] rounded-r-md' />
                        </button>
                    </div>
                    </section>

                    <section className='hidden md:block'>
                    <div className='flex flex-raw items-center ml-8 lg:ml-20'>
                        <TextInput
                            value={query}
                            onChange={handleChange}
                            Styles='bg-[#EDEDED] text-[#3D3B3B] text-sm font-light md:w-48 lg:w-60 xl:w-96 rounded-l-md h-[40px]'
                            placeholder='Search by Location'
                        />
                        <button className='relative'>
                            <FaLocationArrow className='absolute text-white bg-blue-400 w-12 h-[40px] px-4 -left-8 -bottom-[20px] rounded-r-md' />
                        </button>
                    </div>
                    </section>

                    {/* <div className='flex items-center gap-4 w-full'>


                        <Link href={'/'}
                            className='text-3xl text-[#008C45] font-semibold'
                        >
                            <Image src={logo} alt="LOGO" className='h-9 sm:h-14 md:h-16 w-auto'></Image>
                        </Link>

                        
                    </div> */}

                    <button className='hover:bg-gray-200 p-2 rounded-full border border-green-700 shadow-lg ml-10 lg:ml-16'>
                        <SlUser className='fill-[#008C45] w-6 h-6' />
                    </button>

                </div>
            </div>
        </header>
    )
}

export default Header