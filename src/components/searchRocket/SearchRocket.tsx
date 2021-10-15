import React, { useEffect, useState } from "react";
import { RocketDto } from "../../types/rocketDto";
import Table from "../table/Table";

type Props = {
  rockets: RocketDto[];
};

const colNames = [
  "Rocket name",
  "Diameter",
  "Height",
  "Mass",
  "Cost per launch",
];

const SearchRocket = (rockets: Props) => {
  const [query, setQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<RocketDto[]>([]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.currentTarget.value;
    setQuery(searchValue);
  };

  useEffect(() => {

    const results = rockets.rockets.filter(
      (rocket) => rocket.rocket_name.toLowerCase().includes(query)

    );
    setSearchResults(results);
    console.log(results);
  }, [query, rockets]);

  return (
    <div>
      <input type="text" placeholder="Search" onChange={handleSearch} />
      <Table {...{ searchResults }} colNames={colNames} />
    </div>
  );
};

export default SearchRocket;
