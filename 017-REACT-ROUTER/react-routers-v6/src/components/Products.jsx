import React from "react";
import Loading from "./Loading";
import SingleProduct from "./SingleProduct";

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
            products.map((product) => 
              <SingleProduct product={product} />
           )
           )}
    </div>
    </>
  );
};

export default Products;
