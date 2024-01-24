import React from 'react'

const Publication = ({data}) => {
  return (
    <section>
      {data.resourse.map((item) =>(

<div key={item.id}>
  <div>{item.category}</div>

</div>

      ))


      }



    </section>
  )
}

export default Publication

















// import React from 'react'
// import { useGetClashQuery } from '@/redux/Slice/apiSlice';

// import { useRouter } from 'next/navigation';
// import Image from 'next/image';

// const Publication = () => {
// const router = useRouter();

//   const {
//     data: rpsResources,
//     isSuccess: rpsSuccess,
//     error: rpsError,
//   } = useGetClashQuery(`resources/type/RPS?page=1&limit=3&category=`);

//   if (rpsError) router.push("/error");

//   return (
//     <div>
//       {rpsResources?.resources?.map((resource) => (
//                   <div key={resource.createdAt}>
//                      <div className="h-96 flex flex-col-reverse sm:flex-row  w-full  ">
//       <div className="sm:py-4  w-full  sm:w-3/5 h-full rounded-r-xl mt-2">
//         <div className="text-lg sm:text-2xl text-start  mb-2 sm:mb-6 px-4 sm:px-8 font-medium">
//           <Typography variant="p">{resource.category}</Typography>
//         </div>
//         <div className="text-sm sm:text-base font-light text-justify indent-2  px-4 sm:px-8">
//           <Typography variant="p">{resource.title}</Typography>
//         </div>
//       </div>
//       <div className="w-full sm:w-2/5 h-1/2 sm:h-full">
//         <Image
//           src={resource.image[0]}
//           className="rounded-r-xl h-full w-full"
//           alt="resources"
//         />
//       </div>
//     </div>
//                   </div>
//                 ))}

//     </div>
//   )
// }

// export default Publication

// import React from "react";
// import { useGetClashQuery } from "@/redux/Slice/apiSlice";
// import { useRouter } from "next/navigation"; // Correct import for Next.js 14
// import Image from 'next/image';
// import Typography from "@mui/material/Typography"; // Assuming you're using Material-UI

// const Publication = () => {
//   const router = useRouter();
 
//   const {
//     data: rpsResources,
  
//     error: rpsError,
//   } = useGetClashQuery(`resources/type/RPS?page=1&limit=3&category=`);

//   console.log('Data are', rpsResources)

//   // Check for an error and navigate to the error page
//   if (rpsError) {
//     router.push("/error");
//     return null; // Prevent rendering the rest of the component in case of an error
//   }

//   return (
//     <div className="w-full h-auto bg-red-500">
//       {rpsResources?.resources?.map((resource,index) => (
//         <div key={index}>Resource: {JSON.stringify(resource)}</div>
//       ))}
//     </div>
//   );
// };

// export default Publication;



