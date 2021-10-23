import React, { useContext } from "react";
import { formContext } from "../../App";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

import "./style.css";
export default function UserInfo() {
  const [formValue, setFormValue] = useContext(formContext);
  console.log("formValue", formValue);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        "& > :not(style)": {
          m: 3,
         
        },
      }}
    >
      {Object.keys(formValue).length!==0 &&
      <Paper elevation={3}>
        
        <div className="user-info">
          <span className="field"> First Name</span> :
          <span className="value">{formValue.firstName} </span>
        </div>
        <div className="user-info">
          <span className="field"> Last Name</span> :
          <span className="value">{formValue.lastName} </span>
        </div>
        <div className="user-info">
          <span className="field"> Email </span> :
          <span className="value">{formValue.email} </span>
        </div>
        <div className="user-info">
          <span className="field"> Course </span> :
          <span className="value">{formValue.course} </span>
        </div>
        <div className="user-info">
          <span className="field"> Gender </span> :
          <span className="value">{formValue.gender} </span>
        </div>
        <div className="user-info">
        <Link  to='/account' className="link-style">
        <Button variant="outlined" startIcon={<EditIcon />}>
          Edit
        </Button>
        </Link>
        </div>
      </Paper>}
    </Box>
  );
}
