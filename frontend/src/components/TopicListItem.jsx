import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  return (
    <li className="topic-list__item">
      <span onClick={() => props.clickTopic(props.id)}>{props.title}</span>
    </li>
  );
};

export default TopicListItem;
