import React from "react";
import styled from "styled-components";

const Image = styled.img`
  background: #fff;
  padding: 30px;
  border-radius: 10%;
`;

const DinoImage = ({ dino, src, alt, ...props }) => (
  <Image {...props} className="main" src={src} alt={alt} />
);
export default DinoImage;
