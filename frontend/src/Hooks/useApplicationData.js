import { useEffect, useReducer } from 'react';
import { initialState, reducer } from './reducer';

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { photos, topics, searchQuery, favoritePhotoIds, selectedTopic } = state;

  useEffect(() => {// Fetch photos and topics
    const fetchPhotos = () => {
      return fetch('/api/photos')
        .then(response => response.json());
    };
  
    const fetchTopics = () => {
      return fetch('/api/topics')
        .then(response => response.json());
    };
  
    Promise.all([fetchPhotos(), fetchTopics()])
      .then(([photosData, topicsData]) => {
        dispatch({ type: 'fetchPhotos', payload: { photos: photosData } });
        dispatch({ type: 'fetchTopics', payload: { topics: topicsData } });
  
        if (selectedTopic) {
          fetchPhotosForTopic(selectedTopic);
        }
      })
      .catch(error => {
        // Handle error
      });
  }, [selectedTopic]);
  


  const toggleFavorite = (photoId) => {// Toggle favorite for a photo
    dispatch({ type: 'TOGGLE_FAVORITE', payload: { photoId } });
  };

  const clickTopic = (topicId) => {// Click on a topic
    fetchPhotosForTopic(topicId);
  };

  const handleModalOpen = (photo) => {// Open modal for a photo
    dispatch({ type: 'OPEN_MODAL', payload: { photo } });
  };

  const handleModalClose = () => {// Close modal
    dispatch({ type: 'CLOSE_MODAL' });
  };

  const topicArr = topics.map((topic) => ({// Map topics
    id: topic.id,
    slug: topic.slug,
    title: topic.title,
    onClick: () => clickTopic(topic.id),
  }));

  const photosArr = photos.map((photo) => ({//  Map photos
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


  const fetchPhotosForTopic = (topicId) => {// Fetch photos for a topic
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
  const handleSearch = (searchQuery) => {
    dispatch({ type: 'SET_SEARCH_QUERY', payload: { searchQuery } });
  };

  const filteredPhotos = (photos, query) => {// Filter photos to handle search functionality
    return photos.filter((photo) =>
      photo.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      photo.location.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      photo.location.country.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return {
    ...state,
    toggleFavorite,
    topicArr,
    photosArr: filteredPhotos(photosArr, photos),
    handleModalOpen,
    handleModalClose,
    clickTopic,
    handleSearch,
  };
};

export default useApplicationData;
