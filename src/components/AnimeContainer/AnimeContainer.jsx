import React from "react";
import { Link } from "react-router-dom";
import classes from "./AnimeContainer.module.css";
const AnimeContainer = ({ animeData }) => {
  return (
    <>
      <div className={classes["container"]}>
        {/* <div className={classes["main-container"]}> */}
        <div className={classes["contianer-title"]}>
          <Link to={`/anime/${animeData?.id}`}>{animeData?.title}</Link>
        </div>
        <div className={classes["subinfo"]}>
          <p>Release: {animeData?.release_date}</p>
          {/* <p>Score: {animeData?.rt_score}</p> */}
          <p>Running time: {animeData?.running_time}mins</p>
        </div>
        <div className={classes["container_body"]}>
          <div className={classes["container_image"]}>
            <img src={animeData?.image} alt="poster" />
          </div>
          <div className={classes["container_info"]}>
            <p>{animeData?.description}</p>
            <p className={classes["detailed_info"]}>
              Director: {animeData?.director}
            </p>
            <p className={classes["detailed_info"]}>
              Rating: {animeData?.rt_score}
            </p>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* AnimeContainer */}
    </>
  );
};
export default AnimeContainer;
