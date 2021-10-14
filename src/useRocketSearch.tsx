import { useEffect } from "react";
import axios from "axios";

const useRocketSearch = (query: any) => {
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://api.spacexdata.com/v3/rockets",
      params: { query: query },
    }).then((res) => {
      console.log(res.data);
    });
  
  }, [query]);

  return (
    <div>
      <h2>Rockets</h2>
    </div>
  );
};

export default useRocketSearch;
