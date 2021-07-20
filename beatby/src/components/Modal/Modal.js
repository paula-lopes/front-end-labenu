import {
  HeaderModalContainer,
  ModalContainer,
  MainContainer,
  CloseModalButton,
} from "./styled";
export const Modal = ({ showModal, modalDisplay, year,genre,album }) => {
  
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
        <h4>Ano{year}</h4>
        <h4>Gênero{genre}</h4>
        <h4>Álbum{album}</h4>
      </ModalContainer>
    </MainContainer>
  );
};
export default Modal;
