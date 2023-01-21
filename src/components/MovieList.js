import React from 'react';
import '../styles/movie-list.css';
import MovieCard from './MovieCard';

export default function MovieList({movieList, isLoading}) {
  if (isLoading)
  {
    return "Loading Movies plz wait";
  }
  
  return  (
    <div className='movie-list'>
        {movieList.map((movie) => (<MovieCard movie={movie} key={movie.imdbID} />))}     
    </div>
  )
}
