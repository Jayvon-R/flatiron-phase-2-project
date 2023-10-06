import React from "react";
import AnimeCard from "./AnimeCard";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Popular(){
    const [animeData, setAnimeData] = useState([]);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        const fetchData = async () => {
          const totalPages = 10;
          const baseUrl = "https://api.consumet.org/anime/gogoanime/top-airing";
          const results = [];
    
          for (let page = 1; page <= totalPages; page++) {
            try {
              const response = await axios.get(baseUrl, { params: { page }});
                const data = response.data;
                results.push(...data.results);
          }
            catch (error) {
                console.error(error);
            }}
          setAnimeData(results);
        };
    
        fetchData();
      }, []);
    
    return (
        <div>
            <h1>Popular Anime</h1>
            <div className="popular-anime-card-container">
                {animeData.map((anime) => (
                    <AnimeCard key={anime.id} anime={anime} className="popular-anime-card"/>
                ))}
            </div>
        </div>
    )
}