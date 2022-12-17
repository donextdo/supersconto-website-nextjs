import React, { useState } from 'react'
import Card from '../Utils/Card'
import Button from '../Utils/Button'
import FlyerCard from '../Flyer/FlyerCard'
import { Flyer } from '../../../typings'
import flyer1 from '../../../assets/flyers/flyer_1.jpg'
import flyer2 from '../../../assets/flyers/flyer_2.jpg'
import flyer3 from '../../../assets/flyers/flyer_3.jpg'
import flyer4 from '../../../assets/flyers/flyer_4.jpg'
import flyer5 from '../../../assets/flyers/flyer_5.jpg'
import flyer6 from '../../../assets/flyers/flyer_6.jpg'
import flyer7 from '../../../assets/flyers/flyer_7.jpg'

const Main = () => {

    const flyers: Flyer[] = [
        {
            title: "KREO BRICO AND CASA",
            shopName: "shopName",
            distance: "10KM",
            date: "Untill 24 september",
            flyer: flyer1
        },
        {
            title: "KREO BRICO AND CASA",
            shopName: "shopName",
            distance: "10KM",
            date: "Untill 24 september",
            flyer: flyer2
        },
        {
            title: "KREO BRICO AND CASA",
            shopName: "shopName",
            distance: "10KM",
            date: "Untill 24 september",
            flyer: flyer3
        },
        {
            title: "KREO BRICO AND CASA",
            shopName: "shopName",
            distance: "10KM",
            date: "Untill 24 september",
            flyer: flyer4
        },
        {
            title: "KREO BRICO AND CASA",
            shopName: "shopName",
            distance: "10KM",
            date: "Untill 24 september",
            flyer: flyer5
        },
        {
            title: "KREO BRICO AND CASA",
            shopName: "shopName",
            distance: "10KM",
            date: "Untill 24 september",
            flyer: flyer6
        },
        {
            title: "KREO BRICO AND CASA",
            shopName: "shopName",
            distance: "10KM",
            date: "Untill 24 september",
            flyer: flyer7
        }
    ]

  return (
    <main className="pt-24 container px-2 mx-auto">
                
        <div className='grid grid-cols-7 gap-4'>

            <section className='w-full h-max col-span-5'>
                {/* Nearest Fylers Area  */}
                <Card styleClass='rounded-md flex flex-col gap-4'>

                    <div 
                    className='w-full h-[60vh] pr-2 grid grid-cols-4 gap-4 
                    overflow-y-scroll overflow-x-hidden 
                    !scrollbar-thin !scrollbar-track-transparent !scrollbar-thumb-gray-400
                    xxl:grid-cols-5'>

                        {flyers.map((flyer) => (
                            <FlyerCard flyer={flyer} />
                        ))}

                    </div>


                    <Button styleClass='w-full bg-[#8DC14F] py-2 px-6 text-base font-medium text-white rounded-md hover:bg-[#8DC14F]/80'>
                        Load Nearest Flyers
                    </Button>
                </Card>
            </section>

            <aside className='w-full h-full col-span-2'>
                {/* Login Area  */}
                <Card styleClass='rounded-md h-full' bgColor='bg-black'/>
            </aside>

        </div>

    </main>
  )
}

export default Main