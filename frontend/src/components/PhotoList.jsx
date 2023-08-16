import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {props.photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          image={photo.imageSource}
          profile={photo.profile}
          username={photo.username}
          city={photo.location.city}
          country={photo.location.country}
          toggleFavorite={props.toggleFavorite}
          favoritePhotoIds={props.favoritePhotoIds}
          similarPhotos={photo.similar_photos}
          id={photo.id}
          onPhotoClick={props.onModalClick}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
