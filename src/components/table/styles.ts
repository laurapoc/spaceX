import { createUseStyles } from "react-jss";

export const styles = createUseStyles({
  tableBlock: {
    width: "100%",
    paddingTop: "3%",
    color: "rgb(105,105,105)",
    fontSize: "0.9rem",
  },

  table: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },

  tableHead: {
    display: "flex",
    width: "100%",
    fontWeight: 600,
    paddingBottom: "1%",
  },

  tableHead_row: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
  },

  tableBody: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },

  row: {
    backgroundColor: "white",
    display: "flex",
    margin: "2px 0",
    borderRadius: "10px",
    height: "3rem",
    alignItems: "center",
  },

  table_row_data: {
    display: "flex",
    width: "20%",
    paddingRight: "5%",
    justifyContent: "flex-end",
  },

  table_first_row_data: {
    display: "flex",
    width: "15%",
    paddingLeft: "5%",
    justifyContent: "flex-start",
  },
});
