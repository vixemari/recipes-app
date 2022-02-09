import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function InProgressIcon({
  whiteHeartIcon, blackHeartIcon, shareIcon }) {
  const [favorite, setFavorite] = useState(false);
  const isFavorite = () => {
    setFavorite(!favorite);
  };
  return (
    <div className="divIcon">
      <button
        data-testid="favorite-btn"
        type="button"
        src={ favorite ? blackHeartIcon : whiteHeartIcon }
        onClick={ isFavorite }
      >
        <img
          src={ favorite ? blackHeartIcon : whiteHeartIcon }
          alt="share-icon"
          width="30px"
          data-testid="favorite-btn"
        />
      </button>

      <button
        type="button"
        src={ shareIcon }
        data-testid="share-btn"
      >
        <img
          src={ shareIcon }
          alt="share-icon"
          width="30px"
          data-testid="favorite-btn"
        />
      </button>
    </div>
  );
}

InProgressIcon.propTypes = {
  whiteHeartIcon: PropTypes.string.isRequired,
  blackHeartIcon: PropTypes.string.isRequired,
  shareIcon: PropTypes.string.isRequired,
};
