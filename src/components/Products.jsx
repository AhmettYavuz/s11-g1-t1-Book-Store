import React from "react";
import styled from "styled-components";

import Product from "./Product";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

const ScProducts = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);

    img {
      width: 100%;
    }
  }
`;

const Products = () => {
  const { products } = useContext(ProductContext);

  return (
    <ScProducts>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ScProducts>
  );
};

export default Products;
