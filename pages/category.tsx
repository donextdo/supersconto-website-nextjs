import Image from "next/image";
import Header from "../src/components/Header/Header";
import Card from "../src/components/Utils/Card";
import flyer1 from "../assets/flyers/flyer_1.jpg";
import flyer2 from "../assets/flyers/flyer_2.jpg";
import flyer3 from "../assets/flyers/flyer_3.jpg";

const Category = () => {
    return (
        <div>
            <Header />
            <div className="container mt-24 px-2 mx-auto">
                <h2 className='text-lg font-semibold my-4'>
                    Latest Flyers of Catergory
                </h2>
                <div className="grid grid-cols-7 gap-4 rounded-md bg-white p-2">

                    <div className="hover:scale-105 cursor-pointer">
                        <Image src={flyer1} alt="aq" />
                    </div>
                    <div>
                        <Image src={flyer2} alt="aqa" />
                    </div>
                    <div>
                        <Image src={flyer3} alt="aqqa" />
                    </div>
                    <div>
                        <Image src={flyer1} alt="aqaq" />
                    </div>
                    <div>
                        <Image src={flyer1} alt="aqaqd" />
                    </div>
                    <div>
                        <Image src={flyer1} alt="aqaqg" />
                    </div>
                    <div>
                        <Image src={flyer1} alt="aqaqq" />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Category;

