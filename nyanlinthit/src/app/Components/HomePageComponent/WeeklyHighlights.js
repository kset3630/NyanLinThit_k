import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "flowbite-react";


import WH1 from "@/assets/WH1.png";
import WH2 from "@/assets/WH2.png";
import WH3 from "@/assets/WH3.png";
import WH4 from "@/assets/WH4.png";

const WeeklyHighlights = () => {
  // const { darkMode } = useContext(DisplayTheme);
  return (
    <div className="h-[88vh] sm:h-[100vh] relative p-6 sm:p-20">
      {/* <Image
        src={WH1}
        
        alt="WH_Left"
        className="absolute -top-10 left-0 -z-1 hidden"
      />
      <Image
        src={WH2}
        alt={"WH_Center"}
        className="absolute bottom-32 right-40 hidden"
      />
      <Image
        src={WH3}
        alt={"WH_Right"}
        className="absolute top-20 right-0 hidden"
      /> */}
      <div className="w-full max-sm:px-[10px] max-md:p-12 h-full sm:h-full flex md:flex-row max-md:flex-col max-md:items-center md:justify-around max-sm:gap-x-0 max-sm:gap-y-12 gap-10">
        <div className="max-sm:w-[90%] max-sm:h-[50%] md:w-[75%] max-md:w-[85%] md:h-full  sm:h-[50%] flex gap-8">
          <div className="w-1/2 h-full flex flex-col justify-start gap-8">
            <div className="w-full h-2/5  ">
              <Image src={WH1} className="w-full h-full rounded-tl-xl" />
            </div>
            <div className="w-full h-2/5  ">
              <Image src={WH2} className="w-full h-full rounded-bl-xl" />
            </div>
          </div>
          <div className="w-1/2 h-full flex flex-col justify-end gap-8">
            <div className="w-full h-2/5  ">
              <Image src={WH3} className="w-full h-full rounded-tr-xl" />
            </div>
            <div className="w-full h-2/5  ">
              <Image src={WH4} className="w-full h-full rounded-br-xl" />
            </div>
          </div>
        </div>
        <div className="w-full sm:w-[85%] flex flex-col justify-start sm:justify-center sm:items-start gap-4">
          <div className=" w-full max-sm:text-3xl sm:text-4xl md:text-[32px] mb-2   font-medium">
            <h1 className="text-black">
              Weekly Highlights
            </h1>
          </div>
          <p className="text-[14px] md:text-xl indent-5">
            Explore our Weekly Highlights! We provide comprehensive reports from
            four critical monitoring sessions: Armed Clash Monitor, SAC Monitor,
            NUG CRPH Monitor, and others.
          </p>
          <Link href="/resources/weekly_highlights" className="block">
            <Button className="bg-theme hover:bg-inherit border-[1px] border-blue-700 rounded-3xl text-white mt-[2px]"
              
            >
              See More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WeeklyHighlights;
