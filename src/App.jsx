import React, { useEffect, useState } from "react";
import { configDotenv } from "dotenv";
import Navbar from "./components/universal/home-page-related/navbar";

const MovieComponent = () => {
  const [movies, setMovies] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/all/day?language=en-US`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODliY2ViODMwMTI4MzBmM2UzMDQ3Yjc0YzVlYjY5YiIsIm5iZiI6MTczNTMyOTY3Ni40MDgsInN1YiI6IjY3NmYwNzhjZTI5NzZiYTc1YjkyYzg1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aQO3p0Wbf1tuYYAnJkyhPIw1xJVUR7QDxBLv2NPt32U`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMovies(data); // Save fetched data to state
        console.log(movies);
      } catch (err) {
        setError(err.message); // Handle any errors
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <div className="container mx-auto text-white">
        <Navbar />
      </div>
      <div className="text-white">
        {error && <p>Error: {error}</p>}
        {movies ? (
          <div className="flex justify-between items-center flex-wrap">
            {movies.results.map((item, index) => (
              // console.log(item.backdrop_path)

              <div key={index} className="w-[320px]">
                <div className="w-[300px] h-[350px] bg-contain">
                  <img
                    className="w-full h-full"
                    src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                    alt=""
                  />
                </div>
                <div>
                  <h1>{item.title}</h1>
                  <h1>original_language: "{item.original_language}"</h1>
                  <p className="">{item.overview}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading movies...</p>
        )}
      </div>
    </>
  );
};

export default MovieComponent;
