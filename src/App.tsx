import axios, { AxiosRequestConfig, AxiosResponse, Canceler } from "axios";
import { useEffect, useState } from "react";
import RocketList from "./components/rocketList/RocketList";
import { RocketDto } from "./types/rocketDto";

function App() {
  const [query, setQuery] = useState<string>("");
  const [rockets, setRockets] = useState<RocketDto[]>([]);

  useEffect(() => {
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
          console.log(data);
        }
      )
      .catch((err) => {
        if (axios.isCancel(err)) return;
        return err;
      });
    return () => cancel();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.currentTarget.value;
    setQuery(searchValue);
  };

  let rocketList = rockets.map((rocket) => {
    return (
      <RocketList key={rocket.id} {...{rocket}}/>
    );
  });

  return (
    <div className="App">
      <input type="text" onChange={handleSearch} />
      {rocketList}
      <div>Loading...</div>
      <div>Error</div>
    </div>
  );
}

export default App;
