import React, { useEffect, useState } from "react";
import {
    FaUserAlt,
    FaShoppingCart,
    FaEnvelope,
    FaRegAddressCard,
    FaUniversity,
    FaCcVisa,
    FaCcAmex,
    FaCcMastercard,
    FaCcDiscover
} from "react-icons/fa";
import requests from "../../../utils/request";
import Image from "next/image";
import { GrFormClose } from "react-icons/gr";
import { RiDeleteBinLine } from 'react-icons/ri';


const CheckoutPop = ({ setCheckout, cartObj, getTotalAmount, getShopAmount, handleCart }: any) => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zip: ''
    });

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setUserData({
            ...userData,
            [name]: value
        });

        // console.log(userData)
    };

    //   useEffect(() => {
    //     console.log(userData);
    // }, [])

    const getItemCount = () => {
        let count = 0
        let totol = 0
        if (cartObj) {
            Object.keys(cartObj).forEach(shop => {
                count += cartObj[shop].length
                cartObj[shop].forEach((item: { cartQuantity: number; }) => {
                    totol += item.cartQuantity
                })
            })
        }
        return `${count} (${totol})`
    }

    const handleDelete = () => {

        // const newItems = shop.filter((item)=>item._id != _id)
        // setCartObj(newItems)
    }

    const handleSubmit = () => {
        console.log(userData)
    }
    return (
        <>
            <div
                className="fixed inset-0 z-50 grid place-items-center bg-slate-900 bg-opacity-10 overflow-auto">
                <div className="py-6 px-4 flex gap-1 flex-col relative bg-white shadow-md rounded-md h-[620px] w-3/4">
                    <div className="flex justify-between">
                        <h1 className="font-bold">Checkout</h1>
                        <div className="relative mb-">
                            <button className="rounded-md  text-3xl absolute right-0 px-2 py-1"
                                onClick={() => setCheckout(false)}><GrFormClose />
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="flex-1 p-5">
                            <div className="container ">
                                <form action="">
                                    <div className="row">
                                        <div className="col-50">
                                            <h3 style={{ paddingBottom: '5px' }}>Shipping Address</h3>
                                            <label htmlFor="fname" className='lbl'><FaUserAlt className='mgn' /> Full
                                                Name</label>
                                            <input type="text" id="fname" name="name" placeholder="John M. Doe"
                                                className="iinput" value={userData.name} onChange={handleInputChange} />
                                            <label htmlFor="email" className='lbl'><FaEnvelope
                                                className='mgn' /> Email</label>
                                            <input type="text" id="email" name="email" placeholder="john@example.com"
                                                className="iinput" value={userData.email} onChange={handleInputChange} />
                                            <label htmlFor="adr" className='lbl'><FaRegAddressCard
                                                className='mgn' /> Address</label>
                                            <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"
                                                className="iinput" value={userData.address} onChange={handleInputChange} />
                                            <label htmlFor="city" className='lbl'><FaUniversity
                                                className='mgn' /> City</label>
                                            <input type="text" id="city" name="city" placeholder="New York"
                                                className="iinput" value={userData.city} onChange={handleInputChange} />

                                            <div className="row">
                                                <div className="col-50">
                                                    <label htmlFor="state" className="llabel">State</label>
                                                    <input type="text" id="state" name="state" placeholder="NY"
                                                        className="iinput" value={userData.state} onChange={handleInputChange} />
                                                </div>
                                                <div className="col-50">
                                                    <label htmlFor="zip" className="llabel">Zip</label>
                                                    <input type="text" id="zip" name="zip" placeholder="10001"
                                                        className="iinput" value={userData.zip} onChange={handleInputChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-50">
                                            <h3 className="hh">Cash On delivery Policy</h3>
                                            <p className="text-sm">
                                                As soon as the order is dispatched, customers receive an email with the tracking number and a direct link to monitor the shipment status. 

                                                NATIONAL SHIPPING (ITALY): Specifics e Restrictions

                                                1. BRT Standard ECON Courier (€ 7,90) – delivery within 48 business hours after the pick up of the shipment from the courier.
                                                2. BRT Standard ECON Courier Free Delivery (FREE over € 150,00)  – delivery within 48 business hours after the pick up of the shipment from the courier.

                                                INTERNATIONAL SHIPPING: Specifics and Restrictions</p>
                                            {/* <label htmlFor="fname">Accepted Cards</label>
                                            <div className="icon-container">
                                                <FaCcVisa style={{color: "navy"}}/>
                                                <FaCcAmex style={{color: "blue"}}/>
                                                <FaCcMastercard style={{color: "red"}}/>
                                                <FaCcDiscover style={{color: "orange"}}/>
                                            </div>
                                            <label htmlFor="cname" className="llabel">Name on Card</label>
                                            <input type="text" id="cname" name="cardname" placeholder="John More Doe"
                                                   className="iinput"/>
                                            <label htmlFor="ccnum" className="llabel">Credit card number</label>
                                            <input type="text" id="ccnum" name="cardnumber"
                                                   placeholder="1111-2222-3333-4444" className="iinput"/>
                                            <label htmlFor="expmonth" className="llabel">Exp Month</label>
                                            <input type="text" id="expmonth" name="expmonth" placeholder="September"
                                                   className="iinput"/>
                                            <div className="row">
                                                <div className="col-50">
                                                    <label htmlFor="expyear" className="llabel">Exp Year</label>
                                                    <input type="text" id="expyear" name="expyear" placeholder="2018"
                                                           className="iinput"/>
                                                </div>
                                                <div className="col-50">
                                                    <label htmlFor="cvv" className="llabel">CVV</label>
                                                    <input type="text" id="cvv" name="cvv" placeholder="352"
                                                           className="iinput"/>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                    {/* <label className="llabel">
                                        <input type="checkbox" name="sameadr"/> Shipping address same as billing
                                    </label> */}
                                </form>
                            </div>
                        </div>
                        <div className="flex-1 p-5">
                            <div className="ccontainer ">
                                <h4 className="pt-3 pb-3">Cart <span className="price" style={{
                                    color: "black",
                                    display: "flex",
                                    alignItems: "center"
                                }}><FaShoppingCart className='mgn' /> <b>{getItemCount()}</b></span></h4>
                                <div className="h-5/6 overflow-x-hidden overflow-y-auto">{Object.keys(cartObj).map((shop) => (

                                    <div key={`shop${shop}`}>
                                        <div
                                            className="flex justify-between px-2 border border-gray-200 bg-gray-200 py-2 items-center ">
                                            <div className="flex flex-raw gap-8 items-center relative ">
                                                <img src={cartObj[shop][0]?.shop_id?.logo_img} alt="fly" className="object-contain w-full h-8" />

                                            </div>
                                            <h6>{shop}</h6>
                                            <div>Amount $: {getShopAmount(cartObj[shop])}</div>
                                        </div>


                                        {cartObj[shop].sort((a: any, b: any) => a.product_name.localeCompare(b.product_name)).map((item: any, index: string) => (
                                            <div key={`item${shop + index}`}
                                                className="grid grid-cols-8 gap-1 my-4 mx-4 py-2 item-center w-full pr-6">

                                                <div className=" rounded-lg overflow-hidden ">
                                                    <img src={item.product_image} alt="fly" className="object-contain w-full h-16" />
                                                </div>
                                                {/* <div></div> */}
                                                <div className="col-span-3 pl-1">
                                                    <p className="bold text-lg">{item.product_name}</p>
                                                    <p className="text-gray-400">${item.unit_price}</p>
                                                </div>
                                                <div className="mx-auto flex items-end"><button><RiDeleteBinLine onClick={() => handleDelete()} className="text-xl text-red-400" /></button>
                                                </div>

                                                <div className="col-span-3 text-right">
                                                    <p className="mb-5">${item.cartQuantity * item.unit_price}</p>
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


                                ))}</div>
                                <div className="flex justify-between items-end pb-3 pt-3 border-b-2 border-t-2">
                                    <div className="text-1xl">Grand Total $</div>
                                    <div>{getTotalAmount()}</div>
                                </div>
                                {/* <input type="submit" value="Confirm Order" className="btn"/> */}
                                <button className="btn" type="submit" onClick={handleSubmit} >Confirm Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CheckoutPop;