import React from "react";

// const CardHeader = (props) => {
//   console.log("Cardheader props:", props);
//   return (
//     <div>
//       Title: {props.product.name}
//       {props.platformsLogos.map((platform, index) => {
//         return (
//           <div key={index}>
//             <p Key={platform.name}>name: platform.name</p>
//             <p Key={platform.slug}>slug: platform.slug</p>
//             <p Key={platform.platform_log.url}>url: platform.url</p>
//             <img src={platform.platform_log.url} alt="logo" />
//           </div>
//         );
//       })}
//     </div>
//   );
// };

const CardHeader = (props) => {
  return (
    <div className="bg-dark text-white p-3 card-header">
      <h1>{props.name}</h1>
      {props.platformLogos.map((platform) => {
        if (platform.name === undefined) {
          return <img src={platform} />;
        } else {
          return <img src={platform.platform_logo.url} />;
        }
      })}
    </div>
  );
};

export default CardHeader;
