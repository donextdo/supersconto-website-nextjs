import React from 'react'
import Slider from '../Utils/Slider'
import FlyerCard from '../Cards/FlyerCard'
import { Catalog } from '../../../typings'
import flyer1 from '../../../assets/flyers/flyer_1.jpg'
import flyer2 from '../../../assets/flyers/flyer_2.jpg'
import flyer3 from '../../../assets/flyers/flyer_3.jpg'
import flyer4 from '../../../assets/flyers/flyer_4.jpg'
import flyer5 from '../../../assets/flyers/flyer_5.jpg'
import flyer6 from '../../../assets/flyers/flyer_6.jpg'
import flyer7 from '../../../assets/flyers/flyer_7.jpg'
import LatestFlyersCard from '../Cards/LatestFlyerCard'
import Link from "next/link";

interface Props {
    catalogs: Catalog[]
}

const LatestFlyers: React.FC<Props> = ({ catalogs }) => {

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
    //     },
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
    //     },
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

    return (
        <div className='w-full flex flex-col gap-6'>

            <h2 className='text-lg font-semibold'>
                LATEST FLYERS
            </h2>
            <div className="grid grid-cols-7 gap-4">
                <section className="w-full col-span-7 xl:col-span-5">
                    <Slider >

                        {catalogs.map((flyer, index) => (
                            <Link href={`/catalog-preview/${flyer._id}`} key={index}>
                                <LatestFlyersCard flyer={flyer} />
                            </Link>
                            // <LatestFlyersCard flyer={flyer} key={index} />
                        ))}

                    </Slider>
                </section>
                {/* <section className="w-full col-span-2"></section> */}
            </div>



        </div>
    )
}

export default LatestFlyers