import React, { useState } from "react";
import axios from "axios";
import searchIcon from "../images/icons8-search-30.png"
import FuzAnime from "../images/FuzAnime.png"





export default function NavBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    const searchUrl = `https://api.consumet.org/anime/gogoanime/${searchQuery}?page=1`;

    try {
      const response = await axios.get(searchUrl);
      if (response.status === 200) {
        const data = response.data;
        setSearchResults(data.results);
      } else {
        console.error("Search API failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

    /*This function is so users can search by pressing enter*/
    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch();
    }

  return (
    <div>
      <h1>Top Airing</h1>
      <img src={FuzAnime} className="fuz-anime-logo"></img>
      <div>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Search anime..."
            className="search-bar"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
            <img src={searchIcon} className="search-icon"></img>
        </form>

        <div className="search-results-container">
          {searchResults.length > 0 &&
            searchResults.map((anime) => (
              <a href={anime.url} className="search-results" key={anime.id}>
                <img src={anime.image} className="search-image" />
                <h4 className="search-image-text">{anime.title}</h4>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}
