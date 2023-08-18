import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';


const PhotoDetailsModal = ({ isOpen, onClose, imageSource, toggleFavorite, favoritePhotoIds }) => {
  if (!isOpen) {
    return null;
  }
  const isFavorite = favoritePhotoIds.includes(imageSource.id);
  const photos = imageSource.similarPhotos.map(({ user, urls, ...rest }) => ({
    ...rest, imageSource: urls.regular, profile: user.profile, username: user.name
  }));

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button photo-details-modal__top-bar" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images photo-details-modal__image ">
        <PhotoFavButton className="photo-list__fav-icon-modal" photoId={imageSource.id}
          toggleFavorite={() => toggleFavorite(imageSource.id)}
          isFavorite={isFavorite} />
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



