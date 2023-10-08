import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import searchIcon from "../images/icons8-search-30.png";
import FuzAnime from "../images/FuzAnime.png";

export default function NavBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => { 
    const fetchSearchResults = async () => {
      if (searchQuery.trim() === "") {
        setSearchResults([]);
        return;
      }

      const searchUrl = `https://api.consumet.org/anime/gogoanime/${searchQuery}?page=1`;
      try {
        await axios.get(searchUrl);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSearchResults();
  }, [searchQuery]);

  return (
    <div>
      <div className="navbar">
        <Link to="/" className="navbar-link">
          <h3>Home</h3>
        </Link>
        <Link to="/popular" className="navbar-link">
          <h3>Popular</h3>
        </Link>
      </div>
        <Link to="/">
          <img
            src={FuzAnime}
            className="fuz-anime-logo"
            alt="fuz-anime-logo"
          ></img>
        </Link>
      <div>
        <form>
          <input
            type="text"
            placeholder="Search Anime..."
            className="search-bar"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <img src={searchIcon} className="search-icon" alt="search-icon"></img>
        </form>

        <div className="search-results-container">
          {searchResults.length > 0 &&
            searchResults.map((anime) => (
              <Link
                to={`/anime/${anime.id}`}
                className="search-results"
                key={anime.id}
              >
                <img
                  src={anime.image}
                  className="search-image"
                  alt="search-icon"
                />
                <h4 className="search-image-text">{anime.title}</h4>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
