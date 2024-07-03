/* eslint-disable @next/next/no-img-element */
"use client";

import satellite from "@services/satellite";
import Link from "next/link";
import React, { useState } from "react";
import useSWR from "swr";

const fetcher = (uri: string) =>
  satellite
    .get(uri, {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTRmOTk4MTUyMDE0YjQxNDI3NjZjZDc3ZDY0ZGEzYSIsInN1YiI6IjY1MjM4M2QyZmQ2MzAwMDExYzc3NTk2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SqhIn7K3hWu01PBhS5ysr0Kw2esNatQNDTg4Aub7ua8",
      },
    })
    .then((res) => res.data);

export default function ListNowPlaying() {
  const [searchValue, setSearchValue] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResults, setSearchResults] = useState([]);

  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${currentPage}`,
    fetcher
  );

  const onSubmited = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchValue.length >= 3) {
      try {
        const searchResultsResponse = await satellite.get(
          `https://api.themoviedb.org/3/search/movie?language=en-US&page=1&query=${searchValue}`,
          {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTRmOTk4MTUyMDE0YjQxNDI3NjZjZDc3ZDY0ZGEzYSIsInN1YiI6IjY1MjM4M2QyZmQ2MzAwMDExYzc3NTk2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SqhIn7K3hWu01PBhS5ysr0Kw2esNatQNDTg4Aub7ua8",
            },
          }
        );

        setSearchResults(searchResultsResponse.data.results || []);
        setErrorMessage(null);
      } catch (error) {
        console.error("Error searching movies:", error);
        setErrorMessage("Error searching movies. Please try again.");
        setSearchResults([]);
      }
    } else {
      console.log("Masukkan setidaknya 3 huruf untuk melakukan pencarian");
      setErrorMessage("Masukkan setidaknya 3 huruf untuk melakukan pencarian");
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderPageLinks = () => {
    const totalPages = data?.total_pages || 0;
    const maxVisiblePages = 5; // Adjust this number based on your preference
    const halfMaxVisiblePages = Math.floor(maxVisiblePages / 2);

    let startPage = Math.max(currentPage - halfMaxVisiblePages, 1);
    let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(endPage - maxVisiblePages + 1, 1);
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index
    );
  };

  return (
    <div>
      <form className="flex mt-5 rounded-xl" onSubmit={onSubmited}>
        <input
          placeholder="Search Movie"
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
        {errorMessage && (
          <p className="error-message">{errorMessage}</p>
        )}

      <div className="popular-title">
        <h1>Now Playing</h1>
        <hr></hr>
      </div>
      <div className="movie-list">
        {error && <div className="error-message"> Error: {error.message}</div>}
        {isLoading && <div className="text-center"> Loading...</div>}
        {(searchResults.length > 0 ? searchResults : data?.results || []).map(
          (movie: any) => (
            <div key={movie.id} className="movie-item">
              <Link href={"/popular/" + movie.id} className="movie-link">
                <div className="movie-container">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={`${movie.title} Poster`}
                    width={200}
                    height={300}
                  />
                  <div className="rating">
                    <p className="movie-item-rating">{movie.vote_average}</p>
                    <div className="rating-star">&#11088;</div>
                  </div>
                </div>
                <h2 className="movie-item-title">{movie.title}</h2>
              </Link>
            </div>
          )
        )}
      </div>

      <div className="pagination">
        {renderPageLinks().map((page) => (
          <Link key={page} href={`/now-playing?page=${page}`}>
            <span
              onClick={() => handlePageChange(page)}
              className={`page-number ${currentPage === page ? "active" : ""}`}
            >
              {page}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
