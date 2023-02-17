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
        <div className=" hidden xl:block pt-24  px-10 mx-auto">
            <h2 className='text-lg font-semibold mb-6'>
                SPECIAL FLYERS
            </h2>
            <div className="grid grid-cols-7 gap-4">
                {/* <section className="w-full col-span-5">{ads.map((ad) => (
                    <AdCard ad={ad} />
                ))}</section> */}
                <section className="w-full col-span-5">
                    <AdCard />
                </section>
                <section className="w-full col-span-2"></section>
            </div>
        </div>
    );
}

export default Ad;