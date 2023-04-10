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
  FaCcDiscover,
} from "react-icons/fa";
import requests, { http } from "../../../utils/request";
import Image from "next/image";
import { GrFormClose } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";
import ButtonSpinner from "../Utils/ButtonSpinner";
import { boolean } from "yup";

const CheckoutPop = ({
  setCheckout,
  cartObj,
  getTotalAmount,
  getShopAmount,
  handleCart,
}: any) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });

    // console.log(userData)
  };

  //   useEffect(() => {
  //     console.log(userData);
  // }, [])

  const getItemCount = () => {
    let count = 0;
    let totol = 0;
    if (cartObj) {
      Object.keys(cartObj).forEach((shop) => {
        count += cartObj[shop].length;
        cartObj[shop].forEach((item: { cartQuantity: number }) => {
          totol += item.cartQuantity;
        });
      });
    }
    return `${count} (${totol})`;
  };

  const handleDelete = () => {
    // const newItems = shop.filter((item)=>item._id != _id)
    // setCartObj(newItems)
  };


  const [showAlert, setShowAlert] = useState(false);
  const [showSubmitMessage, setShowSubmitMessage] = useState(false);
  const handleSubmit = async () => {
    try {
    setLoading(true);
      const orderDto = {
        fullName: userData.name,
        billingAddress: {
          address_line1: userData.address,
          state: userData.state,
          city: userData.city,
          postal_code: userData.zip,
        },
        orderItems: JSON.parse(localStorage.getItem("cartItems")!) ?? [],
        payementMethod: "CASH_ON_DELIVERY",
      };

      setLoading(false);
      setShowAlert(true);
      setShowSubmitMessage(false);

      const { data } = await http.post("/order", orderDto);

      setLoading(false);
      localStorage.removeItem("cartItems");
      setCheckout(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const handleValidation = () => {
    if (
      !userData ||
      !userData.name ||
      !userData.address ||
      !userData.state ||
      !userData.city ||
      !userData.zip
    ) {
      return false;
    } else {
      return true;
    }
  };



  return (
    <>
      <div className="fixed inset-0 z-50 grid overflow-auto place-items-center bg-slate-900 bg-opacity-20">
        <div className="py-6 px-4 flex gap-1 flex-col relative bg-white shadow-lg rounded-md h-[65vh] h-9/12 w-3/4">
          <div className="flex justify-between">
            <h1 className="text-xl font-bold">Checkout</h1>
            <div className="relative mb-">
              <button
                className="absolute right-0 px-2 py-1 text-3xl rounded-md"
                onClick={() => setCheckout(false)}
              >
                <GrFormClose />
              </button>
            </div>
          </div>
          <div className="row overflow-y-auto h-[50vh]">
            <div className="flex-1 p-5 ">
              <div className="container ">
                <form action="">
                  <div className="row">
                    <div className="col-50 ">
                      <h3 style={{ paddingBottom: "5px", fontWeight: 500 }}>
                        Shipping Address
                      </h3>
                      <label htmlFor="fname" className="lbl">
                        <FaUserAlt className="mgn" /> Full Name
                      </label>
                      <input
                        type="text"
                        id="fname"
                        name="name"
                        placeholder="John M. Doe"
                        className="iinput"
                        value={userData.name}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="email" className="lbl">
                        <FaEnvelope className="mgn" /> Email
                      </label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="john@example.com"
                        className="iinput"
                        value={userData.email}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="adr" className="lbl">
                        <FaRegAddressCard className="mgn" /> Address
                      </label>
                      <input
                        type="text"
                        id="adr"
                        name="address"
                        placeholder="542 W. 15th Street"
                        className="iinput"
                        value={userData.address}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="city" className="lbl">
                        <FaUniversity className="mgn" /> City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="New York"
                        className="iinput"
                        value={userData.city}
                        onChange={handleInputChange}
                      />

                      <div className="row">
                        <div className="col-50">
                          <label htmlFor="state" className="llabel">
                            State
                          </label>
                          <input
                            type="text"
                            id="state"
                            name="state"
                            placeholder="NY"
                            className="iinput"
                            value={userData.state}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="col-50">
                          <label htmlFor="zip" className="llabel">
                            Zip
                          </label>
                          <input
                            type="text"
                            id="zip"
                            name="zip"
                            placeholder="10001"
                            className="iinput"
                            value={userData.zip}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-50 ">
                      <h3 className="font-medium hh">
                        Cash On delivery Policy
                      </h3>
                      <p className="text-sm">
                        As soon as the order is dispatched, customers receive an
                        email with the tracking number and a direct link to
                        monitor the shipment status.
                        <br />
                        <br />
                        NATIONAL SHIPPING (ITALY): Specifics e Restrictions
                        <br />
                        <br />
                        <span className="font-semibold"> 1. </span> BRT Standard
                        ECON Courier (€ 7,90) – delivery within 48 business
                        hours after the pick up of the shipment from the
                        courier. <br />
                        <span className="font-semibold"> 2. </span> BRT Standard
                        ECON Courier Free Delivery (FREE over € 150,00) –
                        delivery within 48 business hours after the pick up of
                        the shipment from the courier.
                        <br />
                        <br />
                        INTERNATIONAL SHIPPING: Specifics and Restrictions
                      </p>
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
                <h4 className="pt-3 pb-3">
                  Cart{" "}
                  <span
                    className="price"
                    style={{
                      color: "black",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <FaShoppingCart className="mgn" /> <b>{getItemCount()}</b>
                  </span>
                </h4>
                <div className="h-[35vh] overflow-x-hidden overflow-y-auto">
                  {Object.keys(cartObj).map((shop) => (
                    <div key={`shop${shop}`}>
                      <div className="flex items-center justify-between px-2 py-2 bg-gray-200 border border-gray-200 ">
                        <div className="relative flex items-center gap-8 flex-raw ">
                          <img
                            src={cartObj[shop][0]?.shop_id?.logo_img}
                            alt="fly"
                            className="object-contain w-full h-8"
                          />
                        </div>
                        <h6>{shop}</h6>
                        <div>Amount $: {getShopAmount(cartObj[shop])}</div>
                      </div>

                      {cartObj[shop]
                        .sort((a: any, b: any) =>
                          a.product_name.localeCompare(b.product_name)
                        )
                        .map((item: any, index: string) => (
                          <div
                            key={`item${shop + index}`}
                            className="grid w-full grid-cols-8 gap-1 py-2 pr-6 mx-4 my-4 item-center"
                          >
                            <div className="overflow-hidden rounded-lg ">
                              <img
                                src={item.product_image}
                                alt="fly"
                                className="object-contain w-full h-16"
                              />
                            </div>
                            {/* <div></div> */}
                            <div className="col-span-3 pl-1">
                              <p className="text-lg bold">
                                {item.product_name}
                              </p>
                              <p className="text-gray-400">
                                ${item.unit_price}
                              </p>
                            </div>
                            <div className="flex items-end ml-10">
                              <button>
                                <RiDeleteBinLine
                                  onClick={() => handleDelete()}
                                  className="text-xl text-red-400"
                                />
                              </button>
                            </div>

                            <div className="col-span-3 text-right">
                              <p className="mb-5">
                                ${item.cartQuantity * item.unit_price}
                              </p>
                              <div className="flex justify-end flex-raw">
                                <div>
                                  <button
                                    className="px-3 text-white bg-green-800 rounded-l-md"
                                    onClick={() => handleCart(item, "-", shop)}
                                  >
                                    -
                                  </button>
                                </div>
                                <div>
                                  <p className="w-10 text-center bg-gray-50">
                                    {item.cartQuantity}
                                  </p>
                                </div>
                                <div>
                                  <button
                                    className="px-3 text-white bg-green-800 rounded-r-md"
                                    onClick={() => handleCart(item, "+", shop)}
                                  >
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
                <div className="flex items-end justify-between pt-3 pb-3 border-t-2 border-b-2">
                  <div className="text-1xl">Grand Total $</div>
                  <div>{getTotalAmount()}</div>
                </div>
                {/* <input type="submit" value="Confirm Order" className="btn"/> */}
              
      <button
        className="btn"
        type="submit"
        onClick={() => {
          if (handleValidation()) {
            setShowSubmitMessage(false);
            handleSubmit();
           
          } else {
            setShowSubmitMessage(true);
          }
          
        }
         
        }
      >

    {/* Show Alerts */}
        {!loading ? <span>Confirm Order</span> : <ButtonSpinner />}
      </button>

      {showSubmitMessage && !showAlert &&(
        <p className="mt-2 text-sm text-red-500">
          Please submit your shipping address details before order continuing.
        </p>
        
      )}
        {showAlert &&(
        <div className="absolute top-0 left-0 right-0 z-50 ">
          <div className="px-4 py-2 bg-[#008C45] sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex items-center flex-1 w-0">
                <span className="flex p-2 bg-[#008C45]  rounded-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="ml-3 font-medium text-white truncate">
                  Order confirmed successfully!
                </p>
              </div>
              <div className="flex-shrink-0 order-2 sm:order-3 sm:ml-2">
                {/* <button
                  type="button"
                  className="bg-green-600 rounded-md focus:outline-none focus:ring-2 focus:ring-white sm:text-sm"
                  onClick={() => setShowAlert(false)}
                >
                            <span className="sr-only">Close</span>
                            <svg
                              className="w-5 h-5 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 011.414 1.414L11.414 10l2.293 2.293a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

    
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPop;
