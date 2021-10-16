import axios from "axios";
import { useEffect, useState } from "react";

import SearchRocket from "./components/searchRocket/SearchRocket";
import { RocketDto } from "./types/rocketDto";
import { styles } from "./styles";

function App() {
  const [rockets, setRockets] = useState<RocketDto[]>([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(false);

  const classes = styles();

  const getRocketData = () => {
    axios
      .get<RocketDto[]>("https://api.spacexdata.com/v3/rockets")
      .then((response) => {
        const data = response.data;
        setRockets(data);
        setloading(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        setError(true);
        return err;
      });
  };

  useEffect(() => {
    setloading(true);
    setError(false);
    getRocketData();
  }, []);

  return (
    <div className={classes.app}>
      <div className={classes.appContainer}>
        <SearchRocket {...{ rockets }} />
        <div>{loading && "Loading..."}</div>
        <div>{error && "Something went wrong..."}</div>
      </div>
    </div>
  );
}

export default App;
