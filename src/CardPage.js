import "./CardPage.css";

function CardPage({ data, entered, setEntered }) {
  const handleNext = () => {
    if (entered === data.length - 1) {
      setEntered(0);
      return;
    }
    setEntered(entered + 1);
  };
  const handlePrev = () => {
    if (entered === 0) {
      setEntered(data.length - 1);
      return;
    }
    setEntered(entered - 1);
  };
  return (
    <div className="wrapper-cardPage">
      <div className="midsection">
        <div className="pageLeft">
          <div className="art">
            <img
              src={`${process.env.PUBLIC_URL}/${data[entered].images.hero.large}`}
              alt="arnolfini"
            />
          </div>

          <div className="work-artist">
            <div className="cardPageTitle">{data[entered].name}</div>
            <div className="cardPageSubtitle">{data[entered].artist.name}</div>
          </div>
          <div className="artist">
            <img
              src={`${process.env.PUBLIC_URL}/${data[entered].artist.image}`}
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
          <img
            src={`${
              process.env.PUBLIC_URL
            }/${`assets/shared/icon-back-button.svg`}`}
            alt="left arrow"
            onClick={handlePrev}
          />
          <img
            src={`${
              process.env.PUBLIC_URL
            }/${`assets/shared/icon-next-button.svg`}`}
            alt="right arrow"
            onClick={handleNext}
          />
        </div>
      </footer>
    </div>
  );
}

export default CardPage;
