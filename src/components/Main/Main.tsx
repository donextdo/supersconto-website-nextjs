import React, { useState } from "react";
import Card from "../Utils/Card";
import Button from "../Utils/Button";
import NearestFlyers from "../NearestFylers/NearestFlyers";
import { Catelog } from "../../../typings";
import Cart from "../Cart/cart";
import Signin from "../Signin/Signin";
import Link from "next/link";
import Signup from "../Signup/Signup";
import { RiLoginCircleFill, RiShoppingCart2Fill } from "react-icons/ri";


interface Props {
  catelogs: Catelog[];
}

const Main: React.FC<Props> = ({ catelogs }) => {
  const [login, setLogin] = useState(true);
  const [showCart, setShowCart] = useState(true);


  return (
    <main className="pt-24 container px-2 mx-auto">
      <div className="grid grid-cols-7 gap-4">
        <section className="w-full h-max col-span-5 h-full">
          {/* Nearest Fylers Area  */}
          <NearestFlyers catelogs={catelogs} />
        </section>

        <aside className="w-full h-full col-span-2">
          {/* Login Area  */}
          <Card styleClass="rounded-md h-full relative">
            
            {
              showCart ?
                <>
                  <button 
                  onClick={() => setShowCart(false)} 
                  className="absolute top-4 right-4 z-20">
                    <RiLoginCircleFill className="w-8 h-8 text-green-800"/> 
                  </button>
                </>
                :
                <>
                  <button 
                  onClick={() => setShowCart(true)} 
                  className="absolute top-4 right-4 z-20">
                    <RiShoppingCart2Fill className="w-8 h-8 text-green-800"/> 
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
                  {login ? <Signin /> : <Signup />}
                  
                </>
                : <>
                  <Cart />
                  
                </>}
          </Card>
        </aside>
      </div>
    </main>
  );
};

export default Main;
