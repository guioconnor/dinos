import React from "react";
import styled from "styled-components";

const Image = styled.img`
  display: block;
  width: 100px;
  height: 100px;
  filter: brightness(${props => props.silhouette ? 0 : 1})
`;

const DinoImage = ({ name, prefix, src, alt, silhouette = false, ...props }) => (
  <Image {...props} className="main" src={`https://firebasestorage.googleapis.com/v0/b/dinos-ef87d.appspot.com/o/${prefix}%2F${name}.svg?alt=media`} alt={alt} silhouette={silhouette} />
);

export default DinoImage;

