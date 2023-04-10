import React, { useEffect, useRef, useState } from "react";
import requests from "../../../utils/request";
import CheckoutPop from "../CheckoutPop/CheckoutPop";
import Print from "../Print/Print";
import Image from "next/image";
import { IoIosClose } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";

import { HiOutlineShoppingBag } from "react-icons/hi";
import { CiPercent } from "react-icons/ci";

import classNames from "classnames";

interface Props {
  setMobileShowCart: any;
  mobileShowCart: any;
}

const MobileCartModal: React.FC<Props> = ({ setMobileShowCart }) => {
  const [checkout, setCheckout] = useState(false);
  const [print, setPrint] = useState(false);
  const [cartObj, setCartObj] = useState<any>([]);

  const animation = useRef<HTMLInputElement>(null);

  // const [isAnimating, setIsAnimating] = useState(false);

  const handleClose = () => {
    // setIsAnimating(true);
    setMobileShowCart(false);
  };

  useEffect(() => {
    if (!setMobileShowCart) {
      setTimeout(() => {}, 500);
    }
  }, []);

  const show = () => {
    let id: any;
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++;

        if (animation.current) {
          animation.current.style.left = pos + "%";
        }
      }
    }
  };

  useEffect(() => {
    const items: [string] =
      JSON.parse(localStorage.getItem("cartItems")!) ?? [];
    console.log(items);
    if (items.length > 0) {
      fetch(requests.getCatalogBookPageItemByIds, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((i: any) => i._id),
        }),
      })
        .then((response) => response.json())
        .then((responseJson) => {
          const cloneResponse = [...responseJson];
          cloneResponse.map((item) => {
            const product: any = items.find((i: any) => i._id === item._id);
            item.cartQuantity = product?.quantity ? product?.quantity : 0;
          });
          setCartObj(groupBy([...cloneResponse], (v) => v.shop_id.shop_name));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  const groupBy = (
    x: any[],
    f: (arg0: any, arg1: any, arg2: any) => string | number
  ) => x.reduce((a, b, i) => ((a[f(b, i, x)] ||= []).push(b), a), {});

  const handleCart = (item: any, type: string, shop: string) => {
    console.log(item);
    if (type === "-") {
      if (item.cartQuantity <= 0) return;
      item.cartQuantity -= 1;
    } else {
      if (item.cartQuantity >= item.quantity) return;
      item.cartQuantity += 1;
    }
    let cartShop = cartObj[shop];
    const filtered = cartShop.filter((it: { _id: any }) => it._id !== item._id);
    filtered.push(item);
    setCartObj({ ...cartObj, [shop]: filtered });
    // setCartObj(cartShop)
  };

  console.log(cartObj);

  const getShopAmount = (items: any) => {
    return items.reduce(
      (a: any, b: { cartQuantity: number; unit_price: number }) => {
        a += b.cartQuantity * b.unit_price;
        return a;
      },
      0
    );
  };

  const getTotalAmount = () => {
    console.log();
    const allItems = Object.keys(cartObj)
      .map((shop) => {
        return cartObj[shop];
      })
      .flatMap((a) => a);

    return allItems.reduce((a, b) => {
      a += b.cartQuantity * b.unit_price;
      return a;
    }, 0);
  };

  const togglepopup = () => {
    setCheckout(true);
  };

  const toggleprint = () => {
    setPrint(true);
  };
  const handleDelete = () => {
    // const newItems = shop.filter((item)=>item._id != _id)
    // setCartObj(newItems)
  };
  
//   const styleObj = {
//     // position: "absolute",
//     right: !mobileShowCart?"-1500px":"0px",
//     transition: "1s",
//     zIndex:!mobileShowCart?"50":"",
//     opacity:!mobileShowCart?"0px":"50px"
// }
//style={styleObj}

  

  return (
    <div
      ref={animation}
      className="fixed inset-0 z-50 grid mb-0 transition-transform duration-1000 transform bg-opacity-50 place-items-end bg-slate-900 hover:-translate-x-0"
    >
      <div className="relative right-0 flex flex-col w-10/12 h-screen px-3 pt-5 bg-white rounded-md shadow-md lg:px-4 bottom-1 left-2 md:w-8/12 lg:w-3/12">
        <div
          className={`text-right ${
            setMobileShowCart
              ? "translate-x-0 transition ease-in-out duration-300"
              : "translate-x-full"
          }`}
        >
          <button onClick={() => handleClose()}>
            <IoIosClose className="text-2xl" />
          </button>
        </div>

        <div>
          <div className=" text-[20px] text-center  font-ff-headings flex flex-wrap justify-center ">
            <div className="text-[30px] text-center mx-2 mb-2">
              <HiOutlineShoppingBag />{" "}
            </div>
            Your Cart
          </div>

          <hr className="mt-3 mb-5 font-bold border" />

          {/* Items */}

          <div className="h-[50vh] overflow-x-hidden overflow-y-auto">
            {Object.keys(cartObj).map((shop) => (
              <div key={`shop${shop}`}>
                <div className="flex items-center justify-between px-2 py-2 bg-gray-200 border border-gray-200 ">
                  <div className="relative flex items-center gap-8 flex-raw">
                    <img
                      src={cartObj[shop][0]?.shop_id?.logo_img}
                      alt="fly"
                      className="object-contain w-full h-8"
                    />
                  </div>
                  <h6 className="font-ff-headings text-[14px] ">{shop}</h6>
                  <div className=" text-[14px]">
                    Є {getShopAmount(cartObj[shop])}
                  </div>
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
                        <p className="text-[14px] font-ff-headings">
                          {item.product_name}
                        </p>
                        <p className="text-gray-400 text-[14px]">
                          Є{item.unit_price}
                        </p>
                      </div>
                      <div className="flex items-end ">
                        <button>
                          <RiDeleteBinLine
                            onClick={() => handleDelete()}
                            className="text-xl text-red-400 "
                          />
                        </button>
                      </div>

                      <div className="col-span-3 text-right text-[14px] ">
                        <p className="mb-5 ">
                          Є {item.cartQuantity * item.unit_price}
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
                            <p className="w-10 text-center bg-gray-50 text-[14px] ">
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

          {/*Items End */}

          <div className="flex mt-5 text-gray-500 text-[14px] mx-2 ">
            <CiPercent className="mt-1 mr-1 " />
            Have a Promo Code?
          </div>
          <div className="flex items-end justify-between pt-3 pb-3 mx-2">
            <div className="text-[16px] font-ff-headings">Grand Total</div>
            <div className=" text-[16px]"> Є {getTotalAmount()}</div>
          </div>
          <hr className="font-bold border-dashed" />
          {/* Buttons */}
          <div className="flex justify-between mt-10 ">
            <button
              disabled={Object.keys(cartObj).length === 0}
              className={`bg-[#8DC14F] text-white rounded-lg md:px-2 px-1 md:py-2 py-1 flex-1 mx-1 ${
                Object.keys(cartObj).length === 0 ? "bg-opacity-50" : ""
              }`}
              onClick={() => {
                localStorage.removeItem("cartItems");
                setCartObj({});
              }}
            >
              Clear cart
            </button>
            <button
              onClick={togglepopup}
              disabled={Object.keys(cartObj).length === 0}
              className={`bg-[#8DC14F] text-white rounded-lg md:px-2 px-1 md:py-2 py-1 flex-1 mx-1 ${
                Object.keys(cartObj).length === 0 ? "bg-opacity-50" : ""
              }`}
            >
              Checkout
            </button>
            {checkout && (
              <div>
                <CheckoutPop
                  setCheckout={setCheckout}
                  cartObj={cartObj}
                  getShopAmount={getShopAmount}
                  getTotalAmount={getTotalAmount}
                  handleCart={handleCart}
                />
              </div>
            )}
            {/*<button onClick={toggleprint} disabled={Object.keys(cartObj).length === 0} className={`bg-[#8DC14F] text-white rounded-lg px-2 py-2 flex-1 mx-1 ${Object.keys(cartObj).length === 0 ? 'bg-opacity-50': ''}`}>Print</button>*/}
            <button
              onClick={toggleprint}
              className={`bg-[#8DC14F] text-white rounded-lg md:px-2 px-1 md:py-2 py-1 flex-1 mx-1 `}
            >
              Print
            </button>
            {print && (
              <div>
                <Print setPrint={setPrint} />
              </div>
            )}
          </div>

          {/* Buttons End */}

          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default MobileCartModal;
