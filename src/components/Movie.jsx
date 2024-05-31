import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Movie = () => {
  const [movieInfo, setMovieInfo] = useState();
  const { id } = useParams();
  const apiKey = import.meta.env.VITE_RAPID_API_KEY;
  const initialized = useRef(false);

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
      setMovieInfo(movieData);
    } catch (err) {
      console.log("Error fetching movies: ", err);
    }
  };

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      getMovie();
      console.log("pokrenuo se");
    }
  }, []);

  return (
    <div className="px-7 mt-4 text-white">
      {movieInfo ? (
        <div>
          <img
            src={movieInfo.imageSet.horizontalPoster.w480}
            alt={movieInfo.title}
            className="rounded-lg h-auto"
          />
          <div className="pl-1">
            <div className="mt-3 flex gap-4 items-center">
              <h2 className="text-2xl font-bold ">{movieInfo.title}</h2>
              <h4>({movieInfo.releaseYear})</h4>
            </div>
            <div className="flex gap-3 items-center">
              {movieInfo.genres.map((genre) => (
                <p
                  key={genre.id}
                  className="bg-gray-900 px-3 py-1 rounded-lg text-sm mt-4"
                >
                  {genre.name}
                </p>
              ))}
            </div>
            <div>
              <h3 className="text-xl font-bold mt-9 mb-4">About</h3>
              <p>{movieInfo.overview}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mt-9 mb-4 ">Actors</h3>
              <div className="flex gap-4 overflow-x-scroll no-scrollbar scroll-smooth ">
                {movieInfo.cast.map((actor) => (
                  <p className="bg-gray-900 px-3 py-2  rounded-lg text-sm mt-4  text-center">
                    {actor}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Movie;
