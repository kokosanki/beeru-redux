import React, { useEffect } from "react";
import Product from "./Product";
import { connect, useSelector } from "react-redux";
import { getProducts } from "../actions/stateActions";
import axios from "axios";

const Products = ({ dispatch }) => {
  const products = useSelector((state) => state.products);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://api.punkapi.com/v2/beers");
      dispatch(getProducts(result.data));
    };
    fetchData();
  });

  return (
    <ul className="Products">
      {products ? (
        products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            src={product.image_url}
            tagline={product.tagline}
            description={product.description}
          />
        ))
      ) : (
        <div></div>
      )}
    </ul>
  );
};

export default connect()(Products);
