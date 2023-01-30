import Image from "next/image";
import sh1 from "../assets/shops/sp_1.png"; 
const Print = () => {

    
    return (
        
        <div className="fixed inset-0 z-50 grid place-items-center bg-slate-900 bg-opacity-10">
            <div className="py-6 px-4 flex gap-6 flex-col relative bg-white shadow-md rounded-md w-2/5 h-48">
                <div className="overflow-auto ">
                    <>

                        <div className="flex justify-between px-2 border border-gray-200 bg-gray-200 py-2 items-center ">
                            <div className="flex flex-raw gap-8 items-center">
                                <Image src={sh1} alt="cart" className="h-10 w-16" />
                                <h6>shopName</h6>
                            </div>
                            <div>Amount </div>
                        </div>


                        < div className="grid grid-cols-5 gap-4 my-4 mx-4 py-2 item-center w-full">
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
                    </>
                </div>
            </div>
        </div>
    );
}

export default Print;