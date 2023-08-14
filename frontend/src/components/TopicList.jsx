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
          id={topic.id}
          title={topic.title}
          clickTopic={props.clickTopic}
        />
      ))}
    </ul>
  );
};

export default TopicList;
