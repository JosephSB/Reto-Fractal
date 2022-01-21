import { useContext, useState } from "react";
import AudioContext from "../../Context/AudioContext";
import { ContainerSearch, I, Input } from "./styles";

const Search = () => {
  const [word, setWord] = useState("");
  const { searchAlbums } = useContext(AudioContext);
  const handleChange = (e) => {
    setWord(e.target.value);
  };
  return (
    <ContainerSearch>
      <Input
        onChange={handleChange}
        type="text"
        placeholder="Buscar: "
        value={word}
      />
      <I onClick={() => searchAlbums(word)} className="fas fa-search" />
    </ContainerSearch>
  );
};

export default Search;
