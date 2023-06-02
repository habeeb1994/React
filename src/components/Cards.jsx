import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";
function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <p></p>
        <h2 className="name">{props.name}</h2>
        <Avatar src={props.src} />
      </div>
      <div className="bottom">
        <Detail info={props.telphone} />
        <Detail info={props.email} />
      </div>
    </div>
  );
}

export default Card;
