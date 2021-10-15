import React from "react";
import { RocketDto } from "../../types/rocketDto";
import { RocketModel } from "../../types/rocketModel";

type Props = {
  searchResults: RocketModel[];
  colNames: Array<string>;
};


const Table = ({ searchResults, colNames }: Props) => {
  // const ROCKET_TABLE_VALUES: RocketModel[] = searchResults.map((r) => {
  //   return {
  //     rocket_name: r.rocket_name,
  //     diameter: r.diameter.meters,
  //     height: r.height.meters,
  //     mass: r.mass.kg,
  //     cost_per_launch: r.cost_per_launch,
  //   };
  // });

  return (
    <div>
      {searchResults.length > 0 && (
        <table
          cellSpacing="0"
          style={{ width: "100%", height: "auto", padding: "5px 10px" }}
        >
          <thead>
            <tr>
              {colNames.map((headerItem, index) => (
                <th key={index}>{headerItem}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.values(searchResults).map((obj, index) => (
              <tr key={index}>
                {Object.values(obj).map((value, idx) => (
                  <td key={idx}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
