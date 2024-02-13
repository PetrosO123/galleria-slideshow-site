import "./App.css";
import Masonry from "./Masonry";
import CardPage from "./CardPage";
import data from "./data.json";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [entered, setEntered] = useState(null);
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <img
            className="title"
            src={"./assets/shared/logo.svg"}
            alt="galleria logo"
          />
          <div className="slideshow">START SLIDESHOW</div>
        </header>
        <hr />
        <Routes>
          <Route
            path="/"
            element={
              <Masonry entered={entered} setEntered={setEntered} data={data} />
            }
          ></Route>
          <Route
            path="/card"
            element={
              <CardPage entered={entered} setEntered={setEntered} data={data} />
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
