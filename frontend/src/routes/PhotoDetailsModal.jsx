import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';


const PhotoDetailsModal = ({ isOpen, onClose, imageSource, toggleFavorite, favoritePhotoIds }) => {

  if (!isOpen) {
    return null;
  }
  const photos = imageSource.similarPhotos.map(({ user, urls, ...rest }) => ({
    ...rest, imageSource: urls.regular, profile: user.profile, username: user.name
  }));
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button photo-details-modal__top-bar" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <PhotoFavButton className="fav-button-modal" />
      <div className="photo-details-modal__images photo-details-modal__image ">
        <img src={imageSource.image} alt="photo details" />
      </div>
      <h2>Similar Photos</h2>
      <div className='photo-details-modal__images'>
        <PhotoList photos={photos} toggleFavorite={toggleFavorite} favoritePhotoIds={favoritePhotoIds} />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;



