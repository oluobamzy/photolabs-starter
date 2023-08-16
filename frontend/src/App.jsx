
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
    photosArr,
    handleModalOpen,
    handleModalClose,
    clickTopic,
    handleSearch
  } = useApplicationData();
  return (
    <div className='App'>
      <HomeRoute
        photos={photosArr}
        topics={topicArr}
        onPhotoClick={handleModalOpen}
        toggleFavorite={toggleFavorite}
        favoritePhotoIds={favoritePhotoIds}
        clickTopic={clickTopic}
        handleSearch={handleSearch}
      />
      <PhotoDetailsModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        imageSource={selectedPhoto}
        toggleFavorite={toggleFavorite}
        favoritePhotoIds={favoritePhotoIds}
      />
    </div>
  );
};

export default App;
