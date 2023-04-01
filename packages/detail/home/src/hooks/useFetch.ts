import { useEffect, useState } from "react";
export const useFetch = (url: string) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    try {
      (async () => {
        const data = await fetch(url);
        const result = await data.json();
        setData(result);
      })();
    } catch {}
  }, [url]);

  return data;
};
