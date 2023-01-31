import React, {useEffect, useState} from "react";
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

const CheckoutPop = ({setCheckout, cartObj, getTotalAmount, getShopAmount, handleCart} : any) => {
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
    return (
        <>
            <div
                className="fixed inset-0 z-50 grid place-items-center bg-slate-900 bg-opacity-10 h-screen overflow-auto">
                <div className="py-6 px-4 flex gap-6 flex-col relative bg-white shadow-md rounded-md w-3/4">
                    <div className="flex justify-between align-middle"><h1 className="font-bold">Checkout</h1>
                        <div className="relative mb-4">
                            <button className="rounded-lg bg-red-500 absolute right-0 px-2 py-1"
                                    onClick={() => setCheckout(false)}>x
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="flex-1 p-5">
                            <div className="container ">
                                <form action="/action_page.php">
                                    <div className="row">
                                        <div className="col-50">
                                            <h3>Billing Address</h3>
                                            <label htmlFor="fname" className='lbl'><FaUserAlt className='mgn'/> Full
                                                Name</label>
                                            <input type="text" id="fname" name="firstname" placeholder="John M. Doe"
                                                   className="iinput"/>
                                            <label htmlFor="email" className='lbl'><FaEnvelope
                                                className='mgn'/> Email</label>
                                            <input type="text" id="email" name="email" placeholder="john@example.com"
                                                   className="iinput"/>
                                            <label htmlFor="adr" className='lbl'><FaRegAddressCard
                                                className='mgn'/> Address</label>
                                            <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"
                                                   className="iinput"/>
                                            <label htmlFor="city" className='lbl'><FaUniversity
                                                className='mgn'/> City</label>
                                            <input type="text" id="city" name="city" placeholder="New York"
                                                   className="iinput"/>

                                            <div className="row">
                                                <div className="col-50">
                                                    <label htmlFor="state" className="llabel">State</label>
                                                    <input type="text" id="state" name="state" placeholder="NY"
                                                           className="iinput"/>
                                                </div>
                                                <div className="col-50">
                                                    <label htmlFor="zip" className="llabel">Zip</label>
                                                    <input type="text" id="zip" name="zip" placeholder="10001"
                                                           className="iinput"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-50">
                                            <h3 className="hh">Payment</h3>
                                            <label htmlFor="fname">Accepted Cards</label>
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
                                            </div>
                                        </div>
                                    </div>
                                    <label className="llabel">
                                        <input type="checkbox" name="sameadr"/> Shipping address same as billing
                                    </label>
                                </form>
                            </div>
                        </div>
                        <div className="flex-1 p-5">
                            <div className="ccontainer ">
                                <h4 className="pt-3 pb-3">Cart <span className="price" style={{
                                    color: "black",
                                    display: "flex",
                                    alignItems: "center"
                                }}><FaShoppingCart className='mgn'/> <b>{getItemCount()}</b></span></h4>
                                <div className="h-5/6 overflow-x-hidden overflow-y-auto">{Object.keys(cartObj).map((shop) => (

                                    <div key={`shop${shop}`}>
                                        <div
                                            className="flex justify-between px-2 border border-gray-200 bg-gray-200 py-2 items-center ">
                                            <div className="flex flex-raw gap-8 items-center relative w-16 h-8">
                                                <Image src={cartObj[shop][0]?.shop_id?.logo_img} alt="cart" fill/>
                                            </div>
                                            <h6>{shop}</h6>
                                            <div>Amount $: {getShopAmount(cartObj[shop])}</div>
                                        </div>


                                        {cartObj[shop].sort((a: any, b: any) => a.product_name.localeCompare(b.product_name)).map((item: any, index: string) => (
                                            <div key={`item${shop + index}`}
                                                 className="grid grid-cols-6 gap-1 my-4 mx-4 py-2 item-center w-full pr-6">

                                                <div className="relative w-6 h-6">
                                                    <Image src={item.product_image} alt="fly" fill/>
                                                </div>


                                                <div>
                                                    <p>{item.product_name}</p>
                                                </div>

                                                <div>
                                                    <h6>${item.unit_price}</h6>
                                                </div>

                                                <div className="flex flex-raw col-span-2 ">
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


                                                <div className="text-right">
                                                    {item.cartQuantity * item.unit_price}
                                                </div>
                                            </div>
                                        ))}

                                    </div>


                                ))}</div>
                                <div className="flex justify-between items-end pb-3 pt-3 border-b-2 border-t-2">
                                    <div className="text-1xl">Grand Total $</div>
                                    <div>{getTotalAmount()}</div>
                                </div>
                                <input type="submit" value="Continue to checkout" className="btn"/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CheckoutPop;