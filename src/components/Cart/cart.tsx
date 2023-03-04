import Image from "next/image";
import sh1 from "../../../assets/shops/sp_1.png";
import sh2 from "../../../assets/shops/sp_2.png";
import flyer1 from "../../../assets/flyers/flyer_1.jpg";
import React, { useEffect, useState, useRef, forwardRef } from "react";
import requests from "../../../utils/request";
import { object } from "prop-types";
import CheckoutPop from "../CheckoutPop/CheckoutPop";
import Print from "../Print/Print";
import { useReactToPrint } from 'react-to-print';
import { RiDeleteBinLine } from 'react-icons/ri';
import { FiDownload, FiPrinter } from 'react-icons/fi';
import jsPDF from 'jspdf';


const Cart = () => {
    const [count, setCount] = useState(0);
    const [cartObj, setCartObj] = useState<any>([]);
    const [order, setOrder] = useState<any>([])
    const [checkout, setCheckout] = useState(false);
    const [print, setPrint] = useState(false);

    useEffect(() => {
        fetchCart()
    }, [])

    async function fetchCart() {
        const items: [string] = JSON.parse(localStorage.getItem("cartItems")!) ?? []

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
    }


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
    const componentRef = useRef(null);
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,

    });



    // function PrintButton() {
    //     const componentRef = React.useRef();

    //     const handlePrint = useReactToPrint({
    //       content: () => componentRef.current,
    //     });

    const handleDelete = (id: string) => {
        const cartItems: [any] = JSON.parse(localStorage.getItem("cartItems")!) ?? []

        const filteredCartItems = cartItems.filter(item => item._id !== id)

        if (filteredCartItems.length == 0) {
            localStorage.removeItem("cartItems")
        }
        else {
            localStorage.setItem("cartItems", JSON.stringify(filteredCartItems))
        }

        fetchCart()
    }

    

    return (
        // <div mt-2>
        <div className="w-80 axl:w-[350px] xxl:w-[400px] xxxl:w-[480px] h-full relative" >
            <div className="text-2xl border-b-2 pb-2">My Shopping List</div>
            <div className="flex justify-between items-end pb-3 pt-3 border-b-2">
                <div className="text-1xl font-bold">Grand Total </div>
                <div className="font-bold">Є {getTotalAmount()}</div>
            </div>

            <div className="overflow-y-auto overflow-x-hidden h-[46vh] ">
                {Object.keys(cartObj).map((shop) => (

                    <div key={`shop${shop}`} >
                        <div className="flex justify-between px-2 border border-gray-200 bg-gray-200 py-2 items-center ">
                            <div className="flex flex-raw items-center relative ">
                                <img src={cartObj[shop][0]?.shop_id?.logo_img} alt="fly" className="object-contain w-full h-8" />

                                <p className="text-xl font-semibold">{shop}</p>
                            </div>

                            <div className="font-bold">Є : {getShopAmount(cartObj[shop])}</div>

                        </div>


                        {cartObj[shop].sort((a: any, b: any) => a.product_name.localeCompare(b.product_name)).map((item: any, index: string) => (
                            <div key={`item${shop + index}`}
                                className="grid grid-cols-8 gap-1 my-4 mx-2 py-2 item-center w-full pr-6">

                                <div className="  overflow-hidden ">
                                    <img src={item.product_image} alt="fly" className="object-contain w-10 h-10 bg-gray-300" />
                                </div>
                                {/* <div></div> */}
                                <div className="col-span-3 pl-1">
                                    <p className="font-semibold text-lg">{item.product_name}</p>
                                    <p className="text-gray-400">Є{item.unit_price}</p>
                                </div>
                                <div className="mx-auto flex items-end"><button><RiDeleteBinLine onClick={() => handleDelete(item._id)} className="text-xl text-red-400" /></button>
                                </div>

                                <div className="col-span-3 text-right">
                                    <p className="mb-5 font-semibold">Є{item.cartQuantity * item.unit_price}</p>
                                    <div className="flex flex-raw justify-end">
                                        <div>
                                            <button className="bg-green-800 px-3 text-white rounded-l-md"
                                                onClick={() => handleCart(item, '-', shop)}>
                                                -
                                            </button>
                                        </div>
                                        <div>
                                            <p className="bg-gray-50 w-10 text-center">{item.cartQuantity}</p>
                                        </div>
                                        <div>
                                            <button className="bg-green-800 px-3 text-white rounded-r-md"
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
            <div className="flex justify-between absolute left-0 right-0 bottom-8">

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
                {/* <Cart ref={componentRef} /> */}

                <button
                    onClick={toggleprint}
                    className={`bg-[#8DC14F] text-white rounded-lg px-2 py-2 flex-1 mx-1`}>Print</button>
                {
                    print && (
                        <div>
                            <Print setPrint={setPrint} />
                        </div>
                    )
                }
                
            </div>
            {/* </div> */}

        </div>
    )

}


export default Cart;