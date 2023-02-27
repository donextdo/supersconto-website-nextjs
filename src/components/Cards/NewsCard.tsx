import { News } from "../../../typings";
import Image from "next/image";
import React from "react";
import Link from "next/link";

interface Props {
  news: News;
}

const NewsCard: React.FC<Props> = ({ news }) => {
  return (
    <div className="space-y-2 my-6 w-full max-w-[16rem] min-w-[12.5rem] h-96  bg-gray-100h-full ">
      <div className="rounded-md overflow-hidden">
        <Image src={news.image}
          alt={news.title}
          style={{ objectFit: "cover", backgroundColor: "gray",width:"100%",height:"230px" }}
          sizes='height: 100%'
          // width={450}
          // height={400}
          />
      </div>
      <div className="flex flex-col mx-2 text-center">
        <h6 className="font-semibold">{news.title}</h6>
        <p className="text-xs">{news.description}</p>
      </div>
      <div className="text-center">
        <Link href={"/print"} >
          <button className="text-[#CD212A] border border-[#CD212A] px-8 rounded-md">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
