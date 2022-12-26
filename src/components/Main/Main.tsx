import React, { useState } from 'react'
import Card from '../Utils/Card'
import Button from '../Utils/Button'
import NearestFlyers from '../NearestFylers/NearestFlyers'
import { Catelog } from '../../../typings'
import Cart from "../Cart/cart";

interface Props {
  catelogs: Catelog[]
}

const Main: React.FC<Props> = ({catelogs}) => {

  return (
    <main className="pt-24 container px-2 mx-auto">
                
        <div className='grid grid-cols-7 gap-4'>

            <section className='w-full h-max col-span-5'>
                {/* Nearest Fylers Area  */}
                <NearestFlyers catelogs={catelogs}/>
            </section>

            <aside className='w-full h-full col-span-2'>
                {/* Login Area  */}
                <Card styleClass='rounded-md h-full'>
                    <Cart/>
                </Card>
            </aside>

        </div>

    </main>
  )
}

export default Main