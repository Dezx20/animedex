import React from "react";
import { useParams } from "react-router";
import axios from "axios";

import AnimeDetails from "../AnimeDetails/AnimeDetails";
import classes from "./Anime.module.css";

const Anime = () => {
  const [animeData, setAnimeData] = React.useState([]);
  const params = useParams();
  //ghibliapi.herokuapp.com/films/$%7Banime_id%7D
  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://ghibliapi.herokuapp.com/films/${params.id}`
        );
        return response?.data;
      } catch (e) {
        console.log(e);
      }
    };
    getData().then((res) => {
      if (res) {
        console.log("animeData received->", res);
        setAnimeData(res);
      }
    });
  }, []);

  return (
    <div className={classes["container"]}>
      <AnimeDetails animeData={animeData} />
    </div>
  );
};

export default Anime;
