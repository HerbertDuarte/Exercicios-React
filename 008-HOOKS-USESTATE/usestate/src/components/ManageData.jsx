import React from "react";
import { useState } from "react";

const ManageData = () => {
  var contador = 0;

  // nesse caso, number é uma variavel que tem um valor, e setNumber é uma função que retorna um valor e que nesse caso é usada para alterar o valor do number e retornar ele alterado.

  var [number, setNumber] = useState(0)

  return (
    // maneira errada pois o react não renderiza o componente para atualizá-lo
    <>
      <h2>Sem useState</h2>
      <div>
        <p>Count : {contador}</p>
        <button onClick={() => contador++}>Add</button>
      </div>
      <h2>Com useState</h2>
      <div>
        <p>Count: {number}</p>
        <button onClick={()=> setNumber(number+1)}>Add</button>
      </div>
    </>
  );
};

export default ManageData;
