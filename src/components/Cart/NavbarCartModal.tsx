import React, { useEffect, useState } from "react";
import requests from '../../../utils/request'
import Image from "next/image";
import { RiDeleteBinLine } from 'react-icons/ri';
import CheckoutPop from "../CheckoutPop/CheckoutPop";
import Print from "../Print/Print";
import { FaPlus, FaMinus } from 'react-icons/fa';


const NavbarCartModal = () => {
    const [cartObj, setCartObj] = useState<any>([]);
    const [checkout, setCheckout] = useState(false);
    const [print, setPrint] = useState(false);


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

    const togglepopup = () => {
        setCheckout(true)
    }

    const toggleprint = () => {
        setPrint(true)
    }

    return (
        <div className="fixed inset-0 z-50 bg-slate-900 bg-opacity-0 flex justify-end top-20 max-h-[600px] ">
            <div className="py-4 px-4 flex gap-6 flex-col bg-gray-50 shadow-md rounded-md w-11/12 md:w-9/12 lg:w-6/12 xxl:w-5/12">

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
                                    <div className=" rounded-lg overflow-hidden ">
                                        <img src={item.product_image} alt="fly" className="object-contain w-full h-20" />
                                    </div>
                                    <div></div>
                                    <div className="col-span-3">
                                        <p className="bold text-lg">{item.product_name}</p>
                                        <p className="text-gray-400">${item.unit_price}</p>
                                    </div>
                                    <div className="mx-auto flex items-end pb-0.5"><button><RiDeleteBinLine className="text-2xl text-red-400" /></button></div>
                                    <div className="col-span-2 text-right ">
                                        <p className="mb-5">${item.cartQuantity * item.unit_price}</p>
                                        <div className="flex col-span-2 items-center justify-between border-2 w-full border-green-800 rounded-md py-1 px-4">
                                            <div className="flex items-center">
                                                <button className="text-2xl text-green-800  "
                                                    onClick={() => handleCart(item, '-', shop)}>
                                                    <FaMinus />
                                                </button>
                                            </div>
                                            <div className="flex items-center">
                                                <p className=" w-10 text-xl text-center">{item.cartQuantity}</p>
                                            </div>
                                            <div className="flex items-center">
                                                <button className="text-2xl text-green-800  flex items-center"
                                                    onClick={() => handleCart(item, '+', shop)}>
                                                    <FaPlus />
                                                </button>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            ))}
                        </div>

                    ))}
                </div>
                <div className="mb-4 flex justify-between mt-12">

                    <button disabled={Object.keys(cartObj).length === 0} className={`bg-[#8DC14F] text-white rounded-lg px-2 py-2 flex-1 mx-1 ${Object.keys(cartObj).length === 0 ? 'bg-opacity-50' : ''}`} onClick={() => {
                        localStorage.removeItem("cartItems")
                        setCartObj({})
                    }}>Clear cart</button>
                    <button onClick={togglepopup} disabled={Object.keys(cartObj).length === 0} className={`bg-[#8DC14F] text-white rounded-lg px-2 py-2 flex-1 mx-1 ${Object.keys(cartObj).length === 0 ? 'bg-opacity-50' : ''}`}>Checkout</button>
                    {
                        checkout && (
                            <div>
                                <CheckoutPop setCheckout={setCheckout} cartObj={cartObj} getShopAmount={getShopAmount} getTotalAmount={getTotalAmount} handleCart={handleCart} />
                            </div>
                        )
                    }
                    {/*<button onClick={toggleprint} disabled={Object.keys(cartObj).length === 0} className={`bg-[#8DC14F] text-white rounded-lg px-2 py-2 flex-1 mx-1 ${Object.keys(cartObj).length === 0 ? 'bg-opacity-50': ''}`}>Print</button>*/}
                    <button onClick={toggleprint} disabled className={`bg-[#8DC14F] text-white rounded-lg px-2 py-2 flex-1 mx-1 bg-opacity-50`}>Print</button>
                    {
                        print && (
                            <div>
                                <Print setPrint={setPrint} />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default NavbarCartModal;