import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";

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
        setloading(false);
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
        <div className={classes.notification}>
          {loading && (
            <Loader
              type="ThreeDots"
              color="#FFFFFF"
              height={80}
              width={80}
              timeout={3000}
            />
          )}
        </div>
        <div className={classes.notification}>
          {error && "Something went wrong..."}
        </div>
      </div>
    </div>
  );
}

export default App;
