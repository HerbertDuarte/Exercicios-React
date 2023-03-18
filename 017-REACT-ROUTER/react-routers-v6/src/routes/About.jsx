import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import Loading from '../components/Loading'
import SingleProduct from '../components/SingleProduct'

const About = () => {
  const { id } = useParams()

  const url = "http://localhost:3000/products/" + id;
  
  // 4 - custom hook
  const { data: item, httpConfig , loading , err } = useFetch(url);

  console.log(item)
 
  return (
    <div className='singleProduct'>
      {err ? (
        <p>Erro ao carregar os dados! Verifique sua internet ou tente mais tarde.</p>
        ) : 
        loading ? (
          <Loading />
          ) : (
            item &&
              <SingleProduct product={item} />
           )
           }
    </div>
  )
}

export default About