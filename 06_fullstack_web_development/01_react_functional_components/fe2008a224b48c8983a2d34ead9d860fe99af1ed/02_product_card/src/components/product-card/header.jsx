import React from "react";

const CardHeader = (props) => {
  return (
    <div className="bg-dark text-white p-3 card-header">
      <h1>{props.name}</h1>
      {props.platformLogos.map((platform, index) => {
        if (platform.name === undefined) {
          return <img key={index} src={platform} />;
        } else {
          return <img key={index} src={platform.platform_logo.url} />;
        }
      })}
    </div>
  );
};

export default CardHeader;
