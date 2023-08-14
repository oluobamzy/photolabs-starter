import { useEffect, useReducer } from 'react';
import { initialState, reducer } from './reducer';

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchPhotos = () => {
      fetch('/api/photos')
        .then((response) => response.json())
        .then((data) =>
          dispatch({ type: 'fetchPhotos', payload: { photos: data } })
        );
    };
    
    const fetchTopics = () => {
      fetch('/api/topics')
        .then((response) => response.json())
        .then((data) => {
          dispatch({ type: 'fetchTopics', payload: { topics: data } });
    
          // Fetch photos for the initially selected topic (if available)
          if (state.selectedTopic) {
            fetchPhotosForTopic(state.selectedTopic);
          }
        });
    };
    fetchPhotos();
    fetchTopics();
  }, [state.selectedTopic]);
  
  const toggleFavorite = (photoId) => {
    dispatch({ type: 'TOGGLE_FAVORITE', payload: { photoId } });
  };

  const clickTopic = (topicId) => {
    fetchPhotosForTopic(topicId);
  };

  const handleModalOpen = (photo) => {
    dispatch({ type: 'OPEN_MODAL', payload: { photo } });
  };

  const handleModalClose = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  const { photos, topics } = state;

  const topicArr = topics.map((topic) => ({
    id: topic.id,
    slug: topic.slug,
    title: topic.title,
    onClick: () => clickTopic(topic.id),
  }));

  const photosArr = photos.map((photo) => ({
      id: photo.id,
      location: {
        city: photo.location.city,
        country: photo.location.country,
      },
      imageSource: photo.urls.regular,
      username: photo.user.name,
      profile: photo.user.profile,
      similar_photos: photo.similar_photos,
      likes: 0,
      dislikes: 0,
      favorite: state.favoritePhotoIds.includes(photo.id),
    }));

  const similarPhotosArr = photos.map((photo) => ({
    id: photo.id,
    location: {
      city: photo.location.city,
      country: photo.location.country,
    },
    imageSource: photo.urls.full,
    username: photo.user.name,
    profile: photo.user.profile,
    s_photos: photo.similar_photos,
    likes: 0,
    dislikes: 0,
  }));

  const fetchPhotosForTopic = (topicId) => {
    fetch(`/api/topics/photos/${topicId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Fetch error: ${response.status} - ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        dispatch({ type: 'fetchPhotos', payload: { photos: data } });
      })
      .catch((error) => {
        console.error('Error fetching photos:', error);
      });
  };

  useEffect(() => {
    if (topicArr.length > 0) {
      fetchPhotosForTopic(topicArr[0].id); // Fetch photos for the first topic
    }
  }, []);

  return {
    ...state,
    toggleFavorite,
    topicArr,
    similarPhotosArr,
    photosArr,
    handleModalOpen,
    handleModalClose,
    clickTopic
  };
};

export default useApplicationData;
