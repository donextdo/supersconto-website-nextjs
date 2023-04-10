import { City,Shop } from "../../../typings";
import Slider from "../Utils/Slider";
import cit1 from "../../../assets/cities/cit1.png";
import cit2 from "../../../assets/cities/cit2.png";
import CitiesCard from "../Cards/CitiesCard";



interface Props {
  shops: Shop[]
}

const Cities: React.FC<Props>  = ({shops}) => {
  // const citys: City[] = [
  //   {
  //     image: cit1,
  //     title: "Milan",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //   },
  //   {
  //     image: cit2,
  //     title: "Bari",
  //     description:
  //       "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //   },
  //   {
  //     image: cit1,
  //     title: "Milan",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //   },
  //   {
  //     image: cit2,
  //     title: "Bari",
  //     description:
  //       "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //   },
  //   {
  //     image: cit1,
  //     title: "Milan",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //   },
  //   {
  //     image: cit2,
  //     title: "Bari",
  //     description:
  //       "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //   },
  // ];
  const uniqueItems = shops.filter((item, index, self) => {
    return index === self.findIndex((t) => t.address.city === item.address.city);
  });

  return (
    <div className="flex flex-col gap-6 ">
      <h2 className="text-lg font-semibold">CITIES WITH NEARBY OFFERS</h2>
      <div className="">
        <section className="w-full">
            <Slider>
            {uniqueItems.map((city, index) => (
              < CitiesCard city={city} key={index} />
            ))}
            </Slider>
        </section>
        
      </div>
    </div>


  );
}

export default Cities;