import React from "react";
import Product from "./Product";
import { connect, useSelector } from "react-redux";

const Favorites = () => {
  const products = useSelector((state) => state.products);
  const favorites = useSelector((state) => state.favorites);

  let favoriteBeers = [];
  const res = products.filter((product) => favorites.includes(product.id));
  favoriteBeers = res;

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
            src="../assets/beer.jpg"
          ></img>
        </div>
      </div>
    )) || (
      <ul className="Products">
        {favoriteBeers.map((item) => (
          <Product
            isActive={true}
            key={item.id}
            id={item.id}
            name={item.name}
            src={item.image_url}
            tagline={item.tagline}
            description={item.description}
          />
        ))}
      </ul>
    )
  );
};

export default connect()(Favorites);
