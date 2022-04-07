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
            <p>
              <span>Director: </span> {animeData?.director}
            </p>
            <p>
              <span>Original Title: </span>
              {animeData?.original_title}
            </p>
            <p>
              <span>English Title: </span>
              {animeData?.original_title_romanised}
            </p>
            <p>
              <span>Producer: </span>
              {animeData?.producer}
            </p>
            <p>
              <span>Main Title: </span>
              {animeData?.title}
            </p>
          </div>
        </div>
        <div className={classes["right_container"]}>
          <div className={classes["extra_info"]}>
            <div className={classes["score"]}>
              <p>SCORE</p>
              <span>{animeData?.rt_score}</span>
            </div>
            <div className={classes["separater_line"]}></div>
            <div className={classes["score"]}>
              Release Date
              <span>{animeData?.release_date}</span>
            </div>
            <div className={classes["separater_line"]}></div>
            <div className={classes["score"]}>
              Running Time
              <span>{animeData?.running_time} mins</span>
            </div>
          </div>
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
            <div className={classes["gray_line_separator"]}></div>
            <p>{animeData?.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AnimeDetails;
