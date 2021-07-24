import styled from "styled-components";
import { primaryColor } from "constants/colors";
import { secondaryColor } from "constants/colors";

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  top: 0px;
  left: 0px;
  display: ${(props) => props.display};
  justify-content: center;
  align-items: center;
  position: fixed;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${secondaryColor};
  color: ${primaryColor};
  width: 400px;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: 10px solid ${primaryColor};
  position: relative;
`;

export const CloseModalButton = styled.button`
  position: absolute;
  top: -15px;
  right: -15px;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  border: 4px solid black;
  background: ${primaryColor};
  cursor: pointer;
`;

export const HeaderModalContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const InformationModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height:0;
  align-items:center;
  justify-content:center;
  width:800px;
`;
