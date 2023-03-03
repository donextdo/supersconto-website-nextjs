import Image from "next/image";
import Header from "../src/components/Header/Header";
import Card from "../src/components/Utils/Card";
import flyer1 from "../assets/flyers/flyer_1.jpg";
import flyer2 from "../assets/flyers/flyer_2.jpg";
import flyer3 from "../assets/flyers/flyer_3.jpg";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useRef } from "react";



const Milan = () => {
  // const targetRef = useRef(null);

  const download = async () => {
    // try {
    //   const canvas = await html2canvas(targetRef.current);
    //   const imgData = canvas.toDataURL('image/png');
    //   console.log(imgData)
    //   const pdf = new jsPDF();
    //   pdf.addImage(imgData, 'PNG', 0, 0);
    //   pdf.save('download.pdf');
    // } catch (error) {
    //   console.log(error);
    // }
  }
  return (
    <div>
      <Header />


      <div className="pt-24 container px-2 mx-auto">
        <h2 className='text-lg font-semibold my-4'>
          Location of Shops
        </h2>
        <div className="grid grid-cols-7 gap-4">
          <section
          //  ref={targetRef} 
           className="w-full h-max col-span-5">
            <Card styleClass="rounded-md flex flex-col gap-4">
              <div
                className="w-full h-[60vh] pr-2 grid grid-cols-4 gap-4 
                    overflow-y-scroll overflow-x-hidden 
                    !scrollbar-thin !scrollbar-track-transparent !scrollbar-thumb-gray-400
                    xxl:grid-cols-4"
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
              <iframe
                className="w-full h-full"
                src="https://maps.google.com/maps?width=2048&amp;height=400&amp;hl=en&amp;q=milan&amp;t=&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </Card>
          </aside>
        </div>
      </div>

      <button onClick={download}>download</button>
    </div>
  );
}

export default Milan;