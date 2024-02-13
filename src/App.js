import "./App.css";
import Masonry from "./Masonry";
import CardPage from "./CardPage";
import data from "./data.json";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function App() {
  let navigate = useNavigate();
  const [entered, setEntered] = useState(null);
  const [progress, setProgress] = useState(((entered + 1) / data.length) * 100);
  const handleClick = () => {
    navigate("/");
  };
  const handleSlideshow = () => {
    setEntered(0);
    setProgress((1 / data.length) * 100);
    navigate("/card");
  };
  return (
    <div className="App">
      <header>
        <img
          className="title"
          src={`${process.env.PUBLIC_URL}/${`assets/shared/logo.svg`}`}
          alt="galleria logo"
          onClick={handleClick}
        />
        <div className="slideshow" onClick={handleSlideshow}>
          START SLIDESHOW
        </div>
      </header>
      <hr />
      <Routes>
        <Route
          path="/"
          element={
            <Masonry
              entered={entered}
              setEntered={setEntered}
              data={data}
              progress={progress}
              setProgress={setProgress}
            />
          }
        ></Route>
        <Route
          path="/card"
          element={
            <CardPage
              entered={entered}
              setEntered={setEntered}
              data={data}
              progress={progress}
              setProgress={setProgress}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
