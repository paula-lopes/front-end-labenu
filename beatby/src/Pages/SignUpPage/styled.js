import styled from "styled-components";
import { primaryColor } from "constants/colors";
import { secondaryColor } from "constants/colors";

export const MainSignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${primaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const LogoButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;

  input {
    height: 45px;
    width: 400px;
    background-color: #ffffff;
    border: none;
    margin-top: 20px;
  }
`;

export const FormButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    margin-top: 20px;
    background-color: black;
    width: 400px;
    height: 45px;
    margin-top: 10px;
    color: ${primaryColor};
    background-color: ${secondaryColor};
    border: none;
    cursor:pointer;
  }
`;
export const ImageNoteContainer = styled.div`
  margin-left: 125px;
  margin-bottom: 20px;
`;

export const LoginButton = styled.button`
  color: ${primaryColor};
  background-color: ${secondaryColor};
  border: none;
  width: 200px;
  height: 45px;
  margin-right: 80px;
  cursor: pointer;
`;

export const ImageLogoContainer = styled.div`
  margin-left: 40px;
  margin-top: 20px;
`;
