import { Shop } from "../../../typings";
import Image from "next/image";
import React from "react";
import Link from "next/link";

interface Props {
  shop: Shop;
}

const ShopsCard: React.FC<Props> = ({ shop }) => {
  console.log(shop)

  return (
    <div className="w-[12.5rem] h-48 rounded-lg shadow-md bg-gray-100 flex flex-col overflow-hidden hover:bg-gray-500 hover:text-white">
      <div className="w-[12.5rem] h-40 relative overflow-hidden">
        <Image 
          src={shop.logo_img} 
          alt={shop.shop_name} 
          // fill
          style={{objectFit:"cover"}}
          sizes='height: 100%'
          fill
           />
      </div>

      <div className="px-3 py-2">
        <h6 className="font-semibold text-base">{shop.shop_name}</h6>
        <p className="text-xs">{shop.address.address_line1}</p>
      </div>
    </div>
  );
};

export default ShopsCard;
