"use client";
import { getItem, setItem } from "@store/storage";
import React, { useEffect, useState } from "react";

export default function Theme() {
  const localTheme = getItem("_theme");
  const [isDark, setIsDark] = useState(localTheme === "dark");

  useEffect(() => {
    // setIsDark(localTheme === "dark");
    const getOSTheme = () => {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    };
    setIsDark(getOSTheme());
  }, []);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    setItem("_theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div
      className="flex flex-col justify-center px-2 cursor-pointer"
      onClick={() => setIsDark(!isDark)}
    >
      {isDark ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 57 57"
          fill="none"
        >
          <path
            d="M15.25 17.5025C12.759 20.497 11.275 24.313 11.275 28.5C11.275 38.0135 18.9865 45.725 28.5 45.725C38.0135 45.725 45.725 38.0135 45.725 28.5C45.725 18.9865 38.0135 11.275 28.5 11.275"
            stroke="#F6E58D"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M47.421 47.421L47.0765 47.0765M47.0765 9.9235L47.421 9.579M9.579 47.421L9.9235 47.0765M28.5 2.212V2M28.5 55V54.788M2.212 28.5H2M55 28.5H54.788M9.9235 9.9235L9.579 9.579"
            stroke="#F6E58D"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 56 57"
          fill="none"
        >
          <path
            d="M7.7671 10.9675C3.76663 16.0542 1.5677 22.5715 2.07107 29.6188C3.02482 43.2628 14.6023 54.3634 28.4582 54.9728C38.2341 55.3966 46.9769 50.8398 52.2225 43.6602C54.395 40.7194 53.2293 38.7589 49.5997 39.4213C47.8247 39.7392 45.9966 39.8717 44.0891 39.7922C31.134 39.2623 20.5368 28.4266 20.4838 15.6303C20.4573 12.1862 21.1726 8.92755 22.4708 5.96031C23.9013 2.67516 22.1794 1.11207 18.8677 2.5162"
            stroke="#292D32"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
}
