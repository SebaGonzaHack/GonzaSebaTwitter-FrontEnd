import { useEffect, useState } from "react";
import axios from "axios";

const useAxios = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, []);
  return data;
};

export default useAxios;
