import { useState } from "react";
import useRocketSearch from "./useRocketSearch";

function App() {
  const [query, setQuery] = useState<string>("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.currentTarget.value;
    setQuery(searchValue);
  };

  useRocketSearch(query);

  return (
    <div className="App">
      <input type="text" onChange={handleSearch} />
      <div>Rocket</div>
      <div>Rocket</div>
      <div>Rocket</div>
      <div>Loading...</div> axios.Canceltoken
      <div>Error</div>
    </div>
  );
}

export default App;
