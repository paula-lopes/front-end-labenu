import React from "react";
import { CardContainer } from "./styled";
import { Title } from "./styled";
import { Author } from "./styled";

const MusicCard = ({ musicName, authorName, showModal, key }) => {
  return (
    <CardContainer onClick={() => showModal("flex")}>
      {console.log(musicName)}
      <Title>{musicName}</Title>
      <Author>{authorName}</Author>
    </CardContainer>
  );
};

export default MusicCard;
