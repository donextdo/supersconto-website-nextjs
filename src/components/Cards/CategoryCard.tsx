import { Category } from "../../../typings";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  category: Category;
}

const CategoryCard: React.FC<Props> = ({ category }) => {
  return (
    
    <div className="h-24 w-40 flex items-center justify-left gap-3 select-none">
   
        <Image src={category.image} alt={category.name} className='w-5 h-5 object-contain' />
        <Link href={"/category"} className='text-base font-medium'>{category.name} </Link>

    </div>
      
  );
};

export default CategoryCard;
