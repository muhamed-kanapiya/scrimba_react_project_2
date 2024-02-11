import React from "react";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="status">{badgeText}</div>}
      <img src={props.coverImg} className="card--img" />
      <div className="card--stats">
        <img src="./img/star.png" className="card--star" />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount})</span>
        <span className="gray">{props.location}</span>
      </div>
      <h2 className="card--title">{props.title}</h2>
      <div className="card--price">
        <span className="price">From ${props.price}</span> / person
      </div>
    </div>
  );
}
