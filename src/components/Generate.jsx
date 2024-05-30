import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "./Card";

const Generate = () => {
  const [mood, setMood] = useState("");
  const [movies, setMovies] = useState([]);
  const scrollRef = useRef(null);

  const apiKey = import.meta.env.VITE_RAPID_API_KEY;

  const getMovies = async (mood) => {
    let genre = "";
    switch (mood) {
      case "happy":
        genre = "action";
        break;
      case "sad":
        genre = "comedy";
        break;
      case "angry":
        genre = "comedy";
        break;
      case "amazing":
        genre = "adventure";
        break;
    }

    if (genre !== "") {
      const options = {
        method: "GET",
        url: "https://streaming-availability.p.rapidapi.com/shows/search/filters",
        params: {
          country: "us",
          genres: genre,
          series_granularity: "show",
          order_by: "rating",
          genres_relation: "and",
          output_language: "en",
          show_type: "movie",
        },
        headers: {
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
        },
      };

      try {
        const res = await axios.request(options);
        const allMovies = res.data.shows;
        const radnomMovies = allMovies
          .sort(() => Math.random() - 0.5)
          .slice(0, 4);
        setMovies(radnomMovies);
      } catch (err) {
        console.log("Error fetching movies: ", err);
      }
    }
  };

  const handleMood = (selectedMood) => {
    setMood(selectedMood);
    getMovies(selectedMood);
  };

  useEffect(() => {
    if (scrollRef.current && movies.length == 4) {
      scrollRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [movies]);

  return (
    <div className="px-7 mt-10">
      <h2 className="text-white font-bold text-3xl pr-12">
        How are you feeling today?
      </h2>
      <Card handleMood={handleMood} />
      <div className="mt-24" ref={scrollRef}>
        {movies && movies.length > 0 && (
          <>
            <h2 className="text-white text-2xl font-bold pr-12 mb-10">
              Found these gems tailored to your feelings
            </h2>
            <div className="grid grid-cols-2 gap-x-5 gap-y-8 pb-24 md:grid-cols-4 md:gap-10">
              {movies.map((movie) => (
                <Link
                  to={`/movie/${movie.id}`}
                  key={movie.id}
                  className="flex flex-col items-center"
                >
                  <img
                    src={movie.imageSet.verticalPoster.w240}
                    alt={movie.title}
                    className="w-36 rounded-xl"
                  />
                  <h3 className="text-white text-lg mt-2 pl-2">
                    {movie.title}
                  </h3>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Generate;
