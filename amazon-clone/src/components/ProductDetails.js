import React from "react";
import { useParams } from "react-router-dom";

export const ProductDetails = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>Product details</h1>
      <p>{params.id}</p>
    </div>
  );
};
