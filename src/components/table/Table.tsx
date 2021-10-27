import { styles } from "./styles";

import { RocketModel } from "../../types/rocketModel";
import arrowImage from "../../assets/icons/arrow_down.svg"

type Props = {
  searchResults: RocketModel[];
  colNames: Array<string>;
  onColumnClick: (headerItem: string) => void | undefined;
};

const Table = ({ searchResults, colNames, onColumnClick }: Props) => {
  const classes = styles();

  const columnClickHandler = (headerItem: string) => {
    onColumnClick(headerItem);
  };

  return (
    <div className={classes.tableBlock}>
      {searchResults.length > 0 && (
        <table className={classes.table}>
          <thead className={classes.tableHead}>
            <tr className={classes.tableHead_row}>
              {colNames.map((headerItem, index) =>
                index !== 0 ? (
                  <th
                    className={classes.table_row_data}
                    key={index}
                    // onClick={() => columnClickHandler(headerItem)}
                  >
                    {headerItem}
                    <button className={classes.sortButton} onClick={() => columnClickHandler(headerItem)}><img src={arrowImage} alt="sort arrow" className={classes.sortImage}/></button>
                  </th>
                ) : (
                  <th
                    className={classes.table_first_row_data}
                    key={index}
                    
                  >
                    {headerItem}
                    <button className={classes.sortButton} onClick={() => columnClickHandler(headerItem)}><img src={arrowImage} alt="sort arrow" className={classes.sortImage}/></button>
                  </th>
                )
              )}
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
