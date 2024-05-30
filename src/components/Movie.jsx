import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Movie = () => {
  const [movieInfo, setMovieInfo] = useState();
  const { id } = useParams();
  const apiKey = import.meta.env.VITE_RAPID_API_KEY;

  const getMovie = async () => {
    const options = {
      method: "GET",
      method: "GET",
      url: `https://streaming-availability.p.rapidapi.com/shows/${id}`,
      params: {
        series_granularity: "show",
        output_language: "en",
      },
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
      },
    };

    try {
      const res = await axios.request(options);
      const movieData = res.data;
      console.log(movieData);
      setMovieInfo(movieData);
    } catch (err) {
      console.log("Error fetching movies: ", err);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {movieInfo ? (
        <div>
          <h1>{movieInfo.title}</h1>
          <p>{movieInfo.overview}</p>
          <img
            src={movieInfo.imageSet.verticalPoster.w240}
            alt={movieInfo.title}
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Movie;
