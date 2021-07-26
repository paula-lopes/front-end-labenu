import styled from "styled-components";
import BackgroundLogin from "assets/BackgroundLogin.jpg";
import { primaryColor } from "constants/colors";

export const MainContainer = styled.div`
  background-image: url(${BackgroundLogin});
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  align-items: center;
  justify-content: center;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  width: 100vw;
  height: 100vh;

  input {
    height: 60px;
    width: 400px;
    background-color: #ffffff;
    border: none;
    margin-top: 20px;
  }


  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 100vw;
  height: 200px;
  align-items: center;
  justify-content: flex-start;

  button {
    background-color: black;
    width: 400px;
    height: 60px;
    margin-top: 10px;
    color: ${primaryColor};
    cursor: pointer;
  }
`;

export const LogoContainer = styled.div`
  margin-right: 100px;
`;
