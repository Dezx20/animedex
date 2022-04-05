import React from "react";
import classes from "./AnimeContainer.module.css";
const AnimeContainer = ({ animeData }) => {
  return (
    <>
      <div className={classes["container"]}>
        <div className={classes["main-container"]}>
          <div className={classes["contianer-title"]}>{animeData?.title}</div>
        </div>
      </div>
      {/* AnimeContainer */}
    </>
  );
};
export default AnimeContainer;
