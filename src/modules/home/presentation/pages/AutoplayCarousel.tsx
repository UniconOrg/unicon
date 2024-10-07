import React from "react";
import "./AutoplayCosousel.css"

const sponsors = [
  "asus", "bbva", "facebook", "github", "google", "hp", "javascript", "notion", "santander", "spotify"
];

const AutoplayCarousel: React.FC = () => {
  return (
    <div className="slider">
      <div className="slide-track">
        {sponsors.concat(sponsors).map((sponsor, index) => (
          <div className="slide" key={index}>
            <img src={`sponsors/${sponsor}.svg`} height="60" width="200" alt={sponsor} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoplayCarousel;