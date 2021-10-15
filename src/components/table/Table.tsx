import React from "react";
import { RocketDto } from "../../types/rocketDto";

type Props = {
  rockets: RocketDto[];
  colNames: Array<string>;
};

type TableRowsProps = {
  rocketName: string;
  diameter: number;
  height: number;
  mass: number;
  cost_per_launch: number;
};

const Table = ({ rockets, colNames }: Props) => {
  const ROCKET_TABLE_VALUES: TableRowsProps[] = rockets.map((r) => {
    return {
      rocketName: r.rocket_name,
      diameter: r.diameter.meters,
      height: r.height.meters,
      mass: r.mass.kg,
      cost_per_launch: r.cost_per_launch,
    };
  });

  return (
    <div>
      {rockets.length > 0 && (
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
            {Object.values(ROCKET_TABLE_VALUES).map((obj, index) => (
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