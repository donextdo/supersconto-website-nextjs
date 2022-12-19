import { City } from "../../../typings";
import Slider from "../Utils/Slider";
import cit1 from "../../../assets/cities/cit1.png";
import cit2 from "../../../assets/cities/cit2.png";
import CitiesCard from "../Cards/CitiesCard";


const Cities = () => {
    const citys: City[] = [
        {
          image: cit1,
          title: "Milan",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          image: cit2,
          title: "Bari",
          description:
            "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          image: cit1,
          title: "Milan",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          image: cit2,
          title: "Bari",
          description:
            "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          image: cit1,
          title: "Milan",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          image: cit2,
          title: "Bari",
          description:
            "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ];
    
    return (  
        <div className="w-full flex flex-col gap-6">
      <h2 className="text-lg font-semibold">CITIES WITH NEARBY OFFERS</h2>

      <Slider>
      {citys.map((city, index)=>(
       < CitiesCard city={city} key={index}/>
      ))}

        </Slider>
    </div>

    );
}
 
export default Cities;