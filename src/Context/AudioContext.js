import { createContext, useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import useAudio from "../hooks/useAudio";
import useEventListener from "../hooks/useEventListener";

const AudioContext = createContext();

const dataSongActual = {
  Image: "",
  SongName: "",
  Artist: "",
};

const OptionsHeader = {
	        'mode': 'cors',
	        'headers': {
            	'Access-Control-Allow-Origin': '*',
        	}
    	}

const DataAudioProvider = ({ children }) => {
  const [songs, setSongs] = useState([]);
  const [pointer, setPointer] = useState(0);
  const [volumen, setVolumen] = useState(100);
  const [albums, setAlbums] = useState([]);
  const [firstResult, setFirstResult] = useState({});
  const [playing, setPlaying, audio] = useAudio();
  const [loading, setLoading] = useState(false);
  const [dataSong, setDataSong] = useState(dataSongActual);

  const searchSongsByAlbum = (AlbumID) => {
    helpHttp()
      .get(process.env.REACT_APP_API_URL + "album/" + AlbumID,OptionsHeader)
      .then((data) => {
        setSongs(data.tracks.data);
        dataSong.Image = data.cover_medium;
        setDataSong(dataSong);
        playSong(data.tracks.data[0]);
      });
  };

  const searchAlbums = async (name) => {
    setLoading(true);
    helpHttp()
      .get(process.env.REACT_APP_API_URL + "search/album?q=" + name,OptionsHeader)
      .then((data) => {
        setAlbums(data.data);
        setFirstResult(data?.data[0]);
        setLoading(false);
        //searchSongsByAlbum(data?.data[0].id);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    searchAlbums("guerreros del bajo");
  }, []);

  const changeAlbum = async (AlbumID) => {
    setPointer(0);
    searchSongsByAlbum(AlbumID);
  };

  const playSong = ({ title, preview, artist }) => {
    audio.pause();
    setDataSong({
      ...dataSong,
      SongName: title,
      Artist: artist.name,
    });
    audio.src = preview;
    setPlaying(true);
    audio.play();
  };

  const handlePointer = (point) => {
    setPointer(point);
    //console.log("change", songs[point]);
    let { title, preview, artist } = songs[point];
    playSong({ title, preview, artist });
  };

  const prevSong = () => {
    if (songs.length > 0) {
      let x = pointer - 1;
      if (x < songs.length && x >= 0) handlePointer(x);
      else handlePointer(0);
    }
  };

  const nextSong = () => {
    if (songs.length > 0) {
      let x = pointer + 1;
      if (x < songs.length) handlePointer(x);
      else handlePointer(0);
    }
  };

  const handleplay = async (e) => {
    playing ? audio.pause() : audio.play();
    setPlaying(!playing);
  };

  const handleVolumne = (e) => {
    setVolumen(e.target.value);
    audio.volume = parseInt(e.target.value) / 100;
  };

  useEventListener("ended", nextSong, audio);

  const data = {
    firstResult,
    albums,
    searchAlbums,
    loading,
    changeAlbum,
    handleplay,
    handleVolumne,
    dataSong,
    playing,
    prevSong,
    nextSong,
    volumen,
  };

  return <AudioContext.Provider value={data}>{children}</AudioContext.Provider>;
};

export { DataAudioProvider };
export default AudioContext;
