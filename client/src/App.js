import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Switch, Route } from "react-router-dom"

import MovieList from "./Movies/MovieList"
import Movie from "./Movies/Movie"
import SavedList from './Movies/SavedList';

const App = () => {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  console.log(movieList)
  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />
      <Switch>
        {/* <Route path="/movies/:id">
          <Movie />
        </Route> */}
        <Route path="/">
          <MovieList movies={movieList}/>
        </Route>
      </Switch>
      <div>Replace this Div with your Routes</div>
    </div>
  );
};

export default App;
