import { makeStyles } from "@material-ui/core/styles";

export const useMainStyles = makeStyles((theme) => ({
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
    backgroundColor: "#fff2f2",
    color: "#f25287",
  },
}));
