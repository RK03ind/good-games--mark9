import { useState } from "react";
import "./App.css";

import ListItem from "./components/ListItem";

const App = () => {
  const [dataState, setDataState] = useState("steampunk");

  const changeDataState = (e) => {
    if (e.target.nodeName === "DIV") return;
    setDataState(e.target.innerText.toLowerCase());
  };

  const isActive = (genre) => (dataState === genre ? "active" : "");

  const listData = [
    {
      title: "Dishonored",
      genre: "steampunk",
      rating: "9.2",
    },
    {
      title: "Dishonored 2",
      genre: "steampunk",
      rating: "9.3",
    },
    {
      title: "Bioshock Infinite",
      genre: "steampunk",
      rating: "9.4",
    },
    {
      title: "GTA San Andreas",
      genre: "openworld",
      rating: "9.6",
    },
    {
      title: "Red Dead Redemption 2",
      genre: "openworld",
      rating: "10",
    },
    {
      title: "GTA 5",
      genre: "openworld",
      rating: "10",
    },

    {
      title: "Far Cry 3",
      genre: "openworld",
      rating: "9",
    },
    {
      title: "Tomb Raider (2013)",
      genre: "action-adventure",
      rating: "9.1",
    },
    {
      title: "Batman: Arkham City",
      genre: "action-adventure",
      rating: "9.5",
    },
    {
      title: "A Plague Tale: Innocence",
      genre: "action-adventure",
      rating: "7",
    },
    {
      title: "Spider-Man(2018) Remastered",
      genre: "action-adventure",
      rating: "8.5",
    },
    {
      title: "Resident Evil 7: Biohazard",
      genre: "horror",
      rating: "7.7",
    },
    {
      title: "Resident Evil Village",
      genre: "horror",
      rating: "8",
    },
  ];

  return (
    <main>
      <header>
        <h1>🎮 goodgames</h1>
        <p>
          Checkout my favourite singleplayer games. Select a genre to get
          started
        </p>
      </header>
      <div className="button-wrapper" onClick={changeDataState}>
        <button className={isActive("steampunk")}>Steampunk</button>
        <button className={isActive("openworld")}>OpenWorld</button>
        <button className={isActive("horror")}>Horror</button>
        <button className={isActive("action-adventure")}>
          Action-Adventure
        </button>
      </div>
      <div className="list-wrapper">
        {listData.map((item, index) => {
          if (item.genre === dataState) {
            return <ListItem {...item} />;
          }
          return <></>;
        })}
      </div>
    </main>
  );
};

export default App;
