import "./App.css";
import Masonry from "./Masonry";

function App() {
  return (
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
      <Masonry />
    </div>
  );
}

export default App;
