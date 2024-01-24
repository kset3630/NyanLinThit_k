
import HeroSection from "../Components/HomePageComponent/HeroSection";
import WeeklyHighlights from "../Components/HomePageComponent/WeeklyHighlights";
import WhatWeDo from "../Components/HomePageComponent/WhatWeDo";


import HomeApi from "./Publication&Statement";




export default  function HomePage() {

 

    

  //   remove array number where listItems._id === STATEMENTS from listItems

  



  return (
    <>
      <section className=" max-container h-auto">
        <HeroSection />
        <WeeklyHighlights />
        <WhatWeDo />
       
        <HomeApi />
      </section>
    </>
  );
}
