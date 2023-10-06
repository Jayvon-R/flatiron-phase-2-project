import React from "react"

export default function AnimeCard({ anime, className }) {
    return (
        <div className={`anime-card ${className}`}>
        <a href={anime.url} className="anime-card-anchor">
            <img src={anime.image} className="anime-image" alt="anime-poster"/>
            <h4 className="anime-image-text">{anime.title}</h4>
            </a>
        </div>
    )
}