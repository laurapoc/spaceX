import { createUseStyles } from "react-jss";

export const styles = createUseStyles({
  searchBlock: {
    padding: "3%",
  },

  inputBlock: {
    width: "100%",
    margin: "auto",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: "10px",
  },

  inputBlock__header: {
    margin: "1.5%",
    fontWeight: "400",
    fontSize: "1.6rem",
  },

  searchInputBlock: {
    position: "relative",
    width: "60%",
  },

  searchImage: {
    position: "absolute",
    left: "8px",
    top: "3px",
    zIndex: 1,
  },

  input: {
    width: "98%",
    borderRadius: "20px",
    border: "none",
    backgroundColor: "rgb(237, 239, 250)",
    lineHeight: 2,
    fontSize: "large",
    display: "block",
    paddingLeft: "60px",
    boxSizing: "border-box",
  },

  inputBlock__resultParagraph: {
    color: "rgb(157, 157, 158)",
    fontWeight: "300",
  },
});
