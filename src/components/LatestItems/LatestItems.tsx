import React from 'react'
import Slider from '../Utils/Slider'
import { Item } from '../../../typings'
import flyer1 from '../../../assets/flyers/flyer_1.jpg'
import flyer2 from '../../../assets/flyers/flyer_2.jpg'
import flyer3 from '../../../assets/flyers/flyer_3.jpg'
import flyer4 from '../../../assets/flyers/flyer_4.jpg'
import flyer5 from '../../../assets/flyers/flyer_5.jpg'
import flyer6 from '../../../assets/flyers/flyer_6.jpg'
import flyer7 from '../../../assets/flyers/flyer_7.jpg'
import LatestItemCard from '../Cards/LatestItemCard'

interface Props {
    items: Item[]
}

const LatestItems: React.FC<Props> = ({ items }) => {

    // const items: Item[] = [
    //     {
    //         name: "KREO BRICO AND CASA",
    //         price: "100.00",
    //         image: flyer1
    //     },
    //     {
    //         name: "MIGROSS SUPERSTORE",
    //         price: "12.00",
    //         image: flyer2
    //     },
    //     {
    //         name: "COMET",
    //         price: "230.00",
    //         image: flyer3
    //     },
    //     {
    //         name: "DYSON PROMO",
    //         price: "780.00",
    //         image: flyer4
    //     },
    //     {
    //         name: "DORECA",
    //         price: "23.00",
    //         image: flyer5
    //     },
    //     {
    //         name: "KREO BRICO AND CASA",
    //         price: "230.00",
    //         image: flyer6
    //     },
    //     {
    //         name: "KREO BRICO AND CASA",
    //         price: "234.00",
    //         image: flyer7
    //     },
    //     {
    //         name: "KREO BRICO AND CASA",
    //         price: "100.00",
    //         image: flyer1
    //     },
    //     {
    //         name: "MIGROSS SUPERSTORE",
    //         price: "12.00",
    //         image: flyer2
    //     },
    //     {
    //         name: "COMET",
    //         price: "230.00",
    //         image: flyer3
    //     },
    //     {
    //         name: "DYSON PROMO",
    //         price: "780.00",
    //         image: flyer4
    //     },
    //     {
    //         name: "DORECA",
    //         price: "23.00",
    //         image: flyer5
    //     },
    //     {
    //         name: "KREO BRICO AND CASA",
    //         price: "230.00",
    //         image: flyer6
    //     },
    //     {
    //         name: "KREO BRICO AND CASA",
    //         price: "234.00",
    //         image: flyer7
    //     },
    // ]

    return (
        <div className='w-full flex flex-col gap-6'>

            <h2 className='text-lg font-semibold'>
                LATEST ITEMS
            </h2>

            <div className="grid grid-cols-7 gap-4">
                <section className="w-full col-span-7 xl:col-span-5">
                    <Slider >

                        {items.map((item, index) => (
                            <LatestItemCard item={item} key={index} />
                        ))}

                    </Slider>
                </section>

                <section className="w-full col-span-2"></section>

            </div>



        </div>
    )
}

export default LatestItems