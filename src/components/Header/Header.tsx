import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import Link from 'next/link'
import { TextField } from '../Shared/FormUtils'

const Header = () => {

    const [query, setQuery] = useState<string>('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setQuery(e.target.value)
    }

  return (
    <header>
        <div className='container mx-auto flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <button>
                    <FaBars className='fill-[#008C45] w-6 h-6'/>
                </button>

                <Link href={'/'}
                    className='text-3xl text-[#008C45] font-semibold'
                >
                    LOGO
                </Link>

                {query}
            </div>

            <div>
                <TextField 
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