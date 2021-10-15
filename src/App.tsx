import axios, { AxiosRequestConfig, AxiosResponse, Canceler } from "axios";
import { useEffect, useState } from "react";
import SearchRocket from "./components/searchRocket/SearchRocket";
import { RocketDto } from "./types/rocketDto";


function App() {
  const [rockets, setRockets] = useState<RocketDto[]>([]);

  const [loading, setloading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setloading(true);
    setError(false);
    let cancel: Canceler;
    let config: AxiosRequestConfig<RocketDto[]> = {
      method: "GET",
      url: "",
      cancelToken: new axios.CancelToken((token) => (cancel = token)),
    };
    axios
      .get<RocketDto[]>("https://api.spacexdata.com/v3/rockets", config)
      .then(
        (
          response: AxiosResponse<RocketDto[], AxiosRequestConfig<RocketDto[]>>
        ) => {
          const data = response.data;
          setRockets(data);
          setloading(false);
        }
      )
      .catch((err) => {
        if (axios.isCancel(err)) return;
        setError(true);
        return err;
      });
    return () => cancel();
  }, []);


  return (
    <div className="App">
      <SearchRocket {...{ rockets }} />
      <div>{loading && "Loading..."}</div>
      <div>{error && "Something whent wrong..."}</div>
    </div>
  );
}

export default App;
