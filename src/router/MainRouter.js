import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuAside from "../components/Layouts/MenuAside";
import Reproductor from "../components/Layouts/Reproductor";
import Home from "../pages/Home";

const MainRouter = () => {
  return (
    <Router>
      <MenuAside />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
      <Reproductor />
    </Router>
  );
};

export default MainRouter;
