import React, { useEffect, useState } from "react";
import requests from '../utils/request'
import Image from "next/image";
import { RiDeleteBinLine } from 'react-icons/ri';


const Cart = () => {
    const [cartObj, setCartObj] = useState<any>([]);


    useEffect(() => {
        const items: [string] = JSON.parse(localStorage.getItem("cartItems")!) ?? []
        console.log(items)
        if (items.length > 0) {
            fetch(requests.getCatalogBookPageItemByIds, {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    items: items.map((i: any) => i._id)
                }),
            }).then((response) => response.json())
                .then((responseJson) => {
                    const cloneResponse = [...responseJson]
                    cloneResponse.map(item => {
                        const product: any = items.find((i: any) => i._id === item._id)
                        item.cartQuantity = product?.quantity ? product?.quantity : 0
                    })
                    setCartObj(groupBy([...cloneResponse], (v => v.shop_id.shop_name)))
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [])


    const groupBy = (x: any[], f: (arg0: any, arg1: any, arg2: any) => string | number) => x.reduce((a, b, i) => ((a[f(b, i, x)] ||= []).push(b), a), {});

    const handleCart = (item: any, type: string, shop: string) => {
        console.log(item)
        if (type === "-") {
            if (item.cartQuantity <= 0) return
            item.cartQuantity -= 1

        } else {
            if (item.cartQuantity >= item.quantity) return
            item.cartQuantity += 1
        }
        let cartShop = cartObj[shop]
        const filtered = cartShop.filter((it: { _id: any; }) => it._id !== item._id)
        filtered.push(item)
        setCartObj({ ...cartObj, [shop]: filtered });
        // setCartObj(cartShop)
    }

    console.log(cartObj)

    const getShopAmount = (items: any) => {
        return items.reduce((a: any, b: { cartQuantity: number; unit_price: number; }) => {
            a += b.cartQuantity * b.unit_price
            return a
        }, 0)
    }

    const getTotalAmount = () => {
        console.log();
        const allItems = Object.keys(cartObj).map(shop => {
            return cartObj[shop]
        }).flatMap(a => a)

        return allItems.reduce((a, b) => {
            a += b.cartQuantity * b.unit_price
            return a
        }, 0)
    }

    // const togglepopup = () => {
    //     setCheckout(true)
    // }

    // const toggleprint = () => {
    //     setPrint(true)
    // }

    return (
        <div className="fixed inset-0 z-50 grid place-items-center bg-slate-900 bg-opacity-10">
            <div className="py-4 px-4 flex gap-6 flex-col relative bg-white shadow-md rounded-md w-11/12  md:w-9/12 lg:w-4/12 ">

                <div className="text-2xl border-b-2 pb-2">Your Cart</div>
                <div className="flex justify-between items-end pb-3  border-b-2">
                    <div className="text-1xl">Grand Total $</div>
                    <div>{getTotalAmount()}</div>
                </div>

                <div className="overflow-y-auto overflow-x-hidden h-[46vh] ">
                    {Object.keys(cartObj).map((shop) => (
                        <div key={`shop${shop}`} >
                            <div className="flex justify-between px-2 border border-gray-200 bg-gray-200 py-2 items-center ">
                                <div className="flex flex-raw gap-8 items-center relative rounded-lg">
                                        <img src={cartObj[shop][0]?.shop_id?.logo_img} alt="fly" className="object-contain w-full h-8" />
                                </div>
                                <h6>{shop}</h6>
                                <div>Amount $: {getShopAmount(cartObj[shop])}</div>
                            </div>

                            {cartObj[shop].sort((a: any, b: any) => a.product_name.localeCompare(b.product_name)).map((item: any, index: string) => (
                                <div key={`item${shop + index}`} className='grid grid-cols-8 gap-1 py-2'>
                                    <div className="col-span-2 rounded-lg overflow-hidden">
                                        <img src={item.product_image} alt="fly" className="object-contain w-full h-20" /></div>
                                    <div className="col-span-3">
                                        <p className="bold text-lg">{item.product_name}</p>
                                        <p className="text-gray-400">${item.unit_price}</p>
                                    </div>
                                    <div className="mx-auto flex items-end"><button><RiDeleteBinLine className="text-2xl text-red-400"/></button></div>
                                    <div className="col-span-2 text-right ">
                                        <p className="mb-4">${item.cartQuantity * item.unit_price}</p>
                                        <div className="flex col-span-2 items-center justify-between border border-green-800 rounded-md">
                                            <div className="flex items-center">
                                                <button className="text-3xl text-green-800 pl-4"
                                                    onClick={() => handleCart(item, '-', shop)}>
                                                    -
                                                </button>
                                            </div>
                                            <div className="flex items-center">
                                                <p className=" w-10 text-center">{item.cartQuantity}</p>
                                            </div>
                                            <div className="flex items-center">
                                                <button className="text-3xl text-green-800 pr-4 flex items-center"
                                                    onClick={() => handleCart(item, '+', shop)}>
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    

                                </div>
                            ))}
                        </div>

                    ))}
                </div>



            </div>
        </div>
    );
}

export default Cart;