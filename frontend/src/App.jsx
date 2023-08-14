// App.js
import React from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import useApplicationData from './Hooks/useApplicationData';
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
    clickTopic,
  } = useApplicationData();
  console.log('photosArr', photosArr);
  return (
    <div className='App'>
      <HomeRoute
        photos={photosArr}
        topics={topicArr}
        onPhotoClick={handleModalOpen}
        toggleFavorite={toggleFavorite}
        favoritePhotoIds={favoritePhotoIds}
        clickTopic={clickTopic}
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
