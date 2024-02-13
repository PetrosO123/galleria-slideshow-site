import "./App.css";
import data from "./data.json";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Masonry({ entered, setEntered, data }) {
  let navigate = useNavigate();
  const handleEnter = (i) => {
    setEntered(i);
  };
  const handleLeave = () => {
    setEntered(null);
  };
  const handleClick = () => {
    navigate("/card");
  };
  return (
    <main className="masonry">
      {data.map((obj, i) => {
        return (
          <div
            className="card"
            key={i}
            entered={entered}
            onMouseEnter={() => handleEnter(i)}
            onMouseLeave={handleLeave}
            onClick={handleClick}
          >
            <img src={obj.images.gallery} alt={obj.description}></img>
            {entered === i ? (
              <div className="cardDetails">
                <div className="cardName">{obj.name}</div>
                <div className="cardArtist">{obj.artist.name}</div>
              </div>
            ) : null}
            {entered === i ? <div className="cardGradient"></div> : null}
          </div>
        );
      })}
    </main>
  );
}

export default Masonry;
