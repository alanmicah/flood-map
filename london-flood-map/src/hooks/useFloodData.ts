// import { useEffect, useState } from "react";
// import { getFloods } from "../services/api.ts";

// export function useFloodData() {
//   const [data, setData] = useState({});

//   useEffect(() => {
//     getFloods().then(setData);
//   }, []);

//   return data;
// }

import { useEffect, useState } from "react";
import { getFloods } from "../services/api";

export function useFloodData() {
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFloods()
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
}