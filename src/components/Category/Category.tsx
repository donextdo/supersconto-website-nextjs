import cat_1 from '../../../assets/category/cat_1.png'
import cat_2 from '../../../assets/category/cat_2.png'
import CategoryCard from '../Cards/CategoryCard'
import Slider from '../Utils/Slider'
import { Categories } from '../../../typings'

interface Props {
   categories: Categories
 }
 
const Category: React.FC<Props> = ({categories}) => {
   // const categoryss: Categories[] = [
   //    {
   //       image: cat_1,
   //       name: "New Flyers"
   //    },
   //    {
   //       image: cat_2,
   //       name: "Healthcare"
   //    },
   //    {
   //       image: cat_1,
   //       name: "New Flyers"
   //    },
   //    {
   //       image: cat_2,
   //       name: "Healthcare"
   //    }, {
   //       image: cat_1,
   //       name: "New Flyers"
   //    },
   //    {
   //       image: cat_2,
   //       name: "Healthcare"
   //    },
   //    {
   //       image: cat_1,
   //       name: "New Flyers"
   //    },
   //    {
   //       image: cat_2,
   //       name: "Healthcare"
   //    },
   //    {
   //       image: cat_1,
   //       name: "New Flyers"
   //    },
   //    {
   //       image: cat_2,
   //       name: "Healthcare"
   //    }, {
   //       image: cat_1,
   //       name: "New Flyers"
   //    },
   //    {
   //       image: cat_2,
   //       name: "Healthcare"
   //    },
   //    {
   //       image: cat_1,
   //       name: "New Flyers"
   //    },
   //    {
   //       image: cat_2,
   //       name: "Healthcare"
   //    },
   //    {
   //       image: cat_1,
   //       name: "New Flyers"
   //    },
   //    {
   //       image: cat_2,
   //       name: "Healthcare"
   //    }, {
   //       image: cat_1,
   //       name: "New Flyers"
   //    },
   //    {
   //       image: cat_2,
   //       name: "Healthcare"
   //    }
   // ]


   return (
      <div className='flex flex-col gap-6'>
         <h2 className='text-lg font-semibold'>
            CATEGORY
         </h2>
         <div className="grid grid-cols-7 gap-4">
            <section className="w-full col-span-7 xl:col-span-5 xl:w-[1280px]">
               <Slider>
                  {categories.mainCategories.concat(categories.subCategories).map((category: any, index: number) => (
                     <CategoryCard category={category} key={index} />
                  ))}
               </Slider>
            </section>
            {/* <section className="w-full col-span-2"></section> */}
         </div>


      </div>
   );
}

export default Category;