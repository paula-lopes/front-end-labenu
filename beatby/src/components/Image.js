import React from "react";

const Image = ({ alt, height, src, width }) => (
  <img src={src} alt={alt} width={width} height={height} />
);

export default Image;
