import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MovieCard } from "../MovieCard/MovieCard.jsx";

import styles from "./MovieDetails.module.css";

export const MovieDetails = () => {
  const { id } = useParams(null);
  const apiKey = '1f35b14453c05f3379322e437ed14a72'
  const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;
  const [movie, setMovie] = useState();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error("Network Response Error");
        }
        const json = await response.json();
        setMovie(json);
        console.log("Updated movie state:", movie);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (<>


    <div
      className={styles.movieContainer}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
      }}
    >
        <p className={styles.homelink}>
          <Link to="/">←</Link>
        </p></div>
      <div>
        <MovieCard movie={movie} />
      </div>

  </>
  );
};