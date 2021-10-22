import * as React from "react";
import { Link,useLocation } from "react-router-dom";
import './style.css'

export default function HorizontalNonLinearStepper({ steps }) {
    const location = useLocation();
    const [activeIndex,setactiveIndex]  =  React.useState(0);
  return (
    <div className="stepper">
      <div style={{width: "50%"}} className="connector visited"></div>
      {steps.map((menu,index)=>{
          
          return(<React.Fragment key={index}>
          <div  className={`node ${location.pathname === menu.route ?"active":""}`} onClick={()=>setactiveIndex(index)}>
          <Link  className="label" to={menu.route}>{menu.label}</Link>
        </div>
        <div className={`connector ${index < activeIndex ?"visited":""}`}></div>
        
        </React.Fragment>);
        
      })}
      <div  style={{width: "50%"}} className={`connector`}></div>
    </div>
  );
}
