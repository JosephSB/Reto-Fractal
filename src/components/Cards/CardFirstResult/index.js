import { useContext } from "react";
import AudioContext from "../../../Context/AudioContext";
import {
  Button,
  Button2,
  ContainerButtons,
  ContainerCard,
  ContainerInfoCard,
  Figure,
  H1,
  P,
} from "./styles";

const CardFirstResult = ({ src, NameAlbum, NameArtist, id }) => {
  const { changeAlbum } = useContext(AudioContext);
  return (
    <ContainerCard>
      <Figure>
        <img src={src} />
      </Figure>
      <ContainerInfoCard>
        <H1>{NameAlbum}</H1>
        <P>{NameArtist}</P>
        <ContainerButtons>
          <Button onClick={() => changeAlbum(id)}>Reproducir</Button>
          <Button2>Seguir</Button2>
        </ContainerButtons>
      </ContainerInfoCard>
    </ContainerCard>
  );
};

export default CardFirstResult;
