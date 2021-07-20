import styled from "styled-components";
import { primaryColor } from "constants/colors";
import { secondaryColor } from "constants/colors";
export const CreateMusicContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${primaryColor};
`;

export const LogoLogoutButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  margin-top: 0;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  input {
    height: 45px;
    width: 400px;
    margin-top: 20px;
  }
`;

export const CreateMusicButton = styled.button`
  margin-top: 20px;
  background-color: black;
  width: 410px;
  height: 45px;
  margin-top: 10px;
  color: ${primaryColor};
  background-color: ${secondaryColor};
  border: none;
`;
export const ImageNoteContainer = styled.div``;
export const LogoutButton = styled.button`
  color: ${primaryColor};
  background-color: ${secondaryColor};
  border: none;
  width: 200px;
  height: 45px;
  margin-right: 80px;
  cursor: pointer;
`;
export const GuitarImageContainer = styled.div``;

export const ImageGirlContainer = styled.div`
  position: absolute;
  margin-right: 60%;
  margin-top: 10%;
`;
