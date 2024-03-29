import flyer1 from '../../../assets/flyers/flyer_1.jpg'
import flyer2 from '../../../assets/flyers/flyer_2.jpg'
import AdCard from '../Cards/AdCard';

const Ad = () => {

    const ads = [
        {
            title: "KREO BRICO AND CASA",
            shopName: "shopName",
            distance: "10KM",
            date: "Untill 24 september",
            flyer: flyer1
        },
        {
            title: "KREO BRICO AND CASA",
            shopName: "shopName",
            distance: "10KM",
            date: "Untill 24 september",
            flyer: flyer2
        },
    ]
    return (
        <div className="hidden px-10 mx-auto mt-8 xl:block">
            <h2 className='mb-6 text-lg font-semibold'>
                SPECIAL FLYERS
            </h2>
            <div className="">
                {/* <section className="w-full col-span-5">{ads.map((ad) => (
                    <AdCard ad={ad} />
                ))}</section> */}
                <section className="w-full ">
                    <AdCard />
                </section>
                
            </div>
        </div>
    );
}

export default Ad;