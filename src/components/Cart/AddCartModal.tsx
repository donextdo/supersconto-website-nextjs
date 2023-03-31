import Image, {StaticImageData} from "next/image";
import bn from "../assets/items/banana.jpg";
import React, {MouseEventHandler, useEffect, useState} from "react";

interface Item {
    product_image: StaticImageData;
    unit_price: number;
    totalAmount: number;
    product_name: string;
    _id: string;
    quantity: number
}

interface Props {
    item: Item,
    handler: MouseEventHandler<HTMLButtonElement>
}

const AddToCartModal: React.FC<Props> = ({item, handler}) => {
    const [count, setCount] = useState(1);

    useEffect(() => {
        const cartItems: [any] = JSON.parse(localStorage.getItem("cartItems")!) ?? []

        const product = cartItems.find(it => it._id === item._id)
        if (product) {
            setCount(product.quantity >= item.quantity ? item.quantity : product.quantity)
        }
    }, [item])


    const decreaseClick = () => {
        if (count > 0) {
            setCount(prevState => prevState - 1);
        } else {
            setCount(0);
        }
    };

    const increaseClick = () => {
        setCount(prevState => {
            if (prevState + 1 >= item.quantity) {
                return item.quantity
            }
            return prevState + 1
        });
    };

    console.log({item})

    return (
        
        <div className="fixed inset-0 z-50 grid bg-opacity-75 place-items-center bg-slate-900">
             
            <div className="md:py-6 py-0 pt-3 px-4 flex md:gap-6 flex-col relative bg-white shadow-md rounded-md w-[60vw]">
                
            <div className="bg-white rounded-full text-end">
            <button className="px-3 text-xl font-bold text-black md:px-6" onClick={handler}>X</button>
            </div>
            
                <section className="md:gap-4 md:flex">
                    {/* 1st */}
                    <div className="md:mt-2 h-[50vh]  md:w-4/6   md:ml-4 relative">
                        <Image src={item.product_image} fill style={{objectFit:"contain"}} alt={item.product_name}/>
                    </div>
                    {/* 2nd */}
                    <div className="mx-5 md:mt-8 md:mx-10 md:w-1/2 md:col-2 md:span-2" >
                        <div>
                            <p className="text-2xl font-bold text-center md:text-left">{item.product_name}</p>
                        </div>
                        <div className="flex gap-4 mt-6 md:gap-16 flex-raw">
                            <div className="text-lg ">${item.unit_price}</div>
                            <div className="flex flex-raw ">
                                <div>
                                    <button
                                        className="px-3 text-lg text-white bg-black"
                                        onClick={decreaseClick}
                                    >
                                        -
                                    </button>
                                </div>
                                <div>
                                    <p className="w-10 text-lg text-center bg-gray-300">{count}</p>
                                </div>
                                <div>
                                    <button
                                        className="px-3 text-lg text-white bg-black "
                                        onClick={increaseClick}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                       
                        <div className="mt-5 text-lg ">${item.unit_price * count}</div>
                      
                        <div className="flex mt-10 mb-5 md:mt-10 md:mb-0">
                          
                            <button disabled={count === 0} className="disabled:opacity-50 bg-[#8DC14F]  px-2 py-[8px] rounded w-full" onClick={(e) => {
                                const cartItems: [any] = JSON.parse(localStorage.getItem("cartItems")!) ?? []
                                const product = cartItems.find(it => it._id === item._id)
                                if (product) {
                                    product.quantity = count
                                } else {
                                    cartItems.push({_id: item._id, quantity: count})
                                }
                                localStorage.setItem("cartItems", JSON.stringify(cartItems))
                                handler(e);
                            }}>
                                Add to cart
                            </button>
                            
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default AddToCartModal;
