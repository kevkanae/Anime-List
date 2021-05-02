import { makeStyles } from "@material-ui/core/styles";

export const useMangaStyles = makeStyles((theme) => ({
  main: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  root: {
    width: "94vw",
    height: "100vh",
    backgroundColor: "white",
  },
  appbar: {
    color: "#f25287",
    backgroundColor: "#d3dee6",
    height: "10vh",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  body: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "3%",
    backgroundColor: "white",
  },
  tile: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "92%",
    height: "40%",
    padding: "1%",
    backgroundColor: "whitesmoke",
    "&:hover": {
      backgroundColor: "#fffafa",
      boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    },
    margin: "2%",
    borderRadius: "10px",
  },
  imageTag: {
    height: "100%",
    width: "100%",
  },
  imageDiv: {
    objectFit: "contain",
    height: "100%",
    width: "19%",
    padding: "2%",
  },
  details: {
    height: "100%",
    width: "59%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  score: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
    width: "19%",
  },
  star: {
    color: "#fa9905",
  },
  scoreP: {
    fontSize: "15px",
  },
  title: {
    fontWeight: "bold",
    color: "#02475e",
  },
  myButton: {
    color: "#f25287",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
}));
