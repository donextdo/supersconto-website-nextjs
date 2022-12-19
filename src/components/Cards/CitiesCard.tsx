import { City } from "../../../typings";
import Image from "next/image";
import React from "react";

interface Props {
  city: City;
}

const CitiesCode: React.FC<Props> = ({city}) => {
    return ( 
        <div className="w-full max-w-[12.5rem] min-w-[12.5rem] h-64 rounded-md relative overflow-hidden shadow-sm transition duration-[0.4s] hover:scale-105 cursor-pointer">
        <div>
          <Image src={city.image} fill sizes="width: 100%" alt="{city.title}" />
        </div>
        <div className="absolute bottom-0 backdrop-blur-sm bg-white bg-opacity-30 h-1/3 p-2">
          <h6 className="font-semibold">{city.title}</h6>
          <p className="text-xs">{city.description.substring(0, 50)} ...</p>
        </div>
      </div>
        );
}
 
export default CitiesCode;