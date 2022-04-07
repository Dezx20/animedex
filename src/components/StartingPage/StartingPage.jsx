import React from "react";
import axios from "axios";
import AnimeContainer from "../AnimeContainer/AnimeContainer";
import classes from "./StartingPage.module.css";
const StartingPage = () => {
  const [animeList, setAnimeList] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://ghibliapi.herokuapp.com/films"
        );
        return response?.data;
      } catch (e) {
        console.log(e);
      }
    };
    getData().then((res) => {
      if (res) {
        console.log("Data recieved->", res);
        setAnimeList(res);
      }
    });
  }, []);

  return (
    <>
      <section className={classes["animelist-container"]}>
        {animeList.length > 0
          ? animeList.map((anime) => {
              return <AnimeContainer animeData={anime} />;
            })
          : ""}
      </section>
    </>
  );
};

export default StartingPage;
