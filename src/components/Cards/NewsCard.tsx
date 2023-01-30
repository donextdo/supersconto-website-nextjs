import { News } from "../../../typings";
import Image from "next/image";
import React from "react";

interface Props {
  news: News;
}

const NewsCard: React.FC<Props> = ({ news }) => {
  return (
    <div className="space-y-2 my-6 w-full max-w-[16rem] min-w-[12.5rem] h-96 rounded-br-lg rounded-bl-lg bg-gray-100h-full ">
      <div>
        <Image src={news.image} alt={news.title} />
      </div>
      <div className="flex flex-col mx-2 text-center">
        <h6 className="font-semibold">{news.title}</h6>
        <p className="text-xs">{news.description}</p>
      </div>
      <div className="text-center">
        <button className="text-[#CD212A] border border-[#CD212A] px-8 rounded-md">
          View More
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
