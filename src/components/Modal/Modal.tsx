import Image, { StaticImageData } from "next/image";
import ab from '../../../assets/items/banana.jpg';
import { useState } from "react";

interface Modals {
    image: StaticImageData;
    price :number;
    totalamount : number;
    title : string;
    count : number
}
interface Props {
    modal : Modals
    setShow :any
}

const Modal: React.FC<Props> = ({modal,setShow}) => {
    const [count, setCount] = useState(0);

    const decreaseClick = () => {
        if (count > 0) {
            setCount(count - 1);
        } else {
            setCount(0);
        }
    };

    const increaseClick = () => {
        setCount(count + 1);
    };

    const handleClose = () => {
        setShow(false);
    }
    const items = [
        {
            image: ab,
            price: 5.00,
            totalamount : 15.00,
            title:'Banana 1KG'
        }
    ]
    return (
        <div className="fixed inset-0 z-50 grid place-items-center bg-slate-900 bg-opacity-10">
            <div className="py-6 px-4 flex gap-6 flex-col relative bg-white shadow-md rounded-md w-2/6">
                {items.map((item)=> (

                
                <section className="grid grid-cols-3 gap-4">
                    {/* 1st */}
                    <div className="mt-2">
                        <Image src={item.image} alt="banana" className="w-36 h-40 ml-4" />
                    </div>
                    {/* 2nd */}
                    <div className="col-span-2 mx-2">
                        <div>
                            <p className="text-lg font-bold">{item.title}</p>
                        </div>
                        <div className="flex flex-raw gap-8 mt-2">
                            <div className="text-md">${item.price}</div>
                            <div className="flex flex-raw">
                                <div>
                                    <button
                                        className="bg-black px-3 text-white"
                                        onClick={decreaseClick}
                                    >
                                        -
                                    </button>
                                </div>
                                <div>
                                    <p className="bg-gray-300 w-10 text-center">{count}</p>
                                </div>
                                <div>
                                    <button
                                        className="bg-black px-3 text-white"
                                        onClick={increaseClick}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">${item.totalamount}</div>
                        <div className="mt-6">
                            <button className="bg-green-500 mr-4 px-4 py-2 rounded w-48">
                                Add to cart
                            </button>
                            <button className="bg-red-700 px-6 py-2 rounded" onClick={handleClose}>X</button>
                        </div>
                    </div>
                </section>
                ))}
            </div>
        </div>
    );
};

export default Modal;
