import React, { useEffect } from "react";
import Product from "./Product";
import { connect, useSelector } from "react-redux";
import { getProducts } from "../actions/stateActions";
import axios from "axios";

const Products = ({ dispatch }) => {
  const products = useSelector((state) => state.products);

  const fetchData = async () => {
    const result = await axios("https://api.punkapi.com/v2/beers");
    dispatch(getProducts(result.data));
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul className="Products">
      {products &&
        products.map((product) => <Product key={product.id} {...product} />)}
    </ul>
  );
};

export default connect()(Products);
