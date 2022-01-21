import { useState } from "react";
import Logo from "../../Logo";
import {
  ContainerMenuResponsive,
  ContainerNavs,
  I,
  Li,
  Menu,
  Nav,
  P,
  Ul,
} from "./styles";

const MenuAside = () => {
  const [barrClose, setBarrClose] = useState(true);

  const handleClick = () => setBarrClose(!barrClose);

  return (
    <Menu>
      <ContainerMenuResponsive>
        <Logo></Logo>
        <I
          onClick={handleClick}
          className={`fas ${barrClose ? "fa-bars" : "fa-times"} fa-2x`}
        />
      </ContainerMenuResponsive>
      <ContainerNavs>
        <Nav>
          <P>Mi Libreria</P>
          <Ul>
            <Li active>Recientes</Li>
            <Li>Artistas</Li>
            <Li>Albums</Li>
            <Li>Canciones</Li>
            <Li>Estaciones</Li>
          </Ul>
        </Nav>
        <Nav>
          <P>Playlist</P>
          <Ul>
            <Li>Metal</Li>
            <Li>Para Bailar</Li>
            <Li>Rock 90s</Li>
            <Li>Baladas</Li>
          </Ul>
        </Nav>
      </ContainerNavs>
    </Menu>
  );
};

export default MenuAside;
