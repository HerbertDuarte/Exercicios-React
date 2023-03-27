import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchProducts = () => {
  // BUSCANDO PRODUTOS

  const navigate = useNavigate();
  const [query, setQuery] = useState();

  const handleSubmit = (e) => {
    e.preventDefault;

    navigate("/search?q=" + query);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
      <input type="submit" value="Buscar" />
    </form>
  );
};

export default SearchProducts;
