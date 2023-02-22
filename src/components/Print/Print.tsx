import Image from "next/image";
import sh1 from "../../../assets/shops/sp_1.png";
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { GrFormClose } from 'react-icons/gr';

interface Props {
    setPrint: any

}

const Print: React.FC<Props> = ({ setPrint}) => {
   
    const componentRef = useRef(null);
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const printClose = () => {
        setPrint(false)
    }
    return (
        <div className="fixed inset-0 z-50 grid place-items-center bg-slate-900 bg-opacity-70" >
            <div className="py-6 px-4 flex gap-6 flex-col relative bg-white shadow-lg rounded-md w-2/5">
                <div id="print-container">
                    
                    <section ref={componentRef}>
                        <div className=" mt-2 text-2xl bold">Shopping List</div>
                        <div className="flex justify-between px-2 border border-gray-200 bg-gray-200 py-2 items-center mt-2">
                            <div className="flex flex-raw gap-8 items-center">
                                <Image src={sh1} alt="cart" className="h-10 w-16" />
                                <h6>shopName</h6>
                            </div>
                            <div>Amount </div>
                        </div>


                        <div className="grid grid-cols-5 gap-4 my-4 mx-4 py-2 item-center w-full">
                            {/* 1st column */}
                            < div >
                                <Image src={sh1} alt="fly" className="h-10 w-10" />
                            </div>

                            {/* 2nd column */}
                            <div>
                                <p>name</p>
                            </div>

                            {/* 3rd */}
                            <div>
                                <h6>unit price</h6>
                            </div>

                            {/* 4th column */}
                            <div className="flex flex-raw">
                                <h6>count</h6>
                            </div>

                            {/* 5th column */}

                            <div className="text-right pr-5">
                                Full amount
                            </div>
                        </div>

                        <div className="text-right pr-2">
                            <div>Grand total</div>
                        </div>

                    </section>
                    <div className="grid grid-cols-3 gap-4 text-center mt-4 mx-20">
                        <div className="col-span-2"><button onClick={handlePrint} className="w-full bg-[#8DC14F] rounded-md py-2 ">Print</button></div>
                        <div className=""><button className="flex items-center justify-center rounded-md  px-2.5 py-[5px] text-3xl bg-red-500 w-full" onClick={printClose}><GrFormClose /></button></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Print;