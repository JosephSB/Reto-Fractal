import { DataAudioProvider } from "./Context/AudioContext";
import MainRouter from "./router/MainRouter";
function App() {
  return (
    <DataAudioProvider>
      <div className="App">
        <MainRouter />
      </div>
    </DataAudioProvider>
  );
}

export default App;
