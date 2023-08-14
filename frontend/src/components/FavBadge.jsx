import React from 'react';
import PhotoFavButton from './PhotoFavButton';
const FavBadge = (props) => {
  const displayAlert = () => {
    return props.favoritePhotoIds.length > 0;
  };
  
  return (
    <div className="fav-badge">
      <PhotoFavButton 
          displayAlert={displayAlert()} isFavorite={displayAlert()}/>
    </div>
  );
};

export default FavBadge;