import React, {useState} from "react";
import AppBar from "../../components/appBar";
import SideNav from "../../components/sideNavBar";
import useStyle from "./style.js";
import { Button, Container } from "@mui/material";
import Add from "@mui/icons-material/Add";
import Paper from '@mui/material/Paper';
import  Grid  from "@mui/material/Grid";

export default function Home() {
  const classes = useStyle();
  const [countLeft,setCountLeft] = useState(0);
  const [countRight,setCountRight] = useState(0);
  const [toggle,setToggle] = useState('countLeft');
  const handleIncrement = () =>{
    if(toggle==='countLeft')
      setCountLeft(countLeft+1);
    else
      setCountRight(countRight+1); 

    let tt = toggle==='countLeft'?'countRight':'countLeft';
    setToggle(tt);
  }
  return (
    <>
      <AppBar />
      <main className={classes.mainContainer}>
        <div className={classes.sideNavSection}>
          <SideNav />
        </div>
        <div className={classes.mainSection}>
          {/* <Breadcrumbs /> */}
          <Container>
            <Grid container>
              <Grid item textAlign="center" xs={4}>
              <Paper elevation={3} className={classes.CounterPaper}> count-{countLeft}</Paper>
              </Grid>
              <Grid item textAlign="center" xs={4}>
                <Button variant="contained" onClick={handleIncrement}>
                  Increment
                  <Add />
                </Button>
              </Grid>
              <Grid item textAlign="center" xs={4}>
              <Paper elevation={3} className={classes.CounterPaper}> count-{countRight}</Paper>
              </Grid>
            </Grid>
          </Container>
        </div>
      </main>
    </>
  );
}
