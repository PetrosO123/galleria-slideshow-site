import "./App.css";
import data from "./data.json";
import { useState } from "react";

function Masonry() {
  const [hovered, setHovered] = useState(false);
  const handleHover = (i) => {
    setHovered(i);
  };
  return (
    <main className="masonry">
      {data.map((obj, i) => {
        return (
          <div
            className="card"
            key={i}
            hovered={hovered}
            onMouseOver={() => handleHover(i)}
          >
            <img src={obj.images.gallery} alt={obj.description}></img>
            {hovered === i ? (
              <div className="cardDetails">
                <div className="cardName">{obj.name}</div>
                <div className="cardArtist">{obj.artist.name}</div>
              </div>
            ) : null}
            {hovered === i ? <div className="cardGradient"></div> : null}
          </div>
        );
      })}
    </main>
  );
}

export default Masonry;
