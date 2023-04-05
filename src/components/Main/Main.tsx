import React, { useState, useEffect, use } from "react";
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
import TextInput from "../Utils/TextInput";
import { FaSearch, FaLocationArrow, FaUserCircle } from "react-icons/fa";

  // core version + navigation, pagination modules:
  import Swiper, { Navigation, Pagination } from 'swiper';
  // import Swiper and modules styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';



interface Props {
  catalogs: Catalog[];
 
}

const Main: React.FC<Props> = ({ catalogs }) => {
  const [login, setLogin] = useState(true);

  const [showCart, setShowCart] = useState(true);
  const [mobileShowCart, setMobileShowCart] = useState(false);

  const handleCart = () => {
    setMobileShowCart(!mobileShowCart);
  };

  const [query, setQuery] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setQuery(e.target.value);
  };

  return (
    <main className="px-10 mx-auto mt-24 overflow-y-hidden">
      {/* mobile cart button */}
     
      <div className="relative  ">
        <div
          onClick={() => handleCart()}
          className="fixed z-50 p-2 text-4xl bg-white border border-green-800 rounded-full shadow-lg right-2 bottom-2 hover:bg-gray-200 scroll-hidden"
        >
          <RiShoppingCart2Fill className="text-green-800" />
        
          </div>
        </div>

      {/* <div
        onClick={() => handleCart()}
        className="fixed z-50 p-2 text-4xl bg-white border border-green-800 rounded-full shadow-lg right-2 bottom-2 hover:bg-gray-200 transition-transform duration-1000 transform "
      >
        <RiShoppingCart2Fill className="text-green-800" />
      </div> */}

      {/* <div className="fixed z-50 p-2 text-4xl bg-white border border-green-800 rounded-full shadow-lg right-2 bottom-2 hover:bg-gray-200 transition-transform duration-1000 transform ">
        <Link href="/SideBar">
    
        <RiShoppingCart2Fill className="text-green-800" />
      </Link></div> */}

      {mobileShowCart && (
        <div>
          <MobileCartModal setMobileShowCart={setMobileShowCart} mobileShowCart={mobileShowCart} />
        </div>
      )}

      <div className="flex justify-between w-full md:hidden ">
        <input
          className="w-full text-[#3D3B3B] text-sm font-light rounded-l-md px-5"
          type="text"
          placeholder="Search by Category or Items"
          value={query}
          onChange={handleChange}
        />
        <button>
          <FaSearch className=" text-white bg-[#008C45] w-12 h-[40px] px-4  rounded-r-md" />
        </button>
      </div>

      <div className="flex justify-between w-full mt-5 md:hidden">
        <input
          className="w-full text-[#3D3B3B] text-sm font-light rounded-l-md px-5"
          type="text"
          placeholder="Search by Location"
          value={query}
          onChange={handleChange}
        />
        <button>
          <FaLocationArrow className=" text-white bg-blue-400 w-12 h-[40px] px-4  rounded-r-md" />
        </button>
      </div>

      <h2 className="pt-4 mb-6 text-lg font-semibold">NEAREST FLYERS</h2>
      <div className="grid grid-cols-7 gap-4 ">
        <section className="w-full h-[74vh] col-span-7 xl:col-span-5 xxl:col-span-5 ">
          {/* Nearest Fylers Area  */}
          <NearestFlyers catalogs={catalogs} />
        </section>

        <aside className="hidden w-full h-[74vh] col-span-2 relative ">
          <div className="fixed shadow-2xl">
            <Card styleClass="rounded-md h-[74vh] relative ">
              {showCart ? (
                <>
                  <button
                    onClick={() => setShowCart(false)}
                    className="absolute z-20 top-4 right-4"
                  >
                    <RiLoginCircleFill className="w-8 h-8 text-green-800" />
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setShowCart(true)}
                    className="absolute z-20 top-4 right-4"
                  >
                    <RiShoppingCart2Fill className="w-8 h-8 text-green-800" />
                  </button>
                </>
              )}

              {!showCart ? (
                <>
                  <div className="grid w-full grid-cols-2">
                    <button
                      onClick={() => setLogin(true)}
                      className="relative w-full py-3 text-base font-medium text-gray-800 border-r border-gray-600 hover:bg-gray-100"
                    >
                      <span>Sign In</span>
                      {login && (
                        <span className="absolute h-[4px] w-4/5 bottom-0 left-0 right-0 mx-auto bg-[#8DC14F] rounded-full"></span>
                      )}
                    </button>

                    <button
                      onClick={() => setLogin(false)}
                      className="relative w-full py-3 text-base font-medium text-gray-800 border-l border-gray-600 hover:bg-gray-100"
                    >
                      <span>Sign Up</span>
                      {!login && (
                        <span className="absolute h-[4px] w-4/5 bottom-0 left-0 right-0 mx-auto bg-[#8DC14F] rounded-full"></span>
                      )}
                    </button>
                  </div>
                  {login ? (
                    <Signin showCart={() => setShowCart(true)} />
                  ) : (
                    <Signup shiftTab={() => setLogin(true)} />
                  )}
                </>
              ) : (
                <>
                  <Cart />
                </>
              )}
            </Card>
          </div>
        </aside>
      </div>

     

      </main>
  );
};

export default Main;

