import { createUseStyles } from "react-jss";

export const styles = createUseStyles({
  searchBlock: {
    padding: "3%",
  },

  inputBlock: {
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

  inputBlock__input: {
    width: "60%",
    borderRadius: "20px",
    border: "none",
    backgroundColor: "rgb(237, 239, 250)",
    lineHeight: 2,
    fontSize: "large",
  },

  inputBlock__resultParagraph: {
    color: "rgb(157, 157, 158)",
    fontWeight: "300",
  },
});
