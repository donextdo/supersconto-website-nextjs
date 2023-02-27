import React from "react";
import Slider from "../Utils/Slider";
import { News } from "../../../typings";
import SwiperCard from "../Utils/SwiperCard";
import news1 from "../../../assets/news/news1.jpg";
import news2 from "../../../assets/news/news2.jpg";
import NewsCard from "../Cards/NewsCard";

interface Props {
  allnews: News[]
}

const News: React.FC<Props> = ({allnews}) => {
  // const newss: News[] = [
  //   {
  //     image: news1,
  //     title: "Event for Halloween",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem",
  //   },
  //   {
  //     image: news2,
  //     title: "LIDL",
  //     description:
  //       "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //   },
  // ];

  return (
    <div className="w-full flex flex-col gap-6">
      <h2 className="text-lg font-semibold">NEWS</h2>

      <div className="grid grid-cols-7 gap-4">

        <section className="w-full col-span-7 xl:col-span-5">
          <Slider>
            {allnews.map((news, index) => (

              < NewsCard news={news} key={index} />
            ))}
          </Slider>
        </section>
        <section className="w-full col-span-2"></section>
      </div>


    </div>
  );
};

export default News;
