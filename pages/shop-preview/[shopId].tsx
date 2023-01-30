import Card from "../../src/components/Utils/Card";
import Image from "next/image";
import Header from "../../src/components/Header/Header";
import requests from "../../utils/request";
import { Shps } from "../../typings";
import { useEffect } from "react";
import flyer3 from "../../assets/flyers/flyer_3.jpg";

interface Props {
    shops: any
    catelogs? : any
  }
const ShopPages : React.FC<Props>= ({catelogs ,shops}) => {
    

    useEffect(() => {
        console.log(catelogs,shops);
    }, [])
    return (  
        <>
      <Header />
      <div className="pt-24 container px-2 mx-auto">
      <h2 className='text-lg font-semibold my-4'>
            Shops of City
        </h2>
        <div className="grid grid-cols-7 gap-4">
          <section className="w-full h-max col-span-5">
            <Card styleClass="rounded-md flex flex-col gap-4">
              <div
                className="w-full h-[60vh] pr-2 grid grid-cols-4 gap-4 
                    overflow-y-scroll overflow-x-hidden 
                    !scrollbar-thin !scrollbar-track-transparent !scrollbar-thumb-gray-400
                    xxl:grid-cols-5"
              >
                {catelogs.map ((catelog :any)=>(

               
                <div className="hover:scale-105 cursor-pointer">
                    {/* { catelog.shop_id._id === shops._id ? (
                    <Image src={catelog.pages.page_image} alt="aq" />)
                    
                    } */}
                </div>
                 ))} 
              </div>
            </Card>
          </section>

          <aside className="w-full h-full col-span-2">
            {/* Shop deatils  */}

            <Card styleClass="rounded-md h-full" bgColor="bg-white">
              <div>
                <h6>{shops.shop_name}</h6>
                <h6>{shops.telephone}</h6>
                <h6>{shops.address.address_line1}</h6>
                <h6>{shops.address.city}</h6>
                <h6></h6>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </>
    );
}
 
export default ShopPages;

export const getServerSideProps = async (context: any) => {

    const [catelogs,shops] = await Promise.all([
        fetch(requests.fetchCatelogs).then((res) => res.json()),
        fetch(requests.findShopById(context.query.shopId)).then((res) => res.json())
    ])


    return {
        props: {
            catelogs: catelogs,
            shops : shops
        }
    }

}