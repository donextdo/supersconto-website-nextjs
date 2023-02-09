import Card from "../../src/components/Utils/Card";
import Header from "../../src/components/Header/Header";
import requests from "../../utils/request";
import React, {useEffect, useState} from "react";
import Image, {StaticImageData} from "next/image";
import FlyerCard from "../../src/components/Cards/FlyerCard";
import LatestItemCard from "../../src/components/Cards/LatestItemCard";
import Link from "next/link";

interface Props {
    shop: any
}

const ShopPages: React.FC<Props> = ({shop}) => {
    const [items, setItems] = useState([])
    useEffect(() => {
        console.log(shop);
        if (shop) {
            const items = shop.catelog_books.flatMap((book: { pages: any[]; }) =>
                book.pages.flatMap(page =>
                    page.items
                )
            )

            setItems(items)
        }

    }, [shop])

    console.log({items})
    return (
        <>
            <Header/>
            <div className="pt-24 container px-2 mx-auto">
                <h2 className='text-lg font-semibold my-4'>
                    Shops of City
                </h2>
                <div className="grid grid-cols-7 gap-4">
                    <section className="w-full h-max col-span-5">
                        <Card styleClass="rounded-md flex flex-col gap-4">
                            <div
                                className="w-full h-[60vh] pr-2 grid grid-cols-4 gap-4
                    overflow-y-scroll overflow-x-hidden 
                    !scrollbar-thin !scrollbar-track-transparent !scrollbar-thumb-gray-400
                    xxl:grid-cols-5"
                            >
                                {items.map((item: any, index: number) => (
                                    <div key={`page_image ${index}`} className="hover:scale-105 cursor-pointer">
                                        <Link href={`/catalog-preview/${item.catelog_book_id}`}
                                              target="_blank"><LatestItemCard item={item} key={index}/></Link>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </section>

                    <aside className="w-full h-full col-span-2">
                        {/* Shop deatils  */}

                        <Card styleClass="rounded-md h-full" bgColor="bg-white">
                            <div>
                                <h6><span>Shop Name:- </span>{shop.shop_name}</h6>
                                <h6><span>TP :- </span>{shop.telephone}</h6>
                                <h6><span>Address :- </span>{shop.address.address_line1}</h6>
                                <h6><span>City :- </span>{shop.address.city}</h6>
                                <h6></h6>
                            </div>
                        </Card>
                    </aside>
                </div>
            </div>
        </>
    );
}

export default ShopPages;

export const getServerSideProps = async (context: any) => {

    const [shop] = await Promise.all([
        fetch(requests.findShopById(context.query.shopId)).then((res) => res.json())
    ])


    return {
        props: {
            shop: shop
        }
    }

}