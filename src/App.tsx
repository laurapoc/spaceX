import { useState } from "react";
import useRocketSearch from "./useRocketSearch";

function App() {
const [query, setQuery] = useState<string>()

useRocketSearch(query)

const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
event.preventDefault();
const searchValue = event.currentTarget.value;
setQuery(searchValue);
}

  return (
    <div className="App">
      <input type="text" onChange={handleInputChange} />
      <div>Rocket</div>
      <div>Rocket</div>
      <div>Rocket</div>
      <div>Loading...</div>
      <div>Error</div>
    </div>
  );
}

export default App;
