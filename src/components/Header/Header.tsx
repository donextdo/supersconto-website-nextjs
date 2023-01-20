import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import Link from 'next/link'
import TextInput from '../Utils/TextInput'
import logo from '../../../assets/logo/logo.png'
import Image from 'next/image'

const Header = () => {

    const [query, setQuery] = useState<string>('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setQuery(e.target.value)
    }

  return (
    <header>
        <div className='container px-2 mx-auto flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <button>
                    <FaBars className='fill-[#008C45] w-6 h-6'/>
                </button>

                <Link href={'/'}
                    className='text-3xl text-[#008C45] font-semibold'
                >
                    <Image src={logo} alt="LOGO" className='h-16 w-32'></Image>
                </Link>

                {query}
            </div>

            <div>
                <TextInput 
                value={query} 
                onChange={handleChange} 
                Styles='bg-[#EDEDED] text-[#3D3B3B] text-sm font-light'
                placeholder='Search by Category or Location'
                />
            </div>
        </div>
    </header>
  )
}

export default Header