import { Shop } from "../../../typings";
import Slider from "../Utils/Slider";
import ShopsCard from "../Cards/ShopsCard";
import sp_1 from "../../../assets/shops/sp_1.png";
import sp_2 from "../../../assets/shops/sp_2.png";

const Shops = () => {
  const shopss: Shop[] = [
    {
      image: sp_1,
      name: "LIDL",
      address: "Lorem Lorem",
    },
    {
      image: sp_2,
      name: "euronics",
      address: "Lorem Lorem",
    },
    {
      image: sp_1,
      name: "LIDL",
      address: "Lorem Lorem",
    },
    {
      image: sp_2,
      name: "euronics",
      address: "Lorem Lorem",
    },
    {
      image: sp_1,
      name: "LIDL",
      address: "Lorem Lorem",
    },
    {
      image: sp_2,
      name: "euronics",
      address: "Lorem Lorem",
    },
    {
      image: sp_1,
      name: "LIDL",
      address: "Lorem Lorem",
    },
    {
      image: sp_2,
      name: "euronics",
      address: "Lorem Lorem",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      <h2 className="text-lg font-semibold">SHOPS</h2>
      <Slider padding="px-6 py-10">
        {shopss.map((shop, index) => (  
          <ShopsCard shop={shop} key={index}/>
        ))}
      </Slider>
    </div>
  );
};

export default Shops;
