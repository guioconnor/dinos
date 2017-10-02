import React from "react";
import styled from "styled-components";

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

const DinoImage = ({ dino, src, alt, ...props }) => (
  <Image {...props} className="main" src={src} alt={alt} />
);
export default DinoImage;
