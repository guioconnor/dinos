import React from "react";
import styled from "styled-components";

const Image = styled.img`
  display: block;
  width: 100px;
  height: 100px;
  filter: brightness(${props => props.silhouette ? 0 : 1})
`;

const DinoImage = ({ dino, src, alt, silhouette = false, ...props }) => (
  <Image {...props} className="main" src={src} alt={alt} silhouette={silhouette} />
);
export default DinoImage;
