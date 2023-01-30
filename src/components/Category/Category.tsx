import cat_1 from '../../../assets/category/cat_1.png'
import cat_2 from '../../../assets/category/cat_2.png'
import CategoryCard from '../Cards/CategoryCard'
import Slider from '../Utils/Slider'
import { Category } from '../../../typings'

const Category = () => {
    const categorys: Category[] = [
         {
            image: cat_1,
            name:"New Flyers"
         } ,
         {
            image: cat_2,
            name:"Healthcare"
         },
         {
            image: cat_1,
            name:"New Flyers"
         } ,
         {
            image: cat_2,
            name:"Healthcare"
         }, {
            image: cat_1,
            name:"New Flyers"
         } ,
         {
            image: cat_2,
            name:"Healthcare"
         },
         {
            image: cat_1,
            name:"New Flyers"
         } ,
         {
            image: cat_2,
            name:"Healthcare"
         },
         {
            image: cat_1,
            name:"New Flyers"
         } ,
         {
            image: cat_2,
            name:"Healthcare"
         }, {
            image: cat_1,
            name:"New Flyers"
         } ,
         {
            image: cat_2,
            name:"Healthcare"
         },
         {
            image: cat_1,
            name:"New Flyers"
         } ,
         {
            image: cat_2,
            name:"Healthcare"
         },
         {
            image: cat_1,
            name:"New Flyers"
         } ,
         {
            image: cat_2,
            name:"Healthcare"
         }, {
            image: cat_1,
            name:"New Flyers"
         } ,
         {
            image: cat_2,
            name:"Healthcare"
         }
    ]

    
    return (  
       <div className='flex flex-col gap-6'>
            <h2 className='text-lg font-semibold'>
            CATEGORY
        </h2>

        <Slider>
            {categorys.map((category, index)=>(
               <CategoryCard category={category} key={index}/>
            ))}
        </Slider>
        
       </div>
    );
}
 
export default Category;