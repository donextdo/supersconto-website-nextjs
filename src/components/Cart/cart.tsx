import Image from "next/image";
import sh1 from "../../../assets/shops/sp_1.png";
import sh2 from "../../../assets/shops/sp_2.png";
import flyer1 from "../../../assets/flyers/flyer_1.jpg";
import React, {useEffect, useState} from "react";
import requests from "../../../utils/request";
import {object} from "prop-types";

const Cart = () => {
    const [count, setCount] = useState(0);
    const [cartObj, setCartObj] = useState<any>([]);
    const [order, setOrder] = useState<any>([])

    useEffect(() => {
        const items: [string] = JSON.parse(localStorage.getItem("cartItems")!) ?? []
        if (items.length > 0) {
            fetch(requests.getCatalogBookPageItemByIds, {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    items
                }),
            }).then((response) => response.json())
                .then((responseJson) => {
                    const cloneResponse = [...responseJson]
                    cloneResponse.map(item => {
                        item.cartQuantity = 0
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
        setCartObj({...cartObj, [shop]: filtered});
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

    return (
        // <div mt-2>
        <>
            <div className="text-2xl border-b-2 pb-2">Your Cart</div>
            <div className="flex justify-between items-end pb-3 pt-3 border-b-2">
                <div className="text-1xl">Grand Total $</div>
                <div>{getTotalAmount()}</div>
            </div>
            {Object.keys(cartObj).map((shop) => (

                <div key={`shop${shop}`}>
                    <div className="flex justify-between px-2 border border-gray-200 bg-gray-200 py-2 items-center ">
                        <div className="flex flex-raw gap-8 items-center relative w-1/4 h-6">
                            <Image src={cartObj[shop][0]?.shop_id?.logo_img} alt="cart" fill/>
                        </div>
                        <h6>{shop}</h6>
                        <div>Amount $: {getShopAmount(cartObj[shop])}</div>
                    </div>


                    {cartObj[shop].sort((a: any, b: any) => a.product_name.localeCompare(b.product_name)).map((item: any, index: string) => (
                        <div key={`item${shop + index}`}
                             className="flex flex-raw gap-4 my-4 mx-4 py-2 item-center w-full">

                             <div className="relative w-6 h-6">
                                <Image src={item.product_image} alt="fly" fill />
                            </div>


                            <div>
                                <p>{item.product_name}</p>
                            </div>

                            <div>
                                <h6>${item.unit_price}</h6>
                            </div>

                            <div className="flex flex-raw">
                                <div>
                                    <button className="bg-black px-3 text-white"
                                            onClick={() => handleCart(item, '-', shop)}>
                                        -
                                    </button>
                                </div>
                                <div>
                                    <p className="bg-gray-300 w-10 text-center">{item.cartQuantity}</p>
                                </div>
                                <div>
                                    <button className="bg-black px-3 text-white"
                                            onClick={() => handleCart(item, '+', shop)}>
                                        +
                                    </button>
                                </div>
                            </div>


                            <div>
                                {item.cartQuantity * item.unit_price}
                            </div>
                        </div>
                    ))}
                </div>

            ))}
            {/* </div> */}

        </>
    )

}


export default Cart;