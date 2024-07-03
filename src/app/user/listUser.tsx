/* eslint-disable @next/next/no-img-element */
"use client";
import satellite from "@services/satellite";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import useSWR from "swr";
import { useSelector, useDispatch } from "react-redux";
import { StateRedux } from "@interface/interfaceRedux";
import { setDataCount } from "@store/actions/actionCount";

const fetcher = (uri: string) =>
  satellite
    .get(uri, {
      headers: {
        Authorization: "Bearer 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",
      },
    })
    .then((res) => res.data);

export default function ListUser() {
  const dispatch = useDispatch();
  const dataCount = useSelector((state: StateRedux) => state.dataCount);
  const [search, setSearch] = useState<string | undefined>();
  const [searchValue, setSearchValue] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { data, error, isLoading } = useSWR(
    "https://api.github.com/search/users?q=" + search,
    fetcher
  );

  const onSubmited = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchValue.length >= 3) {
      console.log("Melakukan pencarian untuk:", searchValue);
      setSearch(searchValue);
      setErrorMessage(null); // Reset error message
    } else {
      console.log("Masukkan setidaknya 3 huruf untuk melakukan pencarian");
      setErrorMessage("Masukkan setidaknya 3 huruf untuk melakukan pencarian");
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="px-10">
      {/* <h1>DATA COUNT REDUX: {dataCount.increment}</h1>
      <button onClick={() => dispatch(setDataCount(dataCount.increment + 1))}>
        PLUS
      </button>
      <button onClick={() => dispatch(setDataCount(dataCount.increment - 1))}>
        MINUS
      </button> */}

      <form className="flex mt-5 rounded-xl" onSubmit={onSubmited}>
        <input
          placeholder="Cari Users"
          className="flex-1 p-2 rounded-md text-black bg-blue-100 custom-shadow"
          value={searchValue}
          onChange={handleInputChange}
        />
        <button className="bg-yellow-200 px-5 py-2 rounded-md custom-shadow ml-2 w-[100px] flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M19.4806 3C28.5884 3 35.9613 10.3729 35.9613 19.4806C35.9613 28.5884 28.5884 35.9613 19.4806 35.9613C10.3729 35.9613 3 28.5884 3 19.4806C3 13.0619 6.66044 7.51049 12.021 4.78685"
              stroke="#132040"
              strokeWidth="4.15185"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M37.696 37.6962L34.2264 34.2266"
              stroke="#132040"
              strokeWidth="4.15185"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <div className="user-list">
        {error && <div> Error: {error.message}</div>}
        {isLoading && <div className="text-center"> Loading...</div>}
        {data?.items.map((item: any) => (
          <div key={item.id} className="user-item">
            <Link href={"/user/" + item.login} className="user-link">
              <img
                src={item.avatar_url}
                alt={`${item.login}'s Avatar`}
                className="user-avatar"
              />
              {item.login}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
