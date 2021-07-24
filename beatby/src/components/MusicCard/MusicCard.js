import React from "react";
import { CardContainer } from "./styled";
import { Title } from "./styled";
import { Author } from "./styled";
import { Modal } from "../Modal/Modal";

const MusicCard = ({
  musicName,
  authorName,
  showModal,
  modalDisplay,
  genres,
  date,
  album,
  id,
}) => {
  return (
    <>
      <CardContainer onClick={() => showModal("flex", id)}>
        <Title>{musicName}</Title>
        <Author>{authorName}</Author>
      </CardContainer>
      <Modal
        showModal={showModal}
        modalDisplay={modalDisplay}
        genres={genres}
        date={date}
        album={album}
      />
    </>
  );
};

export default MusicCard;
