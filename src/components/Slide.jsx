import React, { useState } from 'react'
import '../styles/slide.css';

const Slide = ({name, images, summary}) => {

  return (
    <div className="slide-component">
      <img
        className="slide-image"
        alt="top 5 game"
        src={`https://images.igdb.com/igdb/image/upload/t_screenshot_med_2x/${images[1]}.jpg`}
      />
      <div className="slide-details-container">
        <div className="details">
          <div className="slide-tag">Top 5</div>
          <h1 className="slide-game-name">{name}</h1>
          <p className="slide-game-description">
            {summary.length > 100 ? `${summary.slice(0, 100)}...` : summary}
          </p>
          <button type="button" className="see-details btn">
            See details &rarr;
          </button>
        </div>
      </div>
    </div>
  )
}

export default Slide;
