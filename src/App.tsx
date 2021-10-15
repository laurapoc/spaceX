import axios, { AxiosRequestConfig, AxiosResponse, Canceler } from "axios";
import { useEffect, useState } from "react";
import Table from "./components/table/Table";
import { RocketDto } from "./types/rocketDto";

const colNames = [
  "Rocket name",
  "Diameter",
  "Height",
  "Mass",
  "Cost per launch",
];

function App() {
  const [query, setQuery] = useState<string>("");
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
        setError(true)
        return err;
      });
    return () => cancel();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.currentTarget.value;
    setQuery(searchValue);
  };

  return (
    <div className="App">
      <input type="text" onChange={handleSearch} />
      <Table {...{ rockets }} colNames={colNames} />
      <div>{loading && "Loading..."}</div>
      <div>{error&& "Something whent wrong..."}</div>
    </div>
  );
}

export default App;
