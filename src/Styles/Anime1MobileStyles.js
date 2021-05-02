import { makeStyles } from "@material-ui/core/styles";

export const useMobileStyles = makeStyles((theme) => ({
  tile: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    width: "92%",
    height: "60%",
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
    width: "100%",
    height: "100%",
  },
  imageDiv: {
    width: "92%",
    height: "80%",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#02475e",
  },
}));
