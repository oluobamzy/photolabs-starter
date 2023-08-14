import React, { Fragment } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoFavButton.scss";
const PhotoListItem = (props) => {
  //console.log(props)
  const isFavorite = props.favoritePhotoIds.includes(props.id);
  return (
    <Fragment>
      <div className="main-container photo-list__item ">
        <div className="container-for-items">
            <PhotoFavButton
            photoId={props.id}
            toggleFavorite={() => props.toggleFavorite(props.id)}
            isFavorite={isFavorite}
            />
           <img src={props.image} alt="image description" className="photo-list__image" 
           onClick={()=> props.onPhotoClick(props)}
           />
        </div>
        <div className="profile-section">
          <img src={props.profile} alt="profile description" className="photo-list__user-profile"/>
          <div className="photo-list__user-details ">
            <h1 className="photo-list__user-info ">{props.username}</h1>
            <div className="info-area">
            <h1 className="photo-list__user-location photo-list__user-info ">{props.city +` ,`}</h1>
            <h1 className="photo-list__user-location photo-list__user-info ">{props.country}</h1>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
};

export default PhotoListItem;