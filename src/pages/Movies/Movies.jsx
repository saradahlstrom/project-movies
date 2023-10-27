import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Movies.module.css";

export const Movies = () => {

  const apiKey = '1f35b14453c05f3379322e437ed14a72'
  const [movies, setMovies] = useState([]);
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

  useEffect(() => {
    const fetchMoviesList = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error("Network Reponse Error");
        }
        const json = await response.json();
        setMovies(json);
        console.log(json);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchMoviesList();
  }, []);

  //This will show "Loading..." to the user while data is being fetched from the API.
  if (!movies || !movies.results) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div>
      <div className={styles.movielistContainer}>
        {movies &&
          movies.results &&
          movies.results.map((movie) => (
            <Link to={`/movie/${movie.id}`} key={movie.id}>
              <div className={styles.movielistBox}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                />
                <div className={styles.movieText}>
                  <h1> {movie.title}</h1>
                  <p>Released: {movie.release_date}</p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};