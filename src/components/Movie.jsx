import { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Movie = () => {
  const [movieInfo, setMovieInfo] = useState();
  const { id } = useParams();
  const apiKey = import.meta.env.VITE_RAPID_API_KEY;
  const initialized = useRef(false);

  const getMovie = async () => {
    const options = {
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
    }
  }, []);

  // Streaming options filter
  const getUniqueStreamingOptions = (streamingOptions) => {
    const uniqueOptions = Array.from(
      new Set(streamingOptions.map((option) => option.service.id))
    ).map((id) => {
      return streamingOptions.find((option) => option.service.id === id);
    });
    return uniqueOptions;
  };

  return (
    <div className="px-7 pb-14 mt-4 text-white">
      {movieInfo ? (
        <div>
          <div className="w-full min-h-48 max-h-[450px] overflow-hidden">
            <img
              src={movieInfo.imageSet.horizontalPoster.w1440}
              alt={movieInfo.title}
              className="rounded-lg object-contain w-full h-full"
            />
          </div>
          <div className="pl-1 lg:mt-8">
            <div className="mt-3 flex gap-4 items-center">
              <h2 className="text-2xl font-bold xl:text-3xl ">
                {movieInfo.title}
              </h2>
              <h4 className="xl:text-xl">({movieInfo.releaseYear})</h4>
            </div>
            <div className="flex gap-3 items-center">
              {movieInfo.genres.map((genre) => (
                <p
                  key={genre.id}
                  className="bg-gray-900 px-3 py-1 lg:px-5 lg:py-2 rounded-lg text-sm mt-4 lg:mt-7 lg:text-base"
                >
                  {genre.name}
                </p>
              ))}
            </div>
            <div>
              <h3 className="text-xl font-bold mt-9 mb-4 lg:mt-14 lg:text-2xl">
                About
              </h3>
              <p>{movieInfo.overview}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mt-9 mb-5 lg:mt-14 lg:text-2xl ">
                Actors
              </h3>
              <div className="flex gap-4 overflow-x-scroll no-scrollbar scroll-smooth ">
                {movieInfo.cast.map((actor, index) => (
                  <div className="bg-pink-950 px-3 py-2 lg:px-5 lg:py-2 rounded-lg text-sm lg:mt-7 lg:text-base flex flex-col justify-center text-center">
                    <p key={index}>{actor}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mt-9 mb-5  lg:mt-14 lg:text-2xl ">
                Stream on
              </h3>
              <div className="flex gap-5 overflow-x-scroll no-scrollbar scroll-smooth">
                {getUniqueStreamingOptions(movieInfo.streamingOptions.us).map(
                  (option) => (
                    <Link key={option.service.id} to={option.link}>
                      <img
                        src={option.service.imageSet.darkThemeImage}
                        alt={option.service.name}
                        className="h-12"
                      />
                    </Link>
                  )
                )}
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
