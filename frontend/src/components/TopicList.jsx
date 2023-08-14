import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  if (!props.topics) {
    return null; // or display a loading message
  }
  return (
    <ul className="top-nav-bar__topic-list">
      {props.topics.map((topic) => (
        <TopicListItem
          key={topic.id}
          id={topic.id} // Assign the 'id' prop to the TopicListItem
          slug={topic.slug}
          title={topic.title}
        />
      ))}
    </ul>
  );
};

export default TopicList;
