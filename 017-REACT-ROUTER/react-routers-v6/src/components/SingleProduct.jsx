import React from "react";
import { Link } from "react-router-dom";

const SingleProduct = ({product}) => {
  const Price = (product.price).toLocaleString("pt-br", {
    minimumFractionDigits: 2,
    currency : 'BRL',
    maximumFractionDigits : 2
  })
  const oldPrice = (product.price * 1.3).toLocaleString("pt-br", {
    minimumFractionDigits: 2,
    currency : 'BRL',
    maximumFractionDigits : 2
  })

  return (
    <Link to={"/about/" + product.id} key={product.id} className="product">
     
      <div className="image">
        <img src={product.img} alt={product.name} srcSet={product.img} />
      </div> 
      <p className="description">{product.name}</p>

      <div className="productFooter">        
          <div className="prices">
            <span className="oldPrice">
              R${" "}
              {oldPrice}
            </span>
            <span className="price">
              R${" "}
              {Price}
            </span>
            
          </div> 
          <span className="frete">
              frete grátis
            </span>      
      </div>
    </Link>
  );
};

export default SingleProduct;
