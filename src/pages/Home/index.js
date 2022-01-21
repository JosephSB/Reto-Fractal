import { useContext } from "react";
import CardAlbum from "../../components/Cards/CardAlbum";
import CardFirstResult from "../../components/Cards/CardFirstResult";
import Loader from "../../components/Loaders/Loader1/Loader";
import Search from "../../components/Search";
import AudioContext from "../../Context/AudioContext";
import { ContainerCards, ContainerHome, Div, H2, I } from "./styles";

const Home = () => {
  const { firstResult, albums, loading } = useContext(AudioContext);
  if (loading)
    return (
      <ContainerHome>
        <Loader message="Buscando..." />{" "}
      </ContainerHome>
    );
  return (
    <ContainerHome>
      <Div>
        <Search></Search>
        <div>
          <I className="fas fa-user" />
          Joseph S.
        </div>
      </Div>
      <CardFirstResult
        id={firstResult.id}
        src={firstResult.cover_big}
        NameAlbum={firstResult.title}
        NameArtist={firstResult.artist?.name}
        Type={firstResult.record_type}
      />
      <H2>Resultados</H2>
      <ContainerCards>
        {albums.map((album) => (
          <CardAlbum
            key={album.id}
            id={album.id}
            src={album.cover_big}
            NameArtist={album.artist.name}
            NameAlbum={album.title}
          />
        ))}
      </ContainerCards>
    </ContainerHome>
  );
};
export default Home;
