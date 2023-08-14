const initialState = {
  favoritePhotoIds: [],
  isModalOpen: false,
  selectedPhoto: null,
  photos:[],
  topics:[],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const { photoId } = action.payload;
      if (state.favoritePhotoIds.includes(photoId)) {
        return {
          ...state,
          favoritePhotoIds: state.favoritePhotoIds.filter(id => id !== photoId),
        };
      } else {
        return {
          ...state,
          favoritePhotoIds: [...state.favoritePhotoIds, photoId],
        };
      }
    case 'OPEN_MODAL':
      return {
        ...state,
        isModalOpen: true,
        selectedPhoto: action.payload.photo,
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        isModalOpen: false,
        selectedPhoto: null,
      };
      case 'fetchPhotos':
        return {
          ...state,
          photos: action.payload.photos,
        };
        case 'fetchTopics':
          return {
            ...state,
            topics: action.payload.topics,
            selectedTopic: state.selectedTopic, // Keep the selected topic
            photosForTopic: [], // Reset photos for the topic when fetching topics
          };
        case 'FETCH_PHOTOS_FOR_TOPIC':
          return {
            ...state,
            photosForTopic: action.payload.photos,
          };
    default:
      return state;
  }
};

export { initialState, reducer };
