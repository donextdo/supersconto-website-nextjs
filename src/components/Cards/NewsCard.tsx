import { News } from "../../../typings";
import Image from "next/image";
import React from "react";
import Link from "next/link";

interface Props {
  news: News;
}

const NewsCard: React.FC<Props> = ({ news }) => {
  return (
    <div className="space-y-2 my-6 max-w-[16rem] min-w-[12.5rem] h-96 w-64 ">
      <div className="rounded-md overflow-hidden">
        <Image src={news.image}
          alt={news.title}
          style={{ objectFit: "cover", backgroundColor: "gray",width:"100%",height:"230px" }}
          sizes='height: 100%'
          // width={450}
          // height={400}
          />
      </div>
      <div className="flex flex-col   whitespace-no-wrap w-full px-1 h-24">
        <h6 className="font-semibold text-center">{news.title}</h6>
        <p className="text-xs w-full text-left">{news.description.substring(0,145)} ...</p>
        {/* <div className="text-xs h-20 oveflow-hidden ">{news.description}</div> */}

      </div>
      <div className="text-center">
        <Link href={"/print"} >
          <button className="text-[#CD212A] border border-[#CD212A] px-8 rounded-md hover:bg-[#CD212A] hover:text-white">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
