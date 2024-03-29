import Image from "next/image";
import sh1 from "../../../assets/shops/sp_1.png";
import React, { useEffect, useState, useRef } from "react";
import { useReactToPrint } from 'react-to-print';
import { GrFormClose } from 'react-icons/gr';
import requests from "../../../utils/request";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


interface Props {
    setPrint: any

}

const Print: React.FC<Props> = ({ setPrint }) => {


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

    async function handleDownload() {
        //     const input = componentRef.current;

        // if (!input) {
        //   return;
        // }

        // html2canvas(input, { scale: 2 }).then((canvas) => {
        //   const imgData = canvas.toDataURL('image/png');
        //   console.log(imgData )
        //   const pdf = new jsPDF({ orientation: 'portrait', unit: 'in', format: 'letter' });

        //   const imgProps = pdf.getImageProperties(imgData);
        //   const pdfWidth = pdf.internal.pageSize.getWidth() - 2 * 0.5;

        //   const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        //   pdf.addImage(decodedData, 'PNG', 0.5, 0.5, pdfWidth, pdfHeight, null, 'FAST');
        //   pdf.save('my_component.pdf');
        // });

        try {
            // const canvas = await html2canvas(componentRef.current);
            // const imgData = canvas.toDataURL('image/png');
            // console.log(imgData)
            // const pdf = new jsPDF();
            // pdf.addImage(imgData, 'PNG', 0, 0);
            // pdf.save('download.pdf');
        } catch (error) {
            console.log(error);
        }
    }

    const printClose = () => {
        setPrint(false)
    }
    return (
        <div className="fixed inset-0 z-50 grid place-items-center bg-slate-900 bg-opacity-70" >
            <div className="py-2 px-4 flex gap-6 flex-col relative bg-white shadow-lg rounded-md w-2/5">
                <div id="print-container">
                    <div className="text-right"><button className="mt-2 text-2xl mr-2" onClick={printClose}><GrFormClose /></button></div>
                    <section ref={componentRef} className='mb-1 overflow-y-auto h-[35vh]'>
                        <div className="flex justify-between ">
                            <div className=" text-[20px] mb-3 font-semibold">My Shopping List</div>
                        </div>
                        
                        {Object.keys(cartObj).map((shop) => (
                            <div key={`shop${shop}`} >
                                <div className="flex justify-between px-4 border border-gray-200 bg-gray-200 py-2 items-center mt-2 ">
                                    <div className="flex flex-raw gap-8 items-center">
                                        {/* <img src={cartObj[shop][0]?.shop_id?.logo_img} alt="fly" className="object-contain w-full h-8" /> */}
                                        <Image src={cartObj[shop][0]?.shop_id?.logo_img}
                                            alt="fly"
                                            style={{ objectFit: "contain", backgroundColor: "#DCDCDC", width: "100%", height: "32px" }}
                                            // sizes='height: 100%'
                                            width={450}
                                            height={400} />
                                        <h6 className="text-[14px]">{shop}</h6>
                                    </div>
                                    <div className="text-[14px]">Є : {getShopAmount(cartObj[shop])}</div>
                                </div>

                                {cartObj[shop].sort((a: any, b: any) => a.product_name.localeCompare(b.product_name)).map((item: any, index: string) => (
                                    <div key={`item${shop + index}`} className="grid grid-cols-5 gap-4 my-4  py-2 item-center w-full px-4">
                                        {/* 1st column */}
                                        < div >
                                            {/* <img src={item.product_image} alt="fly" className="object-contain w-full h-16" /> */}
                                            <Image src={item.product_image} 
                                            alt="fly" 
                                            style={{ objectFit: "contain", backgroundColor: "#DCDCDC", width: "100%", height: "64px" }}
                                            // sizes='height: 100%'
                                            width={450}
                                            height={400} />
                                        </div>

                                        {/* 2nd column */}
                                        <div className="col-span-3">
                                            <p className="text-[14px]">{item.product_name}</p>
                                            <p className="text-gray-400 text-[14px]">Є {item.unit_price} x {item.cartQuantity}</p>
                                        </div>

                                        {/* 3rd column */}
                                        <div className="text-right ">
                                            <p className="mb-5 text-[14px]">Є {item.cartQuantity * item.unit_price}</p>
                                        </div>
                                    </div>
                                ))}

                                <div className="flex justify-between px-4">
                                    <div><p className="text-gray text-[14px]"></p>Sub Total </div>
                                    <div className="text-[14px]">Є {getTotalAmount()}</div>
                                </div>

                                <div className="flex justify-between px-4">
                                    <div><p className="text-lg text-[14px]">Total </p>
                                    </div>
                                    <div className="">
                                        <p className="text-lg text-[14px]">Є {getTotalAmount()}</p>
                                    </div>
                                </div>
                            </div>

                        ))}

                    </section>
                    <section className="flex justify-between mt-4">
                    <div className=" flex-1 mx-2">
                        <div className=""><button onClick={handlePrint} className="w-full bg-[#8DC14F] rounded-md py-2 ">Print</button></div>

                    </div>
                    <div className=" flex-1 mx-2">
                        <div className=""><button onClick={handleDownload} className="w-full bg-[#8DC14F] rounded-md py-2 ">Download</button></div>

                    </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Print;