import { makeStyles } from '@material-ui/core/styles';
const useStyle = makeStyles({
    header:{
        height: "3.5rem",
        position:"sticky"
    },
    headerRight:{
        backgroundColor: "rgb(49, 57, 77)",
        height: "3.5rem",
        display: "flex",
        alignItems: "center",
        width:"calc(100% - 3.5rem)"
    },
    headerLeft:{
        backgroundColor: "rgb(226, 0, 116)",
        height: "3.5rem",
        width: "3.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    headerRightContent:{
        marginLeft: "1rem",
        fontSize: "1.5rem",
        color: "rgb(255, 255, 255)",
        fontWeight: "700",
        textTransform: "uppercase"
    }
})
export default useStyle;