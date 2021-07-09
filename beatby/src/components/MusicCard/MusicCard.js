import React from "react";
import { CardContainer } from "./styled";

const MusicCard = ({ musicName, authorName }) => (
  <CardContainer>
    <h6>{musicName}</h6>
    <p>{authorName}</p>
  </CardContainer>
);

export default MusicCard;
