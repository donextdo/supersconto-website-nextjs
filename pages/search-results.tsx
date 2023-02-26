import React, { useState } from 'react'
import Header from "../src/components/Header/Header";
import { http } from '../utils/request'
import Card from '../src/components/Utils/Card'
import { Shop, Item } from "../typings";
import ShopsCard from "../src/components/Cards/ShopsCard";
import LatestItemCard from "../src/components/Cards/LatestItemCard"
import Link from "next/link";

interface Props {
    shops: Shop[],
    products: Item[],
    query: string
}

const SearchResults: React.FC<Props> = ({shops, products, query}) => {

  return (
    <>
        <Header/>
        <div className="pt-24 container px-2 mx-auto flex flex-col gap-8">

            <h3 className='text-lg font-semibold text-gray-800'>{ `Showing results for "${query}"` }</h3>

            {
               shops.length > 0 && 
                <div className="w-full flex flex-col gap-4">
                    <h4 className='text-base font-semibold text-gray-800'>Shops</h4>
                    <Card>
                        <div
                            className="w-full h-max pr-2 grid grid-cols-5 gap-6
                            overflow-y-scroll overflow-x-hidden 
                            !scrollbar-thin !scrollbar-track-transparent !scrollbar-thumb-gray-400
                            xxl:grid-cols-5"
                            >
                                    
                                {shops.map((shop, index) => (
                                <Link href={`/shop-preview/${shop._id}`} key={index}>
                                    <ShopsCard shop={shop} key={index} />
                                </Link>
                                ))}

                        </div>
                    </Card>
                </div>
            }

            {
               products.length > 0 && 
                <div className="w-full flex flex-col gap-4">
                    <h4 className='text-base font-semibold text-gray-800'>Products</h4>
                    <Card>
                        <div
                            className="w-full h-max pr-2 grid grid-cols-5 gap-4
                            overflow-y-scroll overflow-x-hidden 
                            !scrollbar-thin !scrollbar-track-transparent !scrollbar-thumb-gray-400
                            xxl:grid-cols-5"
                            >
                                    
                                {products.map((item, index) => (
                                    <LatestItemCard item={item} key={index} />
                                ))}

                        </div>
                    </Card>
                </div>
            }

            {
                shops.length == 0 && products.length == 0 &&
                <h4 className='text-base font-semibold text-gray-800'>{ `No results for "${query}"` }</h4>
            }
        </div>
    </>
  )
}

export default SearchResults


export const getServerSideProps = async (context: any) => {

    const { data } = await http.post('/search', {
        query: context.query.query
    })

    return {
        props: {
            shops: data.shops,
            products: data.products,
            query: context.query.query
        }
    }

}