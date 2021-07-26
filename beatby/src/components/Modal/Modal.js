import useRequestData from "hooks/useRequestData";
import {
  HeaderModalContainer,
  ModalContainer,
  MainContainer,
  CloseModalButton,
  InformationModalContainer,
} from "./styled";
export const Modal = ({ showModal, modalDisplay, date, genres, album }) => {
  const year = date.substring(0, 4);
  const musics = useRequestData(
    [],
    "http://ec2-44-195-40-169.compute-1.amazonaws.com/music"
  );

  return (
    <MainContainer display={modalDisplay}>
      <ModalContainer>
        <HeaderModalContainer>
          <h3>Detalhes</h3>
          <CloseModalButton
            onClick={() => {
              showModal("none");
            }}
          >
            X
          </CloseModalButton>
        </HeaderModalContainer>
        <InformationModalContainer>
          <h4>
            Ano<p>{year}</p>
          </h4>
          <h4>
            Álbum<p>{album}</p>
          </h4>
        </InformationModalContainer>
      </ModalContainer>
    </MainContainer>
  );
};
export default Modal;
