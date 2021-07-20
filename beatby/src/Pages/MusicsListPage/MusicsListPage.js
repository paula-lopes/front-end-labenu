import { useState } from "react";
import MusicCard from "components/MusicCard/MusicCard";
import { GridContainer } from "./styled";
import { LogoutButton } from "Pages/CreateMusicPage/styled";
import { LogoButtonContainer } from "./styled";
import { ImageLogoContainer } from "./styled";
import { MainContainer } from "./styled";
import { Modal } from "components/Modal/Modal";
import { Title } from "./styled";
import Logo from "assets/logo.png";
import Image from "components/Image";
import useRequestData from "hooks/useRequestData";
import useProtectedPage  from "hooks/useProtectedPage";
import {logout} from "../../services/user"
import { useHistory } from "react-router-dom";
export const MusicsListPage = () => {
  useProtectedPage();
  const [modalDisplay, setModalDisplay] = useState("none");
  const history = useHistory();

  const musics = useRequestData(
    [],
    "http://ec2-44-195-40-169.compute-1.amazonaws.com/music"
  );

  const showModal = (display, id) => {
    if (display === "none") {
      setModalDisplay("none");
    } else {
      setModalDisplay("flex");
    }
  };

  const musicCards =
    musics.data &&
    musics.data.map((music) => {
      return (
        <MusicCard
          key={music.id}
          musicName={music.title}
          authorName={music.author}
          showModal={showModal}
        />
      );
    });

  return (
    <MainContainer>
      <LogoButtonContainer>
        <ImageLogoContainer>
          <Image alt="logo" height={"100"} src={Logo} width={"200"} />
        </ImageLogoContainer>
        <LogoutButton onClick={()=>{logout(history)}}>Logout</LogoutButton>
      </LogoButtonContainer>
      <Title>Histórico</Title>

      <GridContainer>{musicCards}</GridContainer>
      <Modal showModal={showModal} modalDisplay={modalDisplay} />
    </MainContainer>
  );
};

export default MusicsListPage;
