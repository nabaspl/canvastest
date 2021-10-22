import useStyle from "./style.js";
import Form from './form/form'
export default function Account(){
    const classes = useStyle();
    return(<div className={classes.formContainer}><Form/></div>);
}