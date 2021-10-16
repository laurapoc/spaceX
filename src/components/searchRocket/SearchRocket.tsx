import React, { useEffect, useState } from "react";
import { COL_NAMES } from "../../constants/constants";
import { RocketDto } from "../../types/rocketDto";
import { RocketModel } from "../../types/rocketModel";
import Table from "../table/Table";

type Props = {
  rockets: RocketDto[];
};

const SearchRocket = (rockets: Props) => {
  const [query, setQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<RocketModel[]>([]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.currentTarget.value;
    setQuery(searchValue);
  };

  useEffect(() => {
    const ROCKET_TABLE_VALUES: RocketModel[] = rockets.rockets.map((r) => {
      return {
        rocket_name: r.rocket_name,
        diameter: r.diameter.meters,
        height: r.height.meters,
        mass: r.mass.kg,
        cost_per_launch: r.cost_per_launch,
      };
    });
    const results = ROCKET_TABLE_VALUES.filter((rocket) => {
      return Object.keys(rocket).some((key) =>
        rocket[key as keyof RocketModel]
          .toString()
          .toLowerCase()
          .includes(query)
      );
    });
    setSearchResults(results);
  }, [query, rockets.rockets]);

  return (
    <div>
      <input type="text" placeholder="Search" data-testid="search-input" onChange={handleSearch} />
      <Table {...{ searchResults }} colNames={COL_NAMES} />
    </div>
  );
};

export default SearchRocket;
