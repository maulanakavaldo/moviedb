
import React from "react";
import FormLogin from "./formLogin";

export const metadata = {
  title: "Login",
};

export default function Login() {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <FormLogin />
    </div>
  );
}