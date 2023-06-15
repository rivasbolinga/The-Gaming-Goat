import React, { useState } from 'react'
import '../styles/slide.css';

const Slide = ({name, images, summary}) => {

  return (
    <div className="slide-component">
      <img
        className="slide-image"
        alt="top 5 game"
        src={`https://images.igdb.com/igdb/image/upload/t_screenshot_med_2x/${images[0]}.jpg`}
      />
      <div className="slide-details-container">
        <div className="slide-top-5-tag">Top 5</div>
        <h1 className="slide-game-name">{name}</h1>
        <p className="slide-game-description">{summary}</p>
        <button type="button">See details &rarr;</button>
      </div>
    </div>
  )
}

export default Slide;
