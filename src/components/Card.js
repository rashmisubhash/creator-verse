import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

const Card = ({ name, description, url, setShowAll, imageURL, id }) => {
  const creator = {
    name: name,
    description: description,
    url: url,
    imageURL: imageURL,
    id: id,
  };
  const navigate = useNavigate();

  const handleIconClick = () => {
    navigate(`/view/${id}`);
  };

  return (
    <div className="card" style={{ backgroundImage: `url(${imageURL})` }}>
      <div className="card-header">
        <h2>{name}</h2>
        <div className="icons">
          <img
            src="https://img.icons8.com/ios/50/ffffff/info--v1.png"
            alt="info icon"
            className="action-icon"
            onClick={handleIconClick}
          />
          <img
            src="https://img.icons8.com/ios/50/ffffff/edit--v1.png"
            alt="edit icon"
            className="action-icon"
            onClick={() => setShowAll(creator)}
          />
        </div>
      </div>
      <div className="social-media-icons">
        <a href={url.link_instagram} target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.icons8.com/color/48/000000/instagram-new--v1.png"
            alt="Instagram"
          />
        </a>
        <a href={url.link_twitter} target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.icons8.com/color/48/000000/twitter--v1.png"
            alt="Twitter"
          />
        </a>
        <a href={url.link_youtube} target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.icons8.com/color/48/000000/youtube-play.png"
            alt="Youtube"
          />
        </a>
      </div>
      <p className="description">
        {description.length > 200
          ? `${description.substring(0, 200)}...`
          : description}
      </p>
    </div>
  );
};

export default Card;
