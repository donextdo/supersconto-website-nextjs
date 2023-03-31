import Link from "next/link";
import { useState } from "react";
import Bill from "./Bill";
import Ship from "./Ship";

const Address = () => {
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);

  const handleClick = () => {
    setModal(true);
    setModal1(false);
  };
  const handleClick1 = () => {
    setModal1(true);
    setModal(false);
  };
  return (
    <div className="md:mx-5">
      <p>
        The following addresses will be used on the checkout page by default.
      </p>

      <div className="grid gap-8 mt-4 sm:grid-cols-2">
        <div>
          <h2 className="mb-2 font-semibold">BILLING ADDRESS</h2>
          <hr />
          {/* <Link href="/bill"><h2 className="text-[#2bbef9] mt-4">Add</h2></Link>  */}
          <button className="mt-4 text-blue-400" onClick={handleClick}>
            Add
          </button>

          <h2>You have not set up this type of address yet.</h2>
        </div>

        <div>
          <h2 className="mb-2 font-semibold">SHIPPING ADDRESS</h2>
          <hr />
          {/* <h2 className="text-[#2bbef9] mt-4">Add</h2> */}
          <button className="mt-4 text-blue-400" onClick={handleClick1}>
            Add
          </button>

          <h2>You have not set up this type of address yet.</h2>
        </div>
      </div>

      {modal && <Bill />}

      {modal1 && <Ship/>}
    </div>
  );
};

export default Address;
