import "./CardPage.css";

function CardPage({ data, entered, setEntered }) {
  return (
    <div className="wrapper-cardPage">
      <div className="midsection">
        <div className="pageLeft">
          <div className="art">
            <img src={data[entered].images.hero.large} alt="arnolfini" />
          </div>

          <div className="work-artist">
            <div className="work-artist-wrapper">
              <div className="cardPageTitle">{data[entered].name}</div>
              <div className="cardPageSubtitle">
                {data[entered].artist.name}
              </div>
            </div>
          </div>
          <div className="artist">
            <img
              src={data[entered].artist.image}
              alt={data[entered].artist.name}
            />
          </div>
        </div>
        <div className="pageRight">
          <div className="artDescription">{data[entered].description}</div>
          <div className="rightNumber">{data[entered].year}</div>
        </div>
      </div>
      <hr className="bottom" />
      <footer>
        <div className="work-artist-footer">
          <div className="footer-cardPageTitle">{data[entered].name}</div>
          <div className="footer-cardPageSubtitle">
            {data[entered].artist.name}
          </div>
        </div>
        <div className="navigation">
          <img src="./assets/shared/icon-back-button.svg" alt="left arrow" />
          <img src="./assets/shared/icon-next-button.svg" alt="right arrow" />
        </div>
      </footer>
    </div>
  );
}

export default CardPage;
