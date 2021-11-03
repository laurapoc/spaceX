import React, { useEffect, useState } from "react";

import { styles } from "./styles";

import Table from "../table/Table";
import { COL_NAMES } from "../../constants/constants";
import { RocketDto } from "../../types/rocketDto";
import { RocketModel } from "../../types/rocketModel";
import searchImage from "../../assets/icons/search.svg";

type Props = {
  rockets: RocketDto[];
};

const SearchRocket = (rockets: Props) => {
  const [query, setQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<RocketModel[]>([]);

  const classes = styles();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.currentTarget.value;
    setQuery(searchValue);
  };

  useEffect(() => {
    const ROCKET_TABLE_VALUES: RocketModel[] = rockets.rockets.map((r) => {
      return {
        rocket_name: r.rocket_name,
        diameter: `${r.diameter.meters} m`,
        height: `${r.height.meters} m`,
        mass: `${r.mass.kg} kg`,
        cost_per_launch: r.cost_per_launch,
      };
    });
    const results = ROCKET_TABLE_VALUES.filter((rocket) => {
      return Object.keys(rocket).some((key) =>
        rocket[key as keyof RocketModel]
          .toString()
          .toLowerCase()
          .includes(query.toLowerCase())
      );
    });
    setSearchResults(results);
  }, [query, rockets.rockets]);

  const onColumnClick = (headerItem: string): void | undefined => {
    let sortedResults: RocketModel[] = [];
    let firstElement: string | number;
    let secondElement: string | number;

    sortedResults = [
      ...searchResults.sort((a, b) => {
        if (headerItem === COL_NAMES[0]) {
          firstElement = a.rocket_name;
          secondElement = b.rocket_name;
        } else if (headerItem === COL_NAMES[1]) {
          firstElement = a.diameter;
          secondElement = b.diameter;
        } else if (headerItem === COL_NAMES[2]) {
          firstElement = a.height;
          secondElement = b.height;
        } else if (headerItem === COL_NAMES[3]) {
          firstElement = a.mass;
          secondElement = b.mass;
        } else if (headerItem === COL_NAMES[4]) {
          firstElement = a.cost_per_launch;
          secondElement = b.cost_per_launch;
        }

        // Sort numbers in a string using localeCompare
        return firstElement
          .toString()
          .localeCompare(secondElement.toString(), undefined, {
            numeric: true,
            sensitivity: "base",
          });
      }),
    ];

    setSearchResults(sortedResults);
  };

  return (
    <div className={classes.searchBlock}>
      <div className={classes.inputBlock}>
        <h1 className={classes.inputBlock__header}>SpaceX rockets</h1>
        <p className={classes.inputBlock__resultParagraph}>
          {searchResults && `${searchResults.length} results`}
        </p>
        <div className={classes.searchInputBlock}>
          <img className={classes.searchImage} src={searchImage} alt="icon" />
          <input
            className={classes.input}
            type="text"
            placeholder="Search"
            data-testid="search-input"
            autoFocus
            onChange={handleSearch}
          />
        </div>
      </div>
      <Table
        {...{ searchResults }}
        colNames={COL_NAMES}
        onColumnClick={onColumnClick}
      />
    </div>
  );
};

export default SearchRocket;
