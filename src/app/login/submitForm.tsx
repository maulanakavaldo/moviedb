"use server";

import satellite from "@services/satellite";
import { cookies } from "next/headers";
import { FormLogin } from "./formLogin";

export default async function submitForm(data: FormLogin) {
  return await satellite
    .post("https://be-rmy.dev.berijalan.co.id/rest/v1/auth/login", data)
    .then((response) => {
      console.log("RESPONSE SUCCESS", response);
      cookies().set("ca_userInfo", JSON.stringify(response.data.data));
      return "login berhasil";
    })
    .catch((error) => {
      console.log("RESPONSE ERROR", error);
      throw new Error("login gagal");
    });
}


// "use server";
// import { FormLogin } from "./formLogin";
// // import FormLogin from "./formLogin";
// import satellite from "@services/satellite";
// import { cookies } from "next/headers";

// export default async function submitForm(data: FormLogin) {
//   return await satellite
//     .post("https://be-rmy.dev.berijalan.co.id/rest/v1/auth/login", data)
//     .then((response) => {
//       console.log("RESPONSE SUCCESS", response);
//       cookies().set("ca_userInfo", JSON.stringify(response.data.data));
//       return "login berhasil";
//     })
//     .catch((error) => {
//       console.log("RESPONSE ERROR", error);
//       throw new Error("login gagal");
//     });
// }
