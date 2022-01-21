import styled from "styled-components";
import { COLOR_4, COLOR_6, COLOR_TERTIARY } from "../../../styles/variables";

export const ContainerCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  background-color: ${COLOR_6};
`;

export const Figure = styled.figure`
  width: 30%;
  margin: 0;
  & img {
    width: 100%;
  }
`;

export const ContainerInfoCard = styled.div`
  width: 70%;
  padding: 20px;
`;

export const H1 = styled.h1`
  color: ${COLOR_TERTIARY};
`;

export const P = styled.p`
  color: ${COLOR_TERTIARY};
`;

export const ContainerButtons = styled.div`
  margin: 20px 0;
`;
export const Button = styled.button`
  width: 120px;
  height: 31px;
  background-color: ${COLOR_4};
  color: ${COLOR_TERTIARY};
  border-radius: 20px;
  cursor: pointer;
  margin: 5px;
  margin-left: 0;
`;

export const Button2 = styled.button`
  width: 120px;
  height: 31px;
  background-color: transparent;
  color: ${COLOR_TERTIARY};
  border: 1px solid ${COLOR_4};
  border-radius: 20px;
  cursor: pointer;
  margin: 5px;
`;
