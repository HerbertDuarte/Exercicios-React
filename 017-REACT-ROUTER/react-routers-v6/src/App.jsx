import "./App.css";
import { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Products from './components/Products'
import About from "./routes/About";
import Footer from "./components/Footer";


function App() {
  const url = "http://localhost:3000/products";
  
  // 4 - custom hook
  const { data: products, httpConfig , loading , err } = useFetch(url);
  
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [img, setImg] = useState("");
  
  // ROTAS

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Products products={products} httpConfig={httpConfig} loading={loading} err={err} />
    },
    {
      path:'/about',
      element : <About/>
    }
  ])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = {
      name,
      price : Number(price),
      img,
    };
    httpConfig(newProduct, "POST");

    setName("");
    setPrice("");
    setImg("");
  };

  return (
    <div className="App">
      <h1 className="title">⚡Fast Store</h1>
      
      <RouterProvider router={routes}/>

      <Footer/>
    </div>
  );
}

export default App;