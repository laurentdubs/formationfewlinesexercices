import React from "react";
import CardHeader from "./header";
import CardBody from "./body";
import CardFooter from "./footer";
import zelda from "../../../data/zelda";

// const ProductCard = (props) => {
//   console.log(props.product.name);
//   console.log(props.product.platform);

//   return (
//     <div>
//       <CardHeader productName={props.product.name} platformLogos={props.product.platform}></CardHeader>
//       <CardBody>
//         productCover={props.cover.url}
//         screenshots={props.screenshots}
//         genres={props.genres}
//         summary={props.summary}
//         firstReleaseDate={props.first_release_date}
//       </CardBody>
//       <CardFooter>slug={props.slug}</CardFooter>
//     </div>
//   );
// };
const ProductCard = () => {
  return (
    <div>
      <CardHeader name={zelda.name} platformLogos={zelda.platforms} />
      <CardBody
        cover={zelda.cover.url}
        summary={zelda.summary}
        firstReleaseDate={zelda.first_release_date}
        screenshots={zelda.screenshots}
        genres={zelda.genres}
      />
      <CardFooter slug={zelda.slug} />
    </div>
  );
};

export default ProductCard;
