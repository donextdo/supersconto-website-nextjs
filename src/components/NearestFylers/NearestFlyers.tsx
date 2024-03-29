import React, {useState} from 'react'
import Card from '../Utils/Card'
import Button from '../Utils/Button'
import FlyerCard from '../Cards/FlyerCard'
import { Catalog } from '../../../typings'
import flyer1 from '../../../assets/flyers/flyer_1.jpg'
import flyer2 from '../../../assets/flyers/flyer_2.jpg'
import flyer3 from '../../../assets/flyers/flyer_3.jpg'
import flyer4 from '../../../assets/flyers/flyer_4.jpg'
import flyer5 from '../../../assets/flyers/flyer_5.jpg'
import flyer6 from '../../../assets/flyers/flyer_6.jpg'
import flyer7 from '../../../assets/flyers/flyer_7.jpg'
import Link from "next/link";

interface Props {
    catalogs: Catalog[]
}

const NearestFlyers: React.FC<Props> = ({ catalogs }) => {
    const [selectedCatalog, setSelectedCatalog] = useState<Catalog>()
    const [visible, setVisible] = useState(8)

    // const flyers: Flyer[] = [
    //     {
    //         title: "KREO BRICO AND CASA",
    //         shopName: "shopName",
    //         distance: "10KM",
    //         date: "Untill 24 september",
    //         flyer: flyer1
    //     },
    //     {
    //         title: "KREO BRICO AND CASA",
    //         shopName: "shopName",
    //         distance: "10KM",
    //         date: "Untill 24 september",
    //         flyer: flyer2
    //     },
    //     {
    //         title: "KREO BRICO AND CASA",
    //         shopName: "shopName",
    //         distance: "10KM",
    //         date: "Untill 24 september",
    //         flyer: flyer3
    //     },
    //     {
    //         title: "KREO BRICO AND CASA",
    //         shopName: "shopName",
    //         distance: "10KM",
    //         date: "Untill 24 september",
    //         flyer: flyer4
    //     },
    //     {
    //         title: "KREO BRICO AND CASA",
    //         shopName: "shopName",
    //         distance: "10KM",
    //         date: "Untill 24 september",
    //         flyer: flyer5
    //     },
    //     {
    //         title: "KREO BRICO AND CASA",
    //         shopName: "shopName",
    //         distance: "10KM",
    //         date: "Untill 24 september",
    //         flyer: flyer6
    //     },
    //     {
    //         title: "KREO BRICO AND CASA",
    //         shopName: "shopName",
    //         distance: "10KM",
    //         date: "Untill 24 september",
    //         flyer: flyer7
    //     }
    // ]
    const showMoreItem = () => {
        setVisible((prevValue)=>prevValue + 8)
    }

  return (

   
    <Card styleClass='rounded-md flex flex-col gap-4 h-[80vh] overflow-hidden w-full pb-16'>
                 <div 
        className='w-full h-[80vh] pr-2 grid grid-cols-2  gap-x-2 gap-y-5 justify-items-center
        overflow-y-scroll overflow-x-hidden 
        !scrollbar-thin !scrollbar-track-transparent !scrollbar-thumb-gray-400 sm:grid-cols-4 
        xxl:grid-cols-4 '>

            {catalogs.slice(0,visible).map((catelog, index) => (
                <Link href={`/catalog-preview/${catelog._id}`} key={index}>
                    <FlyerCard flyer={catelog} />
                </Link>
            ))}

        </div>

       <div className='lg:mb-5'>
        <Button styleClass='w-full  bg-[#8DC14F] py-2 px-6 text-base font-medium text-white rounded-md hover:bg-[#8DC14F]/80 ' onClick={showMoreItem}>
            Load Nearest Flyers
        </Button>
        </div>

    </Card>
   
  )
}

export default NearestFlyers