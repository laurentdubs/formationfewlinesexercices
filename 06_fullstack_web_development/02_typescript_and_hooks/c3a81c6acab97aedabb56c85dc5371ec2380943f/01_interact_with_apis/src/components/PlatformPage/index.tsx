import React from "react";


const PlatformPage = (): JSX.Element => {
  return <>Platforms</>;


React.useEffect(() => {
  fetch("http://videogame-api.fly.dev/platforms").then((response) => response.json());
  
});

export default PlatformPage;
