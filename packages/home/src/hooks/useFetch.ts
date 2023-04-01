import { useEffect, useState } from "react";
export const useFetch = (url: string) => {
  const [data, setData] = useState();

 useEffect(() => {
    try {
      const tomalo = async () => {
        const response = await fetch(url);
        const { result } =  await response.json();
        setData(result)
      }
      tomalo()
    } catch {}
  }, [url]);

  return data;
};
