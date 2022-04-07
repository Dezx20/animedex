import React from "react";
import classes from "./AnimeDetails.module.css";
function AnimeDetails({ animeData, ...props }) {
  return (
    <>
      <header className={classes["title_container"]}>
        <h3>{animeData?.original_title_romanised}</h3>
        <h3>{animeData?.title}</h3>
      </header>
      <div className={classes["container"]}>
        <div className={classes["left_container"]}>
          <div className={classes["image_container"]}>
            <img src={animeData.image} alt="anime_image" />
          </div>
          <div className={classes["more_info"]}>
            <p>Director: {animeData?.director}</p>
            <p>Original Title: {animeData?.original_title}</p>
            <p>English Title: {animeData?.original_title_romanised}</p>
            <p>Producer: {animeData?.producer}</p>
            <p>Main title: {animeData?.title}</p>
          </div>
        </div>
        <div className={classes["right_container"]}>
          <div className={classes["nav_header"]}>
            <ul>
              <li>location</li>
              <li>species</li>
              <li>people</li>
              <li>vehicles</li>
            </ul>
          </div>
          <div className={classes["anime_synopsis"]}>
            Synopsis:
            <p>{animeData?.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AnimeDetails;
