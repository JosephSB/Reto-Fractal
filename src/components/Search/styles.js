import styled from "styled-components";
import { COLOR_5 } from "../../styles/variables";

export const ContainerSearch = styled.div`
  width: 100%;
  max-width: 524px;
  height: 36px;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  border: 1px solid ${COLOR_5};
  padding: 0 20px;
  outline: none;
`;
export const I = styled.i`
  position: absolute;
  right: 10px;
  top: 25%;
  cursor: pointer;
  color: ${COLOR_5};
`;
