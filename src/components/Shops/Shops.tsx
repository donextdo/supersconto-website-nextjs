import { Shop } from "../../../typings";
import Slider from "../Utils/Slider";
import ShopsCard from "../Cards/ShopsCard";
import sp_1 from "../../../assets/shops/sp_1.png";
import sp_2 from "../../../assets/shops/sp_2.png";
import Link from "next/link";

interface Props {
  shops: Shop[]
}

const Shops: React.FC<Props> = ({ shops }) => {
  // const shopss: Shop[] = [
  //   {
  //     image: sp_1,
  //     name: "LIDL",
  //     address: "Lorem Lorem",
  //   },
  //   {
  //     image: sp_2,
  //     name: "euronics",
  //     address: "Lorem Lorem",
  //   },
  //   {
  //     image: sp_1,
  //     name: "LIDL",
  //     address: "Lorem Lorem",
  //   },
  //   {
  //     image: sp_2,
  //     name: "euronics",
  //     address: "Lorem Lorem",
  //   },
  //   {
  //     image: sp_1,
  //     name: "LIDL",
  //     address: "Lorem Lorem",
  //   },
  //   {
  //     image: sp_2,
  //     name: "euronics",
  //     address: "Lorem Lorem",
  //   },
  //   {
  //     image: sp_1,
  //     name: "LIDL",
  //     address: "Lorem Lorem",
  //   },
  //   {
  //     image: sp_2,
  //     name: "euronics",
  //     address: "Lorem Lorem",
  //   },
  // ];

  return (
    <div className="flex flex-col w-full gap-6">
      <h2 className="text-lg font-semibold">SHOPS</h2>

      <div className="grid grid-cols-7 gap-4">
        <section className="w-full col-span-7 xl:col-span-5 xl:w-[1280px]">
          <Slider padding="px-10 py-10">
            {shops.map((shop, index) => (
              <Link href={`/shop-preview/${shop._id}`} key={index}>
                <ShopsCard shop={shop} key={index} />
              </Link>
            ))}
          </Slider>
        </section>

        <section className="w-full col-span-2"></section>

      </div>

    </div>
  );
};

export default Shops;
