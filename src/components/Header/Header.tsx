import React, { useState } from 'react'
// import { FaBars } from 'react-icons/fa'
import Link from 'next/link'
import TextInput from '../Utils/TextInput'
import logo from '../../../assets/logo/logo.png'
import Image from 'next/image'
import { FaSearch, FaLocationArrow ,FaUserCircle} from "react-icons/fa";
import { SlUser } from "react-icons/sl";

const Header = () => {

    const [query, setQuery] = useState<string>('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setQuery(e.target.value)
    }

    return (
        <header>
            <div className='px-10 flex items-center justify-between w-full'>
                <div className='flex items-center gap-4'>


                    <Link href={'/'}
                        className='text-3xl text-[#008C45] font-semibold'
                    >
                        <Image src={logo} alt="LOGO" className='h-16 w-auto'></Image>
                    </Link>

                    {query}
                </div>

                <div className='flex items-center gap-4 '>
                   
                    <div className='flex flex-raw items-center ml-20 invisible md:visible'>
                        
                        <TextInput
                            value={query}
                            onChange={handleChange}
                            Styles='bg-[#EDEDED] text-[#3D3B3B] text-sm font-light w-96 rounded-md h-[40px]'
                            placeholder='Search by Category or Items'
                        />
                        <button className='relative'>
                        <FaSearch className='absolute text-white bg-[#008C45] w-12 h-[40px] px-4 -left-8 -bottom-[20px] rounded-r-md' />
                        </button>
                    </div>

                    <div className='flex flex-raw items-center ml-20 invisible md:visible'>
                        <TextInput
                            value={query}
                            onChange={handleChange}
                            Styles='bg-[#EDEDED] text-[#3D3B3B] text-sm font-light w-96 rounded-l-md h-[40px]'
                            placeholder='Search by Zip-code or Location'
                        />
                        <button className='relative'>
                            <FaLocationArrow className='absolute text-white bg-blue-400 w-12 h-[40px] px-4 -left-8 -bottom-[20px] rounded-r-md' />
                        </button>
                    </div>

                  

                    <button className='hover:bg-gray-200 p-2 rounded-full border border-green-700 shadow-lg ml-16'>
                        <SlUser className='fill-[#008C45] w-6 h-6' />
                    </button>
                    
                </div>
            </div>
        </header>
    )
}

export default Header