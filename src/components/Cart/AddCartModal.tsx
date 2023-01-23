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
        <div className="fixed inset-0 z-50 grid place-items-center bg-slate-900 bg-opacity-10">
            <div className="py-6 px-4 flex gap-6 flex-col relative bg-white shadow-md rounded-md w-3/6">
                <section className="grid grid-cols-3 gap-4">
                    {/* 1st */}
                    <div className="mt-2 w-54 h-72 ml-4 relative">
                        <Image src={item.product_image} fill alt={item.product_name}/>
                    </div>
                    {/* 2nd */}
                    <div className="col-span-2 mx-16  mt-8">
                        <div>
                            <p className="text-2xl font-bold">{item.product_name}</p>
                        </div>
                        <div className="flex flex-raw gap-8 mt-6">
                            <div className="text-lg">${item.unit_price}</div>
                            <div className="flex flex-raw">
                                <div>
                                    <button
                                        className="bg-black px-3 text-lg text-white"
                                        onClick={decreaseClick}
                                    >
                                        -
                                    </button>
                                </div>
                                <div>
                                    <p className="bg-gray-300 w-10 text-center text-lg">{count}</p>
                                </div>
                                <div>
                                    <button
                                        className="bg-black px-3 text-lg text-white"
                                        onClick={increaseClick}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 text-lg">${item.unit_price * count}</div>
                        <div className="mt-10 flex">
                            <button disabled={count === 0} className="disabled:opacity-50 bg-[#8DC14F] mr-4 px-4 py-4 rounded w-48" onClick={(e) => {
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
                            <div className="bg-white shadow-md rounded-full">
                            <button className="bg-red-700 px-6 py-4 rounded-full text-white" onClick={handler}>X</button>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default AddToCartModal;
