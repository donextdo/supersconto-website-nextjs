import React, { useState } from 'react'
// import { FaBars } from 'react-icons/fa'
import Link from 'next/link'
import TextInput from '../Utils/TextInput'
import logo from '../../../assets/logo/logo.png'
import Image from 'next/image'
import { FaSearch, FaLocationArrow, FaUserCircle } from "react-icons/fa";
import { SlUser } from "react-icons/sl";
import { TfiWorld } from "react-icons/tfi";
import { useRouter } from 'next/router'
import Language from '../Language/Language'
import { useTranslation } from 'next-i18next';

const Header = () => {

    const [query, setQuery] = useState<string>('')
    const [location, setLocation] = useState<string>('')
    const [languagePopup, setLanguagePopup] = useState(false)

    const router = useRouter()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setQuery(e.target.value)
    }

    const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setLocation(e.target.value)
    }

    const handleSearch = (): void => {  
        router.push(`/search-results?query=${query}`)
    }

    const handleLocationSearch = (): void => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
              const lat = position.coords.latitude
              const long = position.coords.longitude

              setLocation(`${lat}, ${long}`)
            },
            (error) => {
              console.error(error);
            }
        );
    }
    const { i18n } = useTranslation();

    const handleLanguage = () => {
        setLanguagePopup(!languagePopup)
    }

    function handleChangeLanguage(language:any) {
        // const language = event.target.value;
        // i18n.changeLanguage('it');
        // i18n.changeLanguage('en')
      }
    


    return (
        <header>
            <div className='px-10 flex items-center w-full'>
                <div className='flex items-center gap-4 w-full pl-16 lsm:pl-0'>


                    <Link href={'/'}
                        className='text-3xl text-[#008C45] font-semibold '
                    >
                        <Image src={logo} alt="LOGO" className='h-11 sm:h-9 md:h-11 w-auto'></Image>
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
                        <button 
                        disabled={!query}
                        onClick={handleSearch}
                        className='relative'>
                            <FaSearch className='absolute text-white bg-[#008C45] w-12 h-[40px] px-4 -left-8 -bottom-[20px] rounded-r-md' />
                        </button>
                    </div>
                    </section>

                    <section className='hidden md:block'>
                    <div className='flex flex-raw items-center ml-8 lg:ml-20'>
                        <TextInput
                            value={location}
                            onChange={handleLocationChange}
                            Styles='bg-[#EDEDED] text-[#3D3B3B] text-sm font-light md:w-48 lg:w-60 xl:w-96 rounded-l-md h-[40px]'
                            placeholder='Search by Location'
                        />
                        <button 
                        onClick={handleLocationSearch}
                        className='relative'>
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
                    <button className='hover:bg-gray-200 shadow-lg ml-10 lg:ml-16' onClick={handleLanguage}>
                        <TfiWorld className='fill-[#008C45] w-6 h-6 ' />
                    </button>
                    {
                        languagePopup && 
                        <Language setLanguagePopup={setLanguagePopup} handleChangeLanguage={handleChangeLanguage}/>
                    }

                    <button className='hover:bg-gray-200 p-2 rounded-full border border-green-700 shadow-lg ml-4 lg:ml-8'>
                        <SlUser className='fill-[#008C45] w-6 h-6' />
                    </button>

                </div>
            </div>
        </header>
    )
}

export default Header