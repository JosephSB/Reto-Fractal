import styled from "styled-components";
import {
  COLOR_7,
  COLOR_SECONDARY,
  COLOR_TERTIARY,
} from "../../../styles/variables";

export const ContainerReproductor = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${COLOR_SECONDARY};
  position: fixed;
  bottom: 0;
  z-index: 5;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media only screen and (max-width: 600px) {
    grid-template-columns: 4fr 1fr;
  }
`;

export const ContainerDataSong = styled.div`
  width: 100%;
  max-width: 250px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr 4fr;
    max-width: 100%;
  }
`;
export const ContainerInfoSong = styled.div`
  padding: 5px;
`;
export const P = styled.p`
  font-size: 14px;
  color: ${COLOR_TERTIARY};
  font-weight: 700;
`;
export const P2 = styled.p`
  font-size: 12px;
  color: ${COLOR_TERTIARY};
`;
export const ContainerPlayStop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 600px) {
    max-width: 100%;
    & i:not(div) {
      display: none;
    }
  }
`;
export const I = styled.i`
  color: ${COLOR_TERTIARY};
  cursor: pointer;
`;
export const ContainerPlay = styled.div`
  background-color: ${COLOR_7};
  width: 50px;
  height: 50px;
  border-radius: 30px;
  margin: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  & i:not(div) {
    display: inline;
  }
`;
export const ContainerVolumen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const Input = styled.input`
  background: #ffffff;
`;
