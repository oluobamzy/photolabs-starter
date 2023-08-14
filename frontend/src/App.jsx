// App.js
import React from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import { useApplicationData } from 'hooks/useApplicationData';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const App = () => {
  const {
    favoritePhotoIds,
    isModalOpen,
    selectedPhoto,
    toggleFavorite,
    topicArr,
    similarPhotosArr,
    photosArr,
    handleModalOpen,
    handleModalClose,
  } = useApplicationData();

  return (
    <div className='App'>
      <HomeRoute
        photos={photosArr}
        topics={topicArr}
        onPhotoClick={handleModalOpen}
        toggleFavorite={toggleFavorite}
        favoritePhotoIds={favoritePhotoIds}
      />
      <PhotoDetailsModal 
        isOpen={isModalOpen}
        onClose={handleModalClose}
        imageSource={selectedPhoto}
        photos={similarPhotosArr}
        toggleFavorite={toggleFavorite}
        favoritePhotoIds={favoritePhotoIds}
      />
    </div>
  );
};

export default App;
