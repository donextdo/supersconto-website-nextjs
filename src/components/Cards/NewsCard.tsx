import { News } from "../../../typings";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import news1 from "../../../assets/news/news1.jpg";

interface Props {
  news: News;
}

const NewsCard: React.FC<Props> = ({ news }) => {
  return (
    <div className="space-y-4 my-6 max-w-[16rem] min-w-[12.5rem] h-96 w-64 ">
      <div className="overflow-hidden rounded-md">
        <Image
          src={news.image}
          alt={news.title}
          style={{
            objectFit: "cover",
            backgroundColor: "gray",
            width: "100%",
            height: "230px",
          }}
          sizes="height: 100%"
          // width={450}
          // height={400}
        />
      </div>
      <div className="flex flex-col w-full h-24 px-1 whitespace-no-wrap">
        <h6 className="text-xl font-semibold text-left ">{news.title}</h6>
        <p className="w-full mt-2 text-xs text-justify text-gray-600">
          {news.description.substring(0, 125)} ...
        </p>
        {/* <div className="h-20 text-xs oveflow-hidden ">{news.description}</div> */}
      </div>
      
    
    <div className="text-center ">
    <Link href={"/print"}>
      <button className="text-[#CD212A] border border-[#CD212A] px-8 rounded-md hover:bg-[#CD212A] hover:text-white">
        Read More
      </button>
    </Link>
  </div>
  </div>
  );
};

export default NewsCard;
