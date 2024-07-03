/* eslint-disable @next/next/no-img-element */
// import Container from "@components/organisms/Container";
// import { cookies } from "next/headers";

// export default function Home() {
//   const auth = cookies().get("_userInfo");

//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <div className="flex flex-row items-center justify-center ">
//         <img
//           src="/img/anima_1.gif" // Replace with your image path
//           alt="Beautiful Landscape"
//           className="rounded-md shadow-lg mb-8"
//         />
//         <img
//           src="/img/anima_1.gif" // Replace with your image path
//           alt="Beautiful Landscape"
//           className="rounded-md shadow-lg mb-8"
//         />
//       </div>
//     </div>
//   );
// }


/* eslint-disable @next/next/no-img-element */
import Container from "@components/organisms/Container";
import { cookies } from "next/headers";

export default function Home() {
  // const auth = cookies().get('_userInfo')
  return (
    <div className=" flex flex-col min-h-screen items-center justify-center">
      <h1 className="text-7xl">Hallo Berijalan</h1>
      {/* <h1>{auth?.value}</h1> */}
      <img
          src="/img/anima_1.gif" // Replace with your image path
          alt="Beautiful Landscape"
          className="rounded-md shadow-lg mb-8"
        />
    </div>
  );
}