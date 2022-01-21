import { useContext } from "react";
import AudioContext from "../../../Context/AudioContext";
import { Figure, P, P2 } from "./styles";

const CardAlbum = ({ src, NameArtist, NameAlbum, id }) => {
  const { changeAlbum } = useContext(AudioContext);
  return (
    <Figure onClick={() => changeAlbum(id)}>
      <img src={src} width={160} height={160} />
      <figcaption>
        <P>{NameAlbum} </P>
        <P2>{NameArtist} </P2>
      </figcaption>
    </Figure>
  );
};

export default CardAlbum;
