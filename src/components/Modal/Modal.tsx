import Image, { StaticImageData } from "next/image";
import ab from "../../../assets/items/banana.jpg";
import { useState } from "react";

interface Modals {
  image: StaticImageData;
  price: number;
  totalamount: number;
  title: string;
  count: number;
}
interface Props {
  modal: Modals;
  setShow: any;
}

const Modal: React.FC<Props> = ({ modal, setShow }) => {
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
  };
  const items = [
    {
      image: ab,
      price: 5.0,
      totalamount: 15.0,
      title: "Banana 1KG",
    },
  ];
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-900 bg-opacity-10">
      <div className="relative flex flex-col w-2/6 gap-6 px-4 py-6 bg-white rounded-md shadow-md">
        {items.map((item, index) => (
          <section key={`section-${index}`} className="grid grid-cols-3 gap-4">
            {/* 1st */}
            <div className="mt-2">
              <Image src={item.image} alt="banana" className="h-40 ml-4 w-36" />
            </div>
            {/* 2nd */}
            <div className="col-span-2 mx-2">
              <div>
                <p className="text-lg font-bold">{item.title}</p>
              </div>
              <div className="flex gap-8 mt-2 flex-raw">
                <div className="text-md">${item.price}</div>
                <div className="flex flex-raw">
                  <div>
                    <button
                      className="px-3 text-white bg-black"
                      onClick={decreaseClick}
                    >
                      -
                    </button>
                  </div>
                  <div>
                    <p className="w-10 text-center bg-gray-300">{count}</p>
                  </div>
                  <div>
                    <button
                      className="px-3 text-white bg-black"
                      onClick={increaseClick}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-4">${item.totalamount}</div>
              <div className="mt-6">
                <button className="w-48 px-4 py-2 mr-4 bg-green-500 rounded">
                  Add to cart
                </button>
                <button
                  className="px-6 py-2 bg-red-700 rounded"
                  onClick={handleClose}
                >
                  X
                </button>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Modal;
