import React from "react";
import { Link } from "react-router-dom";

const SingleProduct = ({product}) => {

  console.log(product)

  return (
    <Link to={"/about/" + product.id} key={product.id} className="product">
      <p className="description">{product.name}</p>

      <div className="image">
        <img src={product.img} alt={product.name} srcSet={product.img} />
      </div>

      <span className="price">
        R${" "}
        {product.price.toLocaleString("pt-br", {
          minimumFractionDigits: 2,
        })}
      </span>
    </Link>
  );
};

export default SingleProduct;
