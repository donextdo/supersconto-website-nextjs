import { Shop } from "../../../typings";
import Image from "next/image";
import React from "react";
import Link from "next/link";

interface Props {
  shop: Shop;
}

const ShopsCard: React.FC<Props> = ({ shop }) => {
  return (
    <Link href={'/'} className="w-[12.5rem] h-48 rounded-lg shadow-md bg-gray-100 flex flex-col overflow-hidden hover:bg-gray-500 hover:text-white">
      <div className="w-full h-[7.5rem]">
        <Image src={shop.image} alt={shop.name} className="w-full h-full object-cover"/>
      </div>

      <div className="px-3 py-2">
        <h6 className="font-semibold text-base">{shop.name}</h6>
        <p className="text-xs">{shop.address}</p>
      </div>
    </Link>
  );
};

export default ShopsCard;
