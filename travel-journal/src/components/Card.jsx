import React from "react";
import Location from "../img/location.png";

const Card = (props) => {
  return (
    <div className="card">
      <img className="card__img" src={props.imgCard} alt="" />
      <div className="card__info">
        <div className="card__info--local">
          <img className="card__info--icon" src={Location} alt="" />
          <span className="card__info--country">{props.country}</span>
          <a className="card__info--path" href="">
            View on Google Maps
          </a>
        </div>
        <h1 className="card__info--name">{props.name}</h1>
        <div className="card__info--time">
          <span>{props.dayBegin}</span>-<span>{props.dayFinish}</span>
        </div>
        <div className="card__info--intro">{props.intro}</div>
      </div>
    </div>
  );
};
export default Card;
