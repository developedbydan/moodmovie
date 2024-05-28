import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Card from "./Card";

const Generate = () => {
  const [mood, setMood] = useState("");
  const [movies, setMovies] = useState([]);
  const scrollRef = useRef(null);

  const apiKey = import.meta.env.VITE_OMDB_API_KEY;

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
      try {
        const res = await axios.get(
          `http://www.omdbapi.com/?apikey=${apiKey}&type=movie&s=${genre}`
        );
        const movies = res.data.Search.slice(0, 4);
        setMovies(movies);
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
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [movies]);

  return (
    <div className="px-7 mt-10">
      <h2 className="text-white font-bold text-3xl pr-12">
        How are you feeling today?
      </h2>
      <Card handleMood={handleMood} />
      <div className="mt-16" ref={scrollRef}>
        {movies && movies.length > 0 && (
          <>
            <h2 className="text-white text-2xl font-bold pr-12 mb-10">
              Found these gems tailored to your feelings
            </h2>
            <div className="grid grid-cols-2 gap-x-5 gap-y-8 pb-14 md:grid-cols-4 md:gap-10">
              {movies.map((movie) => (
                <div key={movie.imdbID} className="flex flex-col items-center">
                  <img src={movie.Poster} alt={movie.Title} className="w-36" />
                  <h3 className="text-white text-lg mt-2 pl-2">
                    {movie.Title}
                  </h3>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Generate;
