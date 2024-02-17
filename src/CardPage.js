import "./CardPage.css";
import { useState } from "react";
function CardPage({ data, entered, setEntered, progress, setProgress }) {
  console.log("entered: ", entered);
  console.log("data.length: ", data.length);

  console.log("progress: ", progress);
  const handleNext = () => {
    const newEntered = entered === data.length - 1 ? 0 : entered + 1;
    setEntered(newEntered);
    setProgress(((newEntered + 1) / data.length) * 100);
  };
  const handlePrev = () => {
    const newEntered = entered === 0 ? data.length - 1 : entered - 1;
    setEntered(newEntered);
    setProgress(((newEntered + 1) / data.length) * 100);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [modalImage, setModalImage] = useState("");

  // const openModalWithImage = (imageUrl) => {
  //   console.log("modal open!");
  //   console.log("imageURL: ", imageUrl);
  //   setModalImage(`${process.env.PUBLIC_URL}/${imageUrl}`);
  // };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    // openModalWithImage(`${data[entered].images.hero.large}`);
  };
  return entered == null ? (
    <div>Loading...</div>
  ) : (
    <div className="wrapper-cardPage">
      <div className="midsection">
        <div className="pageLeft">
          <div className="art">
            <img
              src={`${process.env.PUBLIC_URL}/${data[entered].images.hero.large}`}
              alt="arnolfini"
            />
          </div>
          <div className="modalBtn" onClick={toggleModal}>
            <img
              src={`${
                process.env.PUBLIC_URL
              }/${`assets/shared/icon-view-image.svg`}`}
              alt="view"
            />
            <div className="viewImage">VIEW IMAGE</div>
          </div>
          <div className="work-artist">
            <div className="cardPageTitle">{data[entered].name}</div>
            <div className="cardPageSubtitle">{data[entered].artist.name}</div>
          </div>
          <img
            className="artist"
            src={`${process.env.PUBLIC_URL}/${data[entered].artist.image}`}
            alt={data[entered].artist.name}
          />
        </div>
        <div className="pageRight">
          <div className="artDescription">{data[entered].description}</div>
          <div className="rightNumber">{data[entered].year}</div>
        </div>
      </div>
      {isModalOpen ? (
        <div className="modalOverlay" onClick={toggleModal}>
          <div className="modalImageWrapper">
            <img
              src={`${process.env.PUBLIC_URL}/${data[entered].images.hero.large}`}
              alt="Focused"
              className="focusedImage"
            />
            <div className="close">CLOSE</div>
          </div>
        </div>
      ) : null}
      <footer>
        <div className="bottom">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="footerWrapper">
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
        </div>
      </footer>
    </div>
  );
}

export default CardPage;
