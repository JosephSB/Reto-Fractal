import { useContext } from "react";
import AudioContext from "../../../Context/AudioContext";
import {
  ContainerDataSong,
  ContainerInfoSong,
  ContainerPlay,
  ContainerPlayStop,
  ContainerReproductor,
  ContainerVolumen,
  I,
  Input,
  P,
  P2,
} from "./styles";

const Reproductor = () => {
  const {
    dataSong,
    playing,
    handleplay,
    prevSong,
    nextSong,
    volumen,
    handleVolumne,
  } = useContext(AudioContext);

  console.log(volumen);
  return (
    <ContainerReproductor>
      <ContainerDataSong>
        <img src={dataSong.Image} width={80} height={80} />
        <ContainerInfoSong>
          <P>{dataSong.SongName}</P>
          <P2>{dataSong.Artist}</P2>
        </ContainerInfoSong>
      </ContainerDataSong>
      <ContainerPlayStop>
        <I onClick={prevSong} className="fas fa-step-backward" />
        <ContainerPlay onClick={handleplay}>
          <I className={playing ? "fas fa-stop" : "fas fa-play"} />
        </ContainerPlay>
        <I onClick={nextSong} className="fas fa-step-forward" />
      </ContainerPlayStop>
      <ContainerVolumen>
        <I
          className={
            volumen === "0" ? "fas fa-volume-mute" : "fas fa-volume-up"
          }
        />
        <Input
          type="range"
          min="0"
          max="100"
          value={volumen}
          onChange={handleVolumne}
        />
      </ContainerVolumen>
    </ContainerReproductor>
  );
};

export default Reproductor;
