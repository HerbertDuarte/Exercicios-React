import { useState, useEffect } from "react";

// 4 - custom hook
export const useFetch = (url) => {
  const [data, setData] = useState(null);

  // 5 - adiconando o POST ao hook

  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  // 6 - criando controle de tela de loading

  const [loading, setLoading] = useState(false)

  // 7 - trabalhando com possibilidade de erro usando TRY CATCH

  const [err, setErr] = useState(false)

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setMethod("POST");
    }
  };

  useEffect(() => {
    const fetchData = async () => {

    setLoading(true)
    
      try {  
          const res = await fetch(url);
          const data = await res.json();
          setData(data);
          setLoading(false)
      }

     catch (error) {
      console.log(error)
      setErr(true)
    }
  }
    fetchData()
    setLoading(false)
    
  }, [url, callFetch]);

  // POST

  useEffect(() => {
    
    setLoading(true)

    const httpRequest = async () => {
      if (method === "POST") {
        let fetchOptions = [url, config];

        const res = await fetch(...fetchOptions);

        const data = await res.json();

        setCallFetch(data);

        setLoading(false)
      }
    };
    httpRequest();
  }, [config, url, method]);

  return { data, httpConfig , loading, err};
};
