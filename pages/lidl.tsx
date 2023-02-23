import Image from "next/image";
import flyer1 from "../assets/flyers/flyer_1.jpg";
import flyer2 from "../assets/flyers/flyer_2.jpg";
import flyer3 from "../assets/flyers/flyer_3.jpg";
import Header from "../src/components/Header/Header";
import Card from "../src/components/Utils/Card";

const Lidl = () => {
  return (
    <>
      <Header />
      {/* <div className="grid grid-cols-7 gap-4 mx-28 my-2">
            <div className="flex flex-raw gap-4 bg-white w-full h-max col-span-5 px-auto">
                <div><Image src={flyer1} alt="aq" /></div>
                <div><Image src={flyer2} alt="aqa" /></div>
                <div><Image src={flyer3} alt="aqqa" /></div>
                <div><Image src={flyer1} alt="aqaq" /></div>

            </div>
            <div className="bg-white w-full h-max col-span-2 text-center">Shop details</div>
        </div> */}

      <div className="pt-24 container px-2 mx-auto">
      <h2 className='text-lg font-semibold my-4'>
            Shops of City
        </h2>
        <div className="grid grid-cols-7 gap-4">
          <section className="w-full h-full col-span-5">
            <Card styleClass="rounded-md flex flex-col gap-4">
              <div
                className="w-full h-[60vh] pr-2 grid grid-cols-4 gap-4 
                    overflow-y-scroll overflow-x-hidden 
                    !scrollbar-thin !scrollbar-track-transparent !scrollbar-thumb-gray-400
                    xxl:grid-cols-5"
              >
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
                  <Image src={flyer1} alt="aqaq" />
                </div>
              </div>
            </Card>
          </section>

          <aside className="w-full h-full col-span-2">
            {/* Shop deatils  */}

            <Card styleClass="rounded-md h-full" bgColor="bg-white">
              Shop details
            </Card>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Lidl;
