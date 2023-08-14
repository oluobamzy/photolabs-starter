import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  return (
      <li className="topic-list__item">
      <span  id ={props.id} href={`/${props.slug}`} >{props.title}</span>
      </li>
  );
};

export default TopicListItem;