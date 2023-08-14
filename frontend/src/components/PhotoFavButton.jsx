import React from 'react';
import FavIcon from './FavIcon';
function PhotoFavButton(props) {
  
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon  toggleFavorite={props.toggleFavorite} isFavorite={props.isFavorite} displayAlert={props.displayAlert}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;
