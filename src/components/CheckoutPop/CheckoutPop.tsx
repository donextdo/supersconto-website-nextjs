
import { useEffect, useState } from "react";
import { FaUserAlt,FaShoppingCart,FaEnvelope,FaRegAddressCard,FaUniversity,FaCcVisa,FaCcAmex,FaCcMastercard,FaCcDiscover } from "react-icons/fa";
import requests from "../../../utils/request";

const CheckoutPop = ({setCheckout}) => {
    
    return ( 
        <>
        <div className="fixed inset-0 z-50 grid place-items-center bg-slate-900 bg-opacity-10">
            <div className="py-6 px-4 flex gap-6 flex-col relative bg-white shadow-md rounded-md w-3/6">
                <h2>Responsive Checkout Form</h2>
                <p>Resize the browser window to see the effect. When the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other.</p>
                <div className="relative mb-4"><button className="rounded-lg bg-red-500 absolute right-0 px-2 py-1" onClick={() =>setCheckout(false)}>x</button></div>
                <div className="row">
                    <div className="col-75">
                        <div className="container">
                            <form action="/action_page.php">
                                <div className="row">
                                    <div className="col-50">
                                        <h3>Billing Address</h3>
                                        <label htmlFor="fname" className='lbl'><FaUserAlt className='mgn'/> Full Name</label>
                                        <input type="text" id="fname" name="firstname" placeholder="John M. Doe" className="iinput" />
                                        <label htmlFor="email" className='lbl'><FaEnvelope className='mgn'/> Email</label>
                                        <input type="text" id="email" name="email" placeholder="john@example.com" className="iinput"/>
                                        <label htmlFor="adr" className='lbl'><FaRegAddressCard className='mgn'/> Address</label>
                                        <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" className="iinput"/>
                                        <label htmlFor="city" className='lbl'><FaUniversity className='mgn'/> City</label>
                                        <input type="text" id="city" name="city" placeholder="New York" className="iinput"/>

                                        <div className="row">
                                            <div className="col-50">
                                                <label htmlFor="state" className="llabel">State</label>
                                                <input type="text" id="state" name="state" placeholder="NY" className="iinput"/>
                                            </div>
                                            <div className="col-50">
                                                <label htmlFor="zip" className="llabel">Zip</label>
                                                <input type="text" id="zip" name="zip" placeholder="10001" className="iinput"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-50">
                                        <h3 className="hh">Payment</h3>
                                        <label htmlFor="fname">Accepted Cards</label>
                                        <div className="icon-container">
                                            <FaCcVisa  style={{color:"navy"}}/>
                                            <FaCcAmex style={{color:"blue"}}/>
                                            <FaCcMastercard style={{color:"red"}}/>
                                            <FaCcDiscover style={{color:"orange"}}/>
                                        </div>
                                        <label htmlFor="cname" className="llabel">Name on Card</label>
                                        <input type="text" id="cname" name="cardname" placeholder="John More Doe" className="iinput"/>
                                        <label htmlFor="ccnum" className="llabel">Credit card number</label>
                                        <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" className="iinput"/>
                                        <label htmlFor="expmonth" className="llabel">Exp Month</label>
                                        <input type="text" id="expmonth" name="expmonth" placeholder="September" className="iinput"/>
                                        <div className="row">
                                            <div className="col-50">
                                                <label htmlFor="expyear" className="llabel">Exp Year</label>
                                                <input type="text" id="expyear" name="expyear" placeholder="2018" className="iinput"/>
                                            </div>
                                            <div className="col-50">
                                                <label htmlFor="cvv" className="llabel">CVV</label>
                                                <input type="text" id="cvv" name="cvv" placeholder="352" className="iinput"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    <label className="llabel">
                                    <input type="checkbox"  name="sameadr" /> Shipping address same as billing
                                    </label>
                                    <input type="submit" value="Continue to checkout" className="btn" />
                            </form>
                        </div>
                    </div>
                    <div className="col-25">
                        <div className="ccontainer">
                            <h4>Cart <span className="price" style={{color:"black" , display:"flex" , alignItems:"center"}}><FaShoppingCart className='mgn'/> <b>4</b></span></h4>
                            <p><a className="atag" href="#">Product 1</a> <span className="price">$15</span></p>
                            <p><a className="atag" href="#">Product 2</a> <span className="price">$5</span></p>
                            <p><a className="atag" href="#">Product 3</a> <span className="price">$8</span></p>
                            <p><a className="atag" href="#">Product 4</a> <span className="price">$2</span></p>
                            <hr className="hhr"/>
                            <p>Total <span className="price" style={{color:"black"}}><b>$30</b></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default CheckoutPop;