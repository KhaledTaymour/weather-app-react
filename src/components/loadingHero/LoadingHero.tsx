import { ReactComponent as LoadingImage } from "assets/images/loading.svg";
import React from "react";

const LoadingHero: React.FC = () => {
  return <LoadingImage style={{ height: "100px", width: "100px" }} />;
};

export default LoadingHero;
