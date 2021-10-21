import { makeStyles } from '@material-ui/core/styles';
const useStyle = makeStyles({
    navBar:{
        height: "100%",
        width: "100%",
        background: "inherit",
        overflow: "hidden",
        transition:" all 300ms ease 0s",
        fontSize: "1rem",
        border:" 1px solid rgb(221, 221, 221)",
        minHeight: "calc(100vh - 3.5rem)",
        "&:hover":{
            width:"20rem"
        }
    }
})
export default useStyle;