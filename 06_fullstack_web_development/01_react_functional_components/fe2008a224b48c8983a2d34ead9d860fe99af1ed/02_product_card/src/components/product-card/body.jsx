import React from "react";

const CardBody = (props) => {
  const [showScreenshots, setShowScreenshots] = React.useState(false);
  function showOffScreen() {
    if (showScreenshots === false) {
      setShowScreenshots(
        props.screenshots.map((element, index) => {
          // eslint-disable-next-line react/jsx-key
          return <img index={index} src={element.url}></img>;
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
      {props.genres.map((element, index) => {
        if (element.name === undefined) {
          return (
            <p>
              key={index} {element}
            </p>
          );
        } else {
          return (
            <p>
              key={index}
              {element.name}{" "}
            </p>
          );
        }
      })}
      <button onClick={showOffScreen}>Show Screenshots</button>
      {showScreenshots}
    </div>
  );
};

export default CardBody;
