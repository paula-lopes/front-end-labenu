import React, { useState } from "react";
import { CardContainer } from "./styled";
import { Title } from "./styled";
import { Author } from "./styled";
import { Modal } from "../Modal/Modal";

const MusicCard = ({ musicName, authorName, genres, date, album, id }) => {
  const [modalDisplay, setModalDisplay] = useState("none");

  const showModal = (display) => {
    if (display === "none") {
      setModalDisplay("none");
    } else {
      setModalDisplay("flex");
    }
  };
  return (
    <>
      <CardContainer onClick={() => showModal("flex")}>
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
