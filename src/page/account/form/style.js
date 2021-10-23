import { makeStyles } from "@material-ui/core/styles";
const useStyle = makeStyles({
  formHeader:{
    textAlign:"center",
    color:"rgb(226, 0, 116)"
  },
  formBtn:{
    backgroundColor:"rgb(226, 0, 116) !important"
  },
  formRadio:{
    flexDirection: "row !important",
    justifyContent: "space-between",
  },
  checkedStyle:{
    '&.Mui-checked': {color: "rgb(226, 0, 116)"}
  },
  root: {
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgb(226, 0, 116)"
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "rgb(226, 0, 116)"
    }
  }
});
export default useStyle;