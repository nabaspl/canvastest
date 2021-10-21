import * as React from "react";
import { Link,useLocation } from "react-router-dom";
import './style.css'

export default function HorizontalNonLinearStepper({ steps }) {
    const location = useLocation();
    const [activeIndex,setactiveIndex]  =  React.useState(0);
  return (
    <div className="stepper">
      <div className="connector visited"></div>
      {steps.map((menu,index)=>{
          
          return(<>
          <div key={`node${index}`} className={`node ${location.pathname === menu.route ?"active":""}`} onClick={()=>setactiveIndex(index)}>
          <Link key={`link${index}`} className="label" to={menu.route}>{menu.label}</Link>
        </div>
        <div key={`coennctor${index}`} className={`connector ${index < activeIndex ?"visited":""}`}></div>
        </>);
      })}
    </div>
  );
}
