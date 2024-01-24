'use client'
import React from "react";
import Image from "next/image";
import Research from "@/assets/WWD1.svg";
import Resource from "@/assets/WWD2.svg";
import Training from "@/assets/WWD3.svg";

const WhatWeDo = () => {
  return (
    <section className=" w-full h-auto whatwedo  bg-no-repeat bg-cover  ">
      {/* What We Do Container */}
      <div className="w-full h-full py-10">
        {/* Header */}
        <div className=" w-full text-2xl md:text-4xl mb-5  text-center font-semibold z-10 relative">
          <h1 className="text-black">What We Do!</h1>
        </div>


        {/* What We Do Content  for large screen*/}
        <div className="hidden sm:flex flex-wrap justify-center text-black gap-8 py-10">
          <div
            data-aos="zoom-in-up"
            className="w-5/6 md:w-1/4 sm:w-1/3   rounded-xl py-5"
          >
            <div className="mb-4 w-full flex justify-center">
              <Image src={Research} className="w-4/5 h-40" alt="research photo" />
            </div>
            <div className="text-lg md:text-xl font-medium text-center mb-4">
              <p>
              
                  Research & Monitoring
              </p>
            </div>
            <ul className="list-none text-center  font-light flex flex-col gap-4 text-sm sm:text-lg">
              <li>
               Research Paper Series
              </li>
              <li>Special Report</li>
              <li>
                Weekly Highlights
              </li>
            </ul>
          </div>
          <div
            data-aos="zoom-in-up"
            className="w-5/6 md:w-1/4 sm:w-1/3 rounded-xl   py-5"
          >
            <div className="mb-4 w-full flex justify-center">
              <Image src={Resource} className="w-4/5 h-40" alt="research photo" />
            </div>
            <div className="text-lg md:text-xl font-medium text-center mb-4">
              <p>
                Advocacy
              </p>
            </div>
            <ul className="list-none  text-center text-sm sm:text-lg flex flex-col gap-4 font-light">
              <li>
              
                  Regional Advocacy
              </li>
              <li>
                
                  
                  International Advocacy
              </li>
              <li>
                
                  
                  Public Engagement
              </li>
            </ul>
          </div>
          <div
            data-aos="zoom-in-up"
            className="w-5/6 md:w-1/4 sm:w-1/3 rounded-xl   py-5"
          >
            <div className="mb-4 w-full flex justify-center">
              <Image src={Training} className="w-4/5 h-40" alt="research photo" />
            </div>
            <div className="text-lg md:text-xl font-medium text-center mb-4">
              
              <p>
                Training
              </p>
            </div>
            <ul className="list-none text-center text-sm font-light sm:text-lg flex flex-col gap-4">
              <li>
                
              
                  Youth Empowerment
              </li>
              <li>
              
                  
                  Civic Education
              </li>
              <li>Reading Materials</li>
            </ul>
          </div>
        </div>

        {/* <div className="flex text-black mt-2 ">
          <div className="w-full ">
            <div className="mb-2 w-full flex justify-center">
              <Image
                src={Research}
                className="w-4/5 h-40"
                alt="research photo"
              />
            </div>
            <div className="text-lg md:text-2xl text-center mb-2">
              <p>Research & Monitoring</p>
            </div>
            <ul className="list-none text-center  font-light flex flex-col gap-2 text-sm sm:text-lg">
              <li>Research Paper Series</li>
              <li>Special Report</li>
              <li>Weekly Highlights</li>
            </ul>
          </div>

          <div className=" rounded-xl ">
            <div className="mb-2 w-full flex justify-center">
              <Image
                src={Training}
                className="w-4/5 h-40"
                alt="research photo"
              />
            </div>
            <div className="text-lg md:text-2xl text-center mb-2">
              <p>Training</p>
            </div>
            <ul className="list-none text-center text-sm font-light sm:text-lg flex flex-col gap-2">
              <li>Youth Empowerment</li>
              <li>Civic Education</li>
              <li>Reading Materials</li>
            </ul>
          </div>

          <div className=" rounded-xl">
            <div className="mb-2 w-full flex justify-center">
              <Image
                src={Resource}
                className="w-4/5 h-40"
                alt="research photo"
              />
            </div>
            <div className="text-lg md:text-2xl text-center mb-2">
              <p>Advocacy</p>
            </div>
            <ul className="list-none text-center text-sm sm:text-lg flex flex-col gap-2 font-light">
              <li>Regional Advocacy</li>
              <li>International Advocacy</li>
              <li>Public Engagement</li>
            </ul>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default WhatWeDo;
