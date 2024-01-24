
import { useRef } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import axios from "axios";
// import SAC from "../Components/HomePageComponent/SwiperComponents/SAC";

// Swiper
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// fetch data from "example.com/api"
export default async function HomeApi() {
  const response = await axios.get(
    "https://be.nyanlynnthitanalytica.org/api/v1/home"
  );

  let listWithoutState = [];
  let listStatement = [];

  listWithoutState = response.data.resources;
  listStatement = response.data.resources;

  //   remove array number where listItems._id === STATEMENTS from listItems

  let Statements = listStatement.filter((item) => item._id === "STATEMENTS");

  for (var i = 0; i < listWithoutState.length; i++) {
    if (listWithoutState[i]._id === "STATEMENTS") {
      listWithoutState.splice(i, 1);
    }
  }

  const swiperRef = useRef();

  return (
    <>
      <h2>Publication</h2>

      {listWithoutState.map((item) => (
        <div key={item._id}>
          {/* Displaying the inner resources array */}
          {item.resources &&
            item.resources.map((resource) => (
              <div key={resource.id}>
                <Swiper
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  spaceBetween={100}
                  loop={true}
                  className={`mySwiper h-full  shadow-xl rounded-xl bg-[#D9D9D9] sm:bg-[white]"
                  `}
                >
                  <SwiperSlide>
                  {/* Card */}
                  <div className="h-96 flex flex-col-reverse sm:flex-row  w-full  ">
                    <div className="sm:py-4  w-full  sm:w-3/5 h-full rounded-r-xl mt-2">
                      <div className="text-lg sm:text-2xl text-start  mb-2 sm:mb-6 px-4 sm:px-8 font-medium">
                        <p>{resource.category}</p>
                      </div>
                      <div className="text-sm sm:text-base font-light text-justify indent-2  px-4 sm:px-8">
                        <p>{resource.title}</p>
                      </div>
                    </div>
                    <div className="w-full sm:w-2/5 h-1/2 sm:h-full">
                      <img
                        src={resource.image[0]}
                        className="rounded-r-xl h-full w-full"
                        alt="resources"
                      />
                    </div>
                  </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            ))}
        </div>
      ))}
      <h2>STATEMENTS</h2>

      {Statements.map((item) => (
        <div key={item._id}>
          <p>ID: {item._id}</p>
          {/* Displaying the inner resources array */}
          {item.resources &&
            item.resources.map((resource) => (
              <div key={resource.id}>
                <div className="h-96 flex flex-col-reverse sm:flex-row  w-full  ">
                  <div className="sm:py-4  w-full  sm:w-3/5 h-full rounded-r-xl mt-2">
                    <div className="text-lg sm:text-2xl text-start  mb-2 sm:mb-6 px-4 sm:px-8 font-medium">
                      <p>{resource.category}</p>
                    </div>
                    <div className="text-sm sm:text-base font-light text-justify indent-2  px-4 sm:px-8">
                      <p>{resource.title}</p>
                    </div>
                  </div>
                  <div className="w-full sm:w-2/5 h-1/2 sm:h-full">
                    <img
                      src={resource.image[0]}
                      className="rounded-r-xl h-full w-full"
                      alt="resources"
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      ))}
    </>
  );
}

{/* <Swiper
  onSwiper={(swiper) => {
    swiperRef.current = swiper;
  }}
  spaceBetween={100}
  loop={true}
  className={`mySwiper h-full  shadow-xl rounded-xl ${
    darkMode ? "bg-[#03070E]" : "bg-[#D9D9D9] sm:bg-[white]"
  }`}
>
  {rpsResources?.resources?.map((resource) => (
    <SwiperSlide key={resource.createdAt}>
      <SAC resource={resource} />
    </SwiperSlide>
  ))}
  {srsResources?.resources?.map((resource) => (
    <SwiperSlide key={resource.createdAt}>
      <SAC resource={resource} />
    </SwiperSlide>
  ))}
  {refResources?.resources?.map((resource) => (
    <SwiperSlide key={resource.createdAt}>
      <SAC resource={resource} />
    </SwiperSlide>
  ))}
  <div className="gap-6  sm:hidden flex justify-center py-5">
    <button
      onClick={() => swiperRef.current.slidePrev()}
      className={` rounded-full border ${
        darkMode ? "border-white" : "border-black"
      }  sm:p-4`}
    >
      <ArrowBackIcon />
    </button>
    <button
      onClick={() => swiperRef.current.slideNext()}
      className={` rounded-full border ${
        darkMode ? "border-white" : "border-black"
      }  sm:p-4`}
    >
      <ArrowForwardIcon />
    </button>
  </div>
</Swiper>; */}
