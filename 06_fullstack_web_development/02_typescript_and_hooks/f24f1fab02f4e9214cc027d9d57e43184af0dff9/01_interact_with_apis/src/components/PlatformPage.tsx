import React from "react";

const PlatformPage = (): JSX.Element => {
  type Platform = {
    name: string;
    id: string;
  };

  type Game = {
    name: string;
    id: string;
  };
  const [platform, setPlatform] = React.useState([]);
  const [game, setGames] = React.useState([]);

  React.useEffect(() => {
    fetch("http://videogame-api.fly.dev/platforms")
      .then((response) => response.json())
      .then((element) => {
        const platformSelected = element.platforms.map((platform: Platform) => {
          return { id: platform.id, name: platform.name };
        });
        setPlatform(platformSelected);
      });
  }, []);

  React.useEffect(() => {
    fetch("http://videogame-api.fly.dev/games")
      .then((response) => response.json())
      .then((element) => {
        const gameSelected = element.games.map((game: Game) => {
          return { id: game.id, name: game.name };
        });
        setGames(gameSelected);
      });
  }, []);

  return (
    <div>
      <select>
        {platform.map((platform: Platform) => {
          return (
            <option value={platform.id} key={platform.id}>
              {platform.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default PlatformPage;
