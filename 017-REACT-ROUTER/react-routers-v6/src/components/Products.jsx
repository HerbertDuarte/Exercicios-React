import React from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const Products = ({ products, loading, err }) => {

  return (
    <>
    <h2 className="subtitle">Produtos</h2>
    <div className="products">
      
      {err ? (
        <p>Erro ao carregar os dados! Verifique sua internet ou tente mais tarde.</p>
        ) : 
        loading ? (
          <Loading />
          ) : (
            products &&
            products.map((product) => (
              <Link to='/about' key={product.id} className="product">
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
           ))
           )   }
    </div>
    </>
  );
};

export default Products;
