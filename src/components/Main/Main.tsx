import React, { useState } from 'react'
import Card from '../Utils/Card'
import Button from '../Utils/Button'
import FlyerCard from '../Flyer/FlyerCard'
import { Flyer } from '../../../typings'
import flyer1 from '../../../assets/flyers/flyer_1.jpg'

const Main = () => {

    const flyers: Flyer[] = [
        {
            title: "KREO BRICO AND CASA",
            shopName: "shopName",
            distance: "10KM",
            date: "Untill 24 september",
            flyer: flyer1
        }
    ]

  return (
    <main className="min-h-screen pt-24 container px-2 mx-auto">
                
        <div className='grid grid-cols-7 gap-4'>

            <section className='w-full h-32 col-span-5'>
                {/* Nearest Fylers Area  */}
                <Card styleClass='rounded-md flex flex-col gap-4'>

                    <div className='w-full grid grid-cols-4 grid-rows-2 gap-4 overflow-hidden'>
                        {flyers.map((flyer) => (
                            <FlyerCard flyer={flyer} />
                        ))}
                    </div>


                    <Button styleClass='w-full bg-[#8DC14F] py-2 px-6 text-base font-medium text-white rounded-md hover:bg-[#8DC14F]/80'>
                        Load Nearest Flyers
                    </Button>
                </Card>
            </section>

            <aside className='w-full h-32 col-span-2'>
                {/* Login Area  */}
                <Card styleClass='rounded-md' bgColor='bg-black'/>
            </aside>

        </div>

    </main>
  )
}

export default Main