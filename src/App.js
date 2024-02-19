import { useState } from "react";
import { NavBar, MovieList, Background } from "./components";

import axios from "axios";
import "./App.css";

const API_BASE_URL = "https://www.omdbapi.com";
//api key = e3da3413
function App() {
  const [inputValue, setInputValue] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const search = async (e) => {
    if (e.code === "Enter") {
      setIsLoading(true);
      const response = await axios.get(
        API_BASE_URL + "/?s=" + inputValue + "&apikey=aa660442"
      );
      setMovies(response.data.Search);
      setIsLoading(false);
      console.log(response.data.Search);
    }
  };

  // return (
  //   <div className="main">
  {
    /* <NavBar
        search={search}
        setInputValue={setInputValue}
        inputValue={inputValue}
      /> */
  }
  {
    /* {loading ? "Loading" : "Not Loading"}; */
  }

  return (
    <div className="main">
      {movies.length > 0 ? (
        <MovieList isLoading={isLoading} movieList={movies} />
      ) : null}
      {movies.length > 0 ? (
        <MovieList isLoading={isLoading} movieList={movies} />
      ) : null}
      <Background />
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyPress={search}
        type="text"
        placeholder="Search Movies"
        className="search-bar"
      />
    </div>
  );
}

export default App;
