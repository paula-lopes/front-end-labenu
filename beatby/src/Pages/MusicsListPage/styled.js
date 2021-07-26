import styled from "styled-components";
import { primaryColor } from "constants/colors";
import { secondaryColor } from "constants/colors";


export const MainContainer = styled.div`
  display: flex;
  background-color: ${primaryColor};
  width: 100vw;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 20px;
  padding-bottom: 30px;
`;

export const LogoutButton = styled.button`
  color: ${primaryColor};
  background-color: ${secondaryColor};
  border: none;
  width: 200px;
  height: 45px;
  margin-right: 80px;
`;
export const LogoButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
`;
export const ImageLogoContainer = styled.div``;
export const Title = styled.h1`
  font-size: 55px;
`;

export const AddMusicButton = styled.button`
  border-radius: 50px;
  background-color: ${secondaryColor};
  border:none;
  width:50px;
  height:50px;
  color:${primaryColor};
  font-size:40px;
  position:relative;
  margin-left:90%;
  cursor:pointer;
`;

