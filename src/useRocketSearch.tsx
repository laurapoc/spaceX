import { useEffect} from "react";
import axios, { Canceler } from "axios";

const useRocketSearch = (query: string | undefined) => {
  useEffect(() => {
    let cancel: Canceler;
    axios({
      method: "GET",
      url: "https://api.spacexdata.com/v3/rockets",
      params: { q: query },
      cancelToken: new axios.CancelToken((token) => (cancel = token)),
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
      });
    return () => cancel();
  }, [query]);
  return null;
};

export default useRocketSearch;
