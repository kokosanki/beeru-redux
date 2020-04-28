import React from "react";
import { connect, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../actions/stateActions";

const Product = ({
  name,
  tagline,
  description,
  id,
  src,
  toggleFavorite,
  isActive,
  dispatch,
}) => {
  const favorites = useSelector((state) => state.favorites);

  const handleClick = (product) => {
    if (favorites.includes(product)) {
      dispatch(removeFavorite(product));
    } else {
      dispatch(addFavorite(product));
    }
  };

  return (
    <article className="Products__product">
      <div className="product__presentation">
        <div className="product__left">
          <img className="product__image" alt={id} src={src} />
        </div>
        <div className="product__right">
          <h2 className="product__tag">{tagline}</h2>
          <p className="product__description">{description}</p>
        </div>
      </div>
      <div className="product__favorite">
        <h1 className="product__title">{name}</h1>
        <img
          id={id}
          className={"product__isFavorite"}
          onClick={() => handleClick(id)}
          alt="Add to favorite"
          src="../assets/heart1.png"
          style={{ opacity: favorites.includes(id) ? "1" : "0.5" }}
        />
      </div>
    </article>
  );
};

export default connect()(Product);
