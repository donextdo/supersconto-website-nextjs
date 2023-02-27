import Image from "next/image";
import sh1 from "../../../assets/shops/sp_1.png";
import React, { useEffect, useState, useRef } from "react";
import { useReactToPrint } from 'react-to-print';
import { GrFormClose } from 'react-icons/gr';
import requests from "../../../utils/request";



interface Props {
    setPrint: any

}

const Print: React.FC<Props> = ({ setPrint}) => {

    
    const [cartObj, setCartObj] = useState<any>([]);
    const [order, setOrder] = useState<any>([])
    

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
   
    const componentRef = useRef(null);
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const printClose = () => {
        setPrint(false)
    }
    return (
        <div className="fixed inset-0 z-50 grid place-items-center bg-slate-900 bg-opacity-70" >
            <div className="py-6 px-4 flex gap-6 flex-col relative bg-white shadow-lg rounded-md w-2/5">
                <div id="print-container">
                    
                    <section ref={componentRef}>
                        <div className=" mt-2 text-2xl bold">Shopping List</div>
                    {Object.keys(cartObj).map((shop) => (
                    <div key={`shop${shop}`} >

                   
                        <div className="flex justify-between px-2 border border-gray-200 bg-gray-200 py-2 items-center mt-2">
                            <div className="flex flex-raw gap-8 items-center">
                                <Image src={sh1} alt="cart" className="h-10 w-16" />
                                <h6>shopName</h6>
                            </div>
                            <div>Amount </div>
                        </div>


                        <div className="grid grid-cols-5 gap-4 my-4 mx-4 py-2 item-center w-full">
                            {/* 1st column */}
                            < div >
                                <Image src={sh1} alt="fly" className="h-10 w-10" />
                            </div>

                            {/* 2nd column */}
                            <div>
                                <p>name</p>
                            </div>

                            {/* 3rd */}
                            <div>
                                <h6>unit price</h6>
                            </div>

                            {/* 4th column */}
                            <div className="flex flex-raw">
                                <h6>count</h6>
                            </div>

                            {/* 5th column */}

                            <div className="text-right pr-5">
                                Full amount
                            </div>
                        </div>

                        <div className="text-right pr-2">
                            <div>Grand Total - {getTotalAmount()}</div>
                        </div>
                        </div>

))}

                    </section>
                    <div className="grid grid-cols-3 gap-4 text-center mt-4 mx-20">
                        <div className="col-span-2"><button onClick={handlePrint} className="w-full bg-[#8DC14F] rounded-md py-2 ">Print</button></div>
                        <div className=""><button className="flex items-center justify-center rounded-md  px-2.5 py-[5px] text-3xl bg-red-500 w-full" onClick={printClose}><GrFormClose /></button></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Print;