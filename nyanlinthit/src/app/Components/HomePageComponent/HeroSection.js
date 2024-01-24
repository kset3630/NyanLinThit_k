'use client'
import React from "react";
import Link from "next/link";
import { Button } from "flowbite-react";

const HeroSection = () => {
  
  
  return (
    <section className="h-[70vh] sm:h-[50vh]  md:h-screen  relative z-10 ">
      <div className="h-full w-full absolute  flex items-center justify-start home-hero">
        <div
          data-aos="fade-left"
          className="w-full  rounded-lg p-5 sm:ps-20 text-white "
        >
          <div className="mb-6 md:mb-10  text-3xl sm:text-4xl md:text-[64px] font-bold">
            <p>Nyan Lynn Thit Analytica</p>
          </div>
          <div className="w-2/3 sm:w-1/2">
            <p className="text-[14px] sm:text-2xl font-thin  pt-3">
            
    is a non-profit organization that tends to political research,
            advocacy, and youth empowerment.
            </p>
          </div>
          <div className="mt-5">
          
            <Link href="/aboutus">
              <Button className="bg-transparent hover:bg-inherit border-[1px] border-white rounded-3xl text-white">
                See More
                </Button>
            </Link>
            </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
