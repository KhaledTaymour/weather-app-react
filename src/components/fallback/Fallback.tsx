import React from "react";
import { ReactComponent as FallbackImage } from "assets/images/error-fallback.svg";

const Fallback: React.FC = () => {
  return <FallbackImage style={{ height: "200px", width: "200px" }} />;
};

export default Fallback;
