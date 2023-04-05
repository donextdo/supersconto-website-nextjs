import { Categories } from "../../../typings";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  category: Categories;
}

const CategoryCard: React.FC<Props> = ({ category }) => {
  return (
    
    <div className="items-center w-40 h-10 gap-3 lg:h-24 md:flex justify-left">
   
        {/* <Image src={category.image} alt={category.name} className='object-contain w-5 h-5' /> */}
        <Link href={"/category"} className='text-lg  text-[#8DC14F] hover:text-green-800 font-semibold '>{category.name} </Link>

    </div>
      
  );
};

export default CategoryCard;
