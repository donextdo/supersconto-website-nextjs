import { City, Shop } from "../../../typings";
import Image from "next/image";
import React from "react";
import Link from "next/link";

interface Props {
  city: Shop;
}

const CitiesCode: React.FC<Props> = ({ city }) => {
  return (
    // <div className="w-full max-w-[12.5rem] min-w-[12.5rem] h-64 rounded-md relative overflow-hidden shadow-sm transition duration-[0.4s] hover:scale-105 cursor-pointer">
    //     <Link href="/milan">
    //   <div>
    //     <Image src={city.image} fill sizes="width: 100%" alt="{city.title}" />
    //   </div>
    //   <div className="absolute bottom-0 p-2 bg-white backdrop-blur-sm bg-opacity-30 h-1/3">
    //     <h6 className="font-semibold">{city.title}</h6>
    //     <p className="text-xs">{city.description.substring(0, 50)} ...</p>
    //   </div>
    //   </Link>
    // </div>
    <>
    {/* <div className="grid grid-cols-4 gap-4 px-4 py-4 bg-white shadow-md">
      <Link href="/milan">
        <p className="bold text-lg text-[#6d973a] bg-red-500">{city.address.city}</p>
      </Link>
    </div> */}
    <div className="items-center w-40 h-10 gap-3 select-none lg:h-24 md:flex justify-left">
   
    <Link href="/milan">
        <p className="font-semibold  text-lg text-[#6d973a] hover:text-green-800  ">{city.address.city}</p>
      </Link>

</div>

    </>
  );
}

export default CitiesCode;