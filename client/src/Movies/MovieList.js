import React from 'react';
import { Link, useRouteMatch, useHistory } from "react-router-dom"

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore } = movie;
  const { url } = useRouteMatch();

  const history = useHistory()
  const routeToCard = () => {
    history.push("/movie")
  }

  return (
    <div className="movie-card">
      <Link
        to={`${url}/${movie.id}`}
        onClick={routeToCard}
      >
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
      </Link>
    </div>
  );
}

export default MovieList;
