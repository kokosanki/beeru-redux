import React from "react";
import Product from "./Product";
import { connect, useSelector } from "react-redux";
import beer from "../assets/beer.jpg";

const Favorites = () => {
  const { products, favorites } = useSelector((state) => state);

  const favoriteBeers = products.filter((product) =>
    favorites.includes(product.id)
  );

  return (
    (!favorites.length && (
      <div className="Favorites">
        <div className="Favorites__noFavorites">
          <p className="noFavorites__text">
            Your favorite beers will appear here:
          </p>
          <img
            className="noFavorites__img"
            alt="No favorite beers found"
            src={beer}
          ></img>
        </div>
      </div>
    )) || (
      <ul className="Products">
        {favoriteBeers.map((item) => (
          <Product key={item.id} {...item} />
        ))}
      </ul>
    )
  );
};

export default connect()(Favorites);
