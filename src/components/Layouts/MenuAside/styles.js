import styled from "styled-components";
import { Active } from "../../../styles/globalStyles";
import {
  COLOR_4,
  COLOR_PRIMARY,
  COLOR_TERTIARY,
} from "../../../styles/variables";

export const Menu = styled.menu`
  width: 100%;
  max-width: 330px;
  height: 100vh;
  background-color: ${COLOR_PRIMARY};
  margin: 0;
  padding: 40px;
  position: fixed;
  @media only screen and (max-width: 900px) {
    width: 100%;
    max-width: 100%;
    height: 80px;
    padding: 10px;
    z-index: 10;
  }
`;

export const ContainerNavs = styled.div`
  @media only screen and (max-width: 900px) {
    position: absolute;
    transform: translateX(-150%);
  }
`;

export const Nav = styled.nav`
  text-align: start;
  color: ${COLOR_TERTIARY};
  margin: 25px 0;
`;
export const P = styled.p`
  font-size: 22px;
  font-weight: bold;
`;

export const Ul = styled.ul`
  padding: 0;
`;
export const Li = styled.li`
  font-size: 16px;
  margin: 5px 0;
  cursor: pointer;
  ${(props) => props.active && Active}
  &:hover {
    color: ${COLOR_4};
  }
`;
export const ContainerMenuResponsive = styled.div`
  position: relative;
`;

export const I = styled.i`
  position: absolute;
  right: 0;
  top: 20%;
  color: ${COLOR_TERTIARY};
  display: none !important;
  cursor: pointer;
  @media only screen and (max-width: 900px) {
    display: inline !important;
  }
`;
