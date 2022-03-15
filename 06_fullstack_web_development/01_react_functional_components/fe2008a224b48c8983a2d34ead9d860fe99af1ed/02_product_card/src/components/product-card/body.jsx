import React from "react";

const CardBody = (props) => {
  const [showScreenshots, setShowScreenshots] = React.useState(false);
  function showOffScreen() {
    if (showScreenshots === false) {
      setShowScreenshots(
        props.screenshots.map((element) => {
          // eslint-disable-next-line react/jsx-key
          return <img src={element.url}></img>;
        }),
      );
    } else {
      setShowScreenshots(false);
    }
  }
  return (
    <div>
      <img src={props.cover}></img>
      <p>{props.summary}</p>
      <p>{props.firstReleaseDate}</p>
      {props.genres.map((element) => {
        if (element.name === undefined) {
          return <p>{element}</p>;
        } else {
          return <p>{element.name} </p>;
        }
      })}
      <button onClick={showOffScreen}>Show Screenshots</button>
      {showScreenshots}
    </div>
  );
};

export default CardBody;
