import "./App.css";
import data from "./data.json";

function Masonry() {
  console.log("data: ", data);
  return (
    <main className="masonry">
      {data.map((obj, i) => {
        return (
          <div className="card" key={i}>
            <img src={obj.images.thumbnail} alt={obj.description}></img>
          </div>
        );
      })}
    </main>
  );
}

export default Masonry;
