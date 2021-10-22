import { makeStyles } from "@material-ui/core/styles";
const useStyle = makeStyles({
  CounterPaper: {
    height: "3rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  counterBtn: {
    backgroundColor: "rgb(226, 0, 116) !important",
  },
  mainContents: {
    height: "20rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2rem"
  },
});
export default useStyle;
