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

  return (
    <div className="App">
      <input type="text" onChange={handleSearch} />
      <Table {...{ rockets }} colNames={colNames} />
      <div>Loading...</div>
      <div>Error</div>
    </div>
  );
}

export default App;
