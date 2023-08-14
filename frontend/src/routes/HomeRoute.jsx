import React from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';


const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} photos={props.photos} toggleFavorite={props.toggleFavorite}
          favoritePhotoIds={props.favoritePhotoIds} clickTopic={props.clickTopic}/>
        <div className="photo-list-style">
         <PhotoList photos={props.photos} onModalClick = {props.onPhotoClick}   toggleFavorite={props.toggleFavorite}
          favoritePhotoIds={props.favoritePhotoIds}/> 
        </div>
        <div>
          <footer>
            <p>PhotoLabs</p>
          </footer>
        </div>
      </div>
  );
};

export default HomeRoute;
  