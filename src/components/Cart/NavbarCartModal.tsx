import React, { useEffect, useState,useRef } from "react";
import requests from '../../../utils/request'
import Image from "next/image";
import { RiDeleteBinLine } from 'react-icons/ri';
import CheckoutPop from "../CheckoutPop/CheckoutPop";
import Print from "../Print/Print";
import { FaPlus, FaMinus } from 'react-icons/fa';
import { HiOutlineShoppingBag } from "react-icons/hi";


const NavbarCartModal = ({ref,}:any) => {
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

    const handleDelete = () => {
        
        // const newItems = shop.filter((item)=>item._id != _id)
        // setCartObj(newItems)
    }

    return (
        <div ref={ref} className="fixed inset-0 z-50 bg-slate-900 bg-opacity-0 flex justify-end top-20 max-h-[600px] ">
            <div className="flex flex-col w-11/12 gap-6 px-4 py-4 rounded-md shadow-md bg-gray-50 md:w-9/12 lg:w-5/12 xxl:w-2/5">

            <div className=" text-[20px] text-center mt-5 font-ff-headings flex flex-wrap justify-center ">
              <div className="text-[30px] text-center mx-2 ">
              <HiOutlineShoppingBag />{" "}
                 </div>
               Your Cart
           </div>
                <div className="flex items-end justify-between pb-3 border-b-2">
                    <div className="text-[16px]">Grand Total Є</div>
                    <div className="text-[16px]">{getTotalAmount()}</div>
                </div>

                <div className="overflow-y-auto overflow-x-hidden h-[46vh] ">
                    {Object.keys(cartObj).map((shop) => (
                        <div key={`shop${shop}`} >
                            <div className="flex items-center justify-between px-2 py-2 bg-gray-200 border border-gray-200 ">
                                <div className="relative flex items-center gap-8 rounded-lg flex-raw">
                                    <img src={cartObj[shop][0]?.shop_id?.logo_img} alt="fly" className="object-contain w-full h-8" />
                                </div>
                                <p className="text-[16px]">{shop}</p>
                                <div>{"  "}</div>
                                <div className="text-[16px]">Є: {getShopAmount(cartObj[shop])}</div>
                            </div>

                            {cartObj[shop].sort((a: any, b: any) => a.product_name.localeCompare(b.product_name)).map((item: any, index: string) => (
                                <div key={`item${shop + index}`} className='grid grid-cols-8 gap-1 py-2'>
                                    <div className="overflow-hidden rounded-lg ">
                                        <img src={item.product_image} alt="fly" className="object-contain w-full h-20" />
                                    </div>
                                   
                                    <div className="col-span-3 ml-2">
                                         <p className="text-[16px]">{item.product_name}</p>
                                        <p className="text-gray-400 text-[16px]">Є {item.unit_price}</p>
                                    </div>
                                    <div></div>
                                    <div className="mx-auto flex items-end pb-0.5"><button><RiDeleteBinLine onClick={()=>handleDelete()} className="text-2xl text-red-400"/></button></div>
                                    <div className="col-span-2 text-right ">
                                        <p className="mb-5">Є {item.cartQuantity * item.unit_price}</p>
                                        <div className="flex items-center justify-between w-full col-span-2 px-4 py-1 border-2 border-green-800 rounded-md">
                                            <div className="flex items-center">
                                                <button className="text-[16px] text-green-800 "
                                                    onClick={() => handleCart(item, '-', shop)}>
                                                    <FaMinus />
                                                </button>
                                            </div>
                                            <div className="flex items-center">
                                                <p className="w-10 text-[16px] text-center ">{item.cartQuantity}</p>
                                            </div>
                                            <div className="flex items-center">
                                                <button className="flex items-center text-[16px] text-green-800"
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
                <div className="flex justify-between mt-12 mb-4">

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
                    <button onClick={toggleprint}  className={`bg-[#8DC14F] text-white rounded-lg px-2 py-2 flex-1 mx-1 `}>Print</button>
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