import React from 'react'
import { useSearchParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch'
import Loading from '../components/Loading';

const [searchParams] = useSearchParams()


const url = "http://localhost:3000/products?" + searchParams;
const { data: products, httpConfig , loading , err } = useFetch(url);
const Search = () => {

  return (
    <>
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
    </>
  )
}

export default Search