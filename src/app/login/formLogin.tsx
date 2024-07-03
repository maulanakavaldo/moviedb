"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import submitForm from "./submitForm";
import { useRouter } from "next/navigation";
import IMAGES from "@assets/images";
import Image from "next/image";

export interface FormLogin {
  email: string;
  password: string;
}

const schema = yup.object({
  email: yup
    .string()
    .email("Format email tidak sesuai")
    .required("Email harus di isi")
    .matches(
      /^(?![\w\.@]*\.\.)(?![\w\.@]*\.@)(?![\w\.]*@\.)\w+[\w\.]*@[\w\.]+\.\w{2,}$/i,
      "Format email tidak seuai"
    ),
  password: yup.string().required("Password harus di isi"),
});

export default function FormLogin() {
  const router = useRouter();
  const form = useForm<FormLogin>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
    mode: "onChange", // kapan ketika validasi itu akan dipanggil
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;
  const onSubmited = async (data: FormLogin) => {
    console.log(data);

    submitForm(data)
      .then((res) => {
        console.log(res);
        router.push("/");
      })
      .catch(() => {
        alert("username atau password salah");
      });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmited)}
        className="flex flex-col custom-shadow p-5 w-[300px] gap-2 mx-auto border border-blue-900"
      >
        <div className=" flex justify-center items-center">
          <Image
            src={IMAGES.logoBerijalan}
            alt="logo"
            width={30}
            height={50}
            // width={200}
            // height={50}
            style={{ width: 50, height: 50 }}
            priority
          />
        </div>
        <h1>Email</h1>
        <input
          type="email"
          className="bg-blue-200 rounded-md p-2"
          placeholder="Email"
          {...register("email")}
        />
        <p className="text-red-700 text-sm">{errors.email?.message}</p>

        <h1 className="mt-2">Password</h1>
        <input
          type="password"
          className="bg-blue-200 rounded-md p-2"
          placeholder="Password"
          {...register("password")}
        />
        <p className="text-red-700 text-sm">{errors.password?.message}</p>

        <button type="submit" className="bg-yellow-200 p-2 rounded-md">
          Login
        </button>
      </form>
    </div>
  );
}

// "use client";
// import React from "react";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { useForm } from "react-hook-form";
// import { useRouter } from "next/navigation";
// import submitForm from "./submitForm";

// export interface FormLogin {
//   email: string;
//   password: string;
// }

// const schema = yup.object({
//   email: yup
//     .string()
//     .email("Format Email tidak sesuai")
//     .required("Email harus di isi")
//     .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i, "Format Email tidak sesuai"),
//   password: yup.string().required("Password harus diisi"),
// });

// export default function FormLogin() {
//   const router = useRouter();

//   const form = useForm<FormLogin>({
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//     resolver: yupResolver(schema),
//     mode: "onChange", // kapan ketika validasi itu akan dipanggil
//   });

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = form;

//   const onSubmit = async (data: FormLogin) => {
//     submitForm(data)
//       .then((res) => {
//         console.log(res);
//         router.push("/");
//       })
//       .catch(() => {
//         alert("username atau password salah");
//       });
//   };

//   return (
//     <div>
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="flex flex-col custom-shadow align-center p-5 w-[300px] gap-2 mx-auto border-blue-900 border"
//       >
//         <h1>Email</h1>
//         <input
//           className="border-2 text-blue-40 bg-blue-200 rounded-md p-2"
//           type="text"
//           id="Email"
//           placeholder="Email"
//           {...register("email")}
//         />
//         <p className="text-red-700 align-right">{errors.email?.message}</p>
//         <h1>Password</h1>
//         <input
//           className="border-2 text-blue-40 bg-blue-200 rounded-md p-2"
//           type="password"
//           id="password"
//           placeholder="Password"
//           {...register("password")}
//         />
//         <p className="text-red-700 align-right">{errors.password?.message}</p>
//         <button type="submit" className="bg-yellow-300 p-2 rounded-md mt-5">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }
