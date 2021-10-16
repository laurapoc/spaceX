import { styles } from "./styles";

import { RocketModel } from "../../types/rocketModel";

type Props = {
  searchResults: RocketModel[];
  colNames: Array<string>;
};

const Table = ({ searchResults, colNames }: Props) => {
  const classes = styles();

  return (
    <div className={classes.tableBlock}>
      {searchResults.length > 0 && (
        <table className={classes.table}>
          <thead className={classes.tableHead}>
            <tr className={classes.tableHead_row}>
              {colNames.map((headerItem, index) => (
                <th className={classes.tableBlock__tableHead} key={index}>
                  {headerItem}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={classes.tableBody}>
            {Object.values(searchResults).map((obj, index) => (
              <tr className={classes.row} key={index}>
                {Object.values(obj).map((value, idx) =>
                  idx !== 0 ? (
                    <td className={classes.table_row_data} key={idx}>
                      {value}
                    </td>
                  ) : (
                    <td className={classes.table_first_row_data} key={idx}>
                      {value}
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
