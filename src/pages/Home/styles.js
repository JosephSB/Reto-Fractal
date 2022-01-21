import styled from "styled-components";
import { Container } from "../../styles/globalStyles";
import { COLOR_4 } from "../../styles/variables";

export const ContainerHome = styled.div`
  ${Container}
`;
export const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const I = styled.i`
  color: ${COLOR_4};
  padding: 10px;
`;

export const H2 = styled.h2`
  color: ${COLOR_4};
`;

export const ContainerCards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
