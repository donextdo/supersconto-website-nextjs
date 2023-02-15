import React, { useState } from "react";
import Card from "../Utils/Card";
import Button from "../Utils/Button";
import NearestFlyers from "../NearestFylers/NearestFlyers";
import { Catelog } from "../../../typings";
import Cart from "../Cart/cart";
import Signin from "../Signin/Signin";
import Link from "next/link";
import Signup from "../Signup/Signup";


interface Props {
  catalogs: Catelog[];
}

const Main: React.FC<Props> = ({ catalogs }) => {
  const [login, setlogin] = useState(true);
  const [showCart, setShowCart] = useState(true);


  return (
    <main className="pt-24 container px-2 mx-auto">
      <div className="grid grid-cols-7 gap-4">
        <section className="w-full h-full col-span-7 sm:col-span-5">
          {/* Nearest Fylers Area  */}
          <NearestFlyers catalogs={catalogs} />
        </section>

        <aside className="hidden lg:block w-full h-full col-span-2">
          {/* Login Area  */}
          <Card styleClass="rounded-md h-full">
            {/* <Cart/> */}

            {
              !showCart ?
                <>
                  <div className="flex justify-around text-center">
                    <div className="pt-2">
                      <button onClick={() => setlogin(false)}>Login </button>
                    </div>
                    <div className="h-14 bg-gray-300 text-gray-300 text-xs">
                      |
                    </div>
                    <div className="border-4 border-b-[#FFFFFF] py-2 border-t-0 border-l-0 border-r-0 w-40">
                      <button onClick={() => setlogin(true)}>Sign up</button>
                    </div>
                  </div>
                  {login ? <Signup /> : <Signin />}
                  <div className="text-center">
                      
                      <button className="bg-[#8DC14F] text-white rounded-lg px-2 py-2" onClick={() => setShowCart(true)} >Show Cart</button>
                      
                    </div>
                </>
                : <>
                  <Cart />
                  <Link href="#">
                    <div className="text-center">
                      
                      <button className="bg-[#8DC14F] text-white rounded-lg px-2 py-2" onClick={() => setShowCart(false)} >Login/Signup</button>
                      
                    </div>
                  </Link>
                </>}
          </Card>
        </aside>
      </div>
    </main>
  );
};

export default Main;
