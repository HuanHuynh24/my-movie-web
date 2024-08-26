import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/thumbnail.css";

const Thumbnail = ({ movieName, urlImg }) => {
  return (
    <div className="thumbnail carousel ">
      <img src={`https://phimhay2402.vercel.app/${urlImg}`} alt="thumbnail" />
      <div className="icon">
        <FontAwesomeIcon icon="fa-solid fa-share-nodes" className="icon-share"/>
        <FontAwesomeIcon icon="fa-solid fa-heart" className="icon-heart" />
        <FontAwesomeIcon icon="fa-solid fa-play" className="icon-play"/>
      </div>
      <div className="caption">
        <h3>{movieName}</h3>
        <p>
          <FontAwesomeIcon icon={faPlus} />
          <span>Yêu thích</span>
        </p>
        {/* <p>{movieTime}</p> */}
      </div>
    </div>
  );
};
export default Thumbnail;
