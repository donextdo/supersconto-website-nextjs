import React, { useState ,useEffect} from "react";
import Card from "../Utils/Card";
import Button from "../Utils/Button";
import NearestFlyers from "../NearestFylers/NearestFlyers";
import { Catalog } from "../../../typings";
import Cart from "../Cart/cart";
import Signin from "../Signin/Signin";
import Link from "next/link";
import Signup from "../Signup/Signup";
import { RiLoginCircleFill, RiShoppingCart2Fill } from "react-icons/ri";
import MobileCartModal from "../Cart/MobileCartModal";
import TextInput from '../Utils/TextInput'
import { FaSearch, FaLocationArrow ,FaUserCircle} from "react-icons/fa";



interface Props {
  catalogs: Catalog[];
}

const Main: React.FC<Props> = ({ catalogs }) => {
  const [login, setLogin] = useState(true);
  const [showCart, setShowCart] = useState(true);
  const [mobileShowCart, setMobileShowCart] = useState(false);

  const handleCart = () => {
    setMobileShowCart(!mobileShowCart)
  }

  const [query, setQuery] = useState<string>('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setQuery(e.target.value)
    }

  return (
    <main className="mt-24  px-10 mx-auto">

      {/* mobile cart button */}
      <button className="fixed right-2 bottom-2  text-4xl p-2 z-50 bg-white hover:bg-gray-200 shadow-lg  rounded-full xl:hidden border border-green-800" onClick={handleCart} ><RiShoppingCart2Fill className='text-green-800' />
      </button>
      { 
        mobileShowCart && <div>
          <MobileCartModal setMobileShowCart={setMobileShowCart} />
        </div>
      }

     
      <div className='w-full flex justify-between  md:hidden'>
        <input className="w-full text-[#3D3B3B] text-sm font-light rounded-l-md px-5" type="text" placeholder="Search by Category or Items" value={query} onChange={handleChange}/>
        <button >
          <FaSearch className=' text-white bg-[#008C45] w-12 h-[40px] px-4  rounded-r-md' />
        </button> 
      </div>

      <div className='w-full flex justify-between mt-5 md:hidden'>
        <input className="w-full text-[#3D3B3B] text-sm font-light rounded-l-md px-5" type="text" placeholder="Search by Location" value={query} onChange={handleChange}/>
        <button >
          <FaLocationArrow className=' text-white bg-blue-400 w-12 h-[40px] px-4  rounded-r-md' />
        </button> 
      </div>

      <h2 className='text-lg font-semibold mb-6 pt-4'>
        NEAREST FLYERS
      </h2>
      <div className="grid grid-cols-7 gap-4 ">
        <section className="w-full h-[74vh] col-span-7 xl:col-span-5 xxl:col-span-5 ">
          {/* Nearest Fylers Area  */}
          <NearestFlyers catalogs={catalogs} />
        </section>

        <aside className="hidden xl:block w-full h-[74vh] col-span-2 relative">
         
          <div className="fixed">
            <Card styleClass="rounded-md h-[74vh] relative ">

              {
                showCart ?
                  <>
                    <button
                      onClick={() => setShowCart(false)}
                      className="absolute top-4 right-4 z-20">
                      <RiLoginCircleFill className="w-8 h-8 text-green-800" />
                    </button>
                  </>
                  :
                  <>
                    <button
                      onClick={() => setShowCart(true)}
                      className="absolute top-4 right-4 z-20">
                      <RiShoppingCart2Fill className="w-8 h-8 text-green-800" />
                    </button>
                  </>
              }

              {
                !showCart ?
                  <>
                    <div className="w-full grid grid-cols-2">
                      <button
                        onClick={() => setLogin(true)}
                        className="w-full py-3 border-r border-gray-600 text-base font-medium text-gray-800 hover:bg-gray-100 relative">
                        <span>Sign In</span>
                        {
                          login &&
                          <span className="absolute h-[4px] w-4/5 bottom-0 left-0 right-0 mx-auto bg-[#8DC14F] rounded-full"></span>
                        }

                      </button>

                      <button
                        onClick={() => setLogin(false)}
                        className="w-full py-3 border-l border-gray-600 text-base font-medium text-gray-800 hover:bg-gray-100 relative">
                        <span>Sign Up</span>
                        {
                          !login &&
                          <span className="absolute h-[4px] w-4/5 bottom-0 left-0 right-0 mx-auto bg-[#8DC14F] rounded-full"></span>
                        }
                      </button>
                    </div>
                    {login ? <Signin showCart={()=>setShowCart(true)} /> : <Signup shiftTab={()=>setLogin(true)}/>}

                  </>
                  : <>
                    <Cart />

                  </>}

            </Card>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Main;
