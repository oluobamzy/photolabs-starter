import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';
import LiveSearch from './LiveSearch';

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div>
        <LiveSearch handleSearch={props.handleSearch} />
      </div>
      <div className="list-area-adjust">
        <TopicList
          topics={props.topics}
          toggleFavorite={props.toggleFavorite}
          favoritePhotoIds={props.favoritePhotoIds}
          clickTopic={props.clickTopic}
        />
        <FavBadge favoritePhotoIds={props.favoritePhotoIds} />
      </div>
    </div>
  );
};

export default TopNavigation;
