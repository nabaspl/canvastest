import { makeStyles } from '@material-ui/core/styles';
const useStyle = makeStyles({
    mainContainer:{
        backgroundImage: "url(https://canvasassets.blob.core.windows.net/common-images/bg-image-app.png)",
        backgroundSize: "contain",
        backgroundRepeat: "repeat"
    },
    sideNavSection:{
        background: "rgb(255, 255, 255)",
        minHeight: "calc(100vh - 3.5rem)",
        position: "fixed",
        zIndex: "11",
        borderRight: "1px solid rgb(221, 221, 221)"
    },
    mainSection:{
        width: "calc(100% - 3.5rem)",
        position: "relative",
        overflow: "hidden",
        minHeight: "calc(100vh - 3.5rem)",
        padding: "1rem",
        marginLeft:"4rem"
    },
    CounterPaper:{
        height:"3rem",
        display:"flex",
        justifyContent: "center",
        alignItems: "center"
    }
})
export default useStyle;