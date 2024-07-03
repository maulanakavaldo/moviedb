"use client";
import React, { useEffect, useState } from "react";
import satellite from "@services/satellite";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface Genre {
  id: number;
  name: string;
}

interface ProductionCompanies {
  id: number;
  name: string;
  country: string;
}

interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}
interface MovieDetails {
  adult: boolean;
  backdrop_path: string | null;
  id: number;
  genres: Genre[];
  production_companies: ProductionCompanies[];
  production_countries: ProductionCountry[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface Params {
  params: { id: number };
}

async function getMovieDetails(id: number) {
  try {
    const response = await satellite.get(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTRmOTk4MTUyMDE0YjQxNDI3NjZjZDc3ZDY0ZGEzYSIsInN1YiI6IjY1MjM4M2QyZmQ2MzAwMDExYzc3NTk2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SqhIn7K3hWu01PBhS5ysr0Kw2esNatQNDTg4Aub7ua8",
        },
      }
    );
    const movieData = response.data;
    const movieId = movieData.id;
    console.log("Movie ID:", movieId);
    console.log("RESPONSE SUCCESS", response);
    return movieData;
  } catch (error) {
    console.log("RESPONSE ERROR", error);
    throw error;
  }
}

export default function MovieDetails({ params: { id } }: Params) {
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id === undefined || id === null) {
      console.error("Invalid movie ID");
      return;
    }
    getMovieDetails(id)
      .then((data) => {
        setMovieDetails(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
        setIsLoading(false);
      });
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  // STAR
  const filledStars = Math.floor(movieDetails.vote_average / 2); // Menghitung jumlah bintang yang diisi

  const starArray = Array.from({ length: 5 }, (_, index) => (
    <FontAwesomeIcon
      key={index}
      icon={faStar}
      className={`text-${index < filledStars ? 'yellow-400' : 'gray-400'} mr-2`}
      style={{ color: index < filledStars ? 'yellow' : 'gray' }}
    />
  ));

  return (
    <div className="flex flex-col items-center p-6 mb-[200px] text-white rounded-lg shadow-lg">
      <Image
        className="rounded-lg mb-4"
        src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
        width={800}
        height={400}
        alt={movieDetails.title}
      />
      <div className="text-center">
        <h1 className="text-4xl font-extrabold">{movieDetails.title}</h1>
        <p className="mt-2 text-gray-400">
          Release date: {movieDetails.release_date}
        </p>
        <p className="mt-2">{starArray}</p>
        <p className="mt-2">{movieDetails.vote_average}/10</p>

        {/* COL */}
        <div className="flex flex-row items-center justify-center">
          <div className="mt-2 ">
            <h2 className="text-lg font-bold">Language: </h2>
            <span className="text-gray-400">
              {movieDetails.original_language}
            </span>
          </div>
          {/* GENRE */}
          {movieDetails.genres && (
            <div className="mt-2  ml-10">
              <h2 className="text-lg font-bold">Genres: </h2>
              <span className="text-gray-400">
                {movieDetails.genres.map((genre, index) => (
                  <span key={genre.id}>
                    {/* <a
                    href={`https://www.themoviedb.org/${genre.id}/movie/list?language=en`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  > */}
                    {genre.name}
                    {/* </a> */}
                    {index !== movieDetails.genres.length - 1 ? ", " : ""}
                  </span>
                ))}
              </span>
            </div>
          )}

          {/* Production */}
          {movieDetails.production_companies &&
            Array.isArray(movieDetails.production_companies) && (
              <div className="mt-2 ml-10">
                <h2 className="text-lg font-bold">Production: </h2>
                <span className="text-gray-400">
                  {movieDetails.production_companies.map((company, index) => (
                    <span key={company.id}>
                      {/* <a
                      href={`https://api.themoviedb.org/3/search/company?query=${company.name}&page=1`}
                      target="_blank"
                      className="text-blue-500 hover:underline"
                    > */}
                      {company.name}
                      {/* </a> */}
                      {index !== movieDetails.production_companies.length - 1
                        ? ", "
                        : ""}
                    </span>
                  ))}
                </span>
              </div>
            )}
          {/* Country */}
          {movieDetails.production_countries && (
            <div className="mt-2 ml-10">
              <h2 className="text-xl font-bold">Country: </h2>
              <span className="text-gray-400">
                {movieDetails.production_countries.map((country) => (
                  <span key={country.iso_3166_1}>{country.name}</span>
                ))}
              </span>
            </div>
          )}
        </div>

        <hr className="border-gray-600 my-4" />

        {/* Synopsis */}
        <h1 className="text-3xl font-extrabold mt-6">Synopsis</h1>
        <p className="mt-5">{movieDetails.overview}</p>
      </div>
    </div>
  );
}
