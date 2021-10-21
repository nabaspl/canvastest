import React, { useState } from "react";
import AppBar from "../../components/appBar";
import SideNav from "../../components/sideNavBar";
import useStyle from "./style.js";
import { Button, Container } from "@mui/material";
import Add from "@mui/icons-material/Add";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stepper from "../../components/stepper";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Home() {
  const classes = useStyle();
  const [countLeft, setCountLeft] = useState(0);
  const [countRight, setCountRight] = useState(0);
  const [toggle, setToggle] = useState("countLeft");

  const steps = [
    { route: "step-one", label: "step one" },
    { route: "step-two", label: "step two" },
    { route: "step-three", label: "step three" },
  ];

  const handleIncrement = () => {
    if (toggle === "countLeft") setCountLeft(countLeft + 1);
    else setCountRight(countRight + 1);

    let tt = toggle === "countLeft" ? "countRight" : "countLeft";
    setToggle(tt);
  };
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
            <Grid container spacing={3}>
              <Grid item textAlign="center" xs={4}>
                <Paper elevation={3} className={classes.CounterPaper}>
                  {" "}
                  count-{countLeft}
                </Paper>
              </Grid>
              <Grid item textAlign="center" xs={4}>
                <Button
                  variant="contained"
                  onClick={handleIncrement}
                  className={classes.counterBtn}
                >
                  Increment
                  <Add />
                </Button>
              </Grid>
              <Grid item textAlign="center" xs={4}>
                <Paper elevation={3} className={classes.CounterPaper}>
                  {" "}
                  count-{countRight}
                </Paper>
              </Grid>
              <Grid item textAlign="center" xs={12}>
                <Router>
                  <Stepper steps={steps} />
                  <Switch>
                    <Route path="/step-one">
                      <div className={classes.mainContents}>step one</div>
                    </Route>
                    <Route path="/step-two">
                      <div className={classes.mainContents}>step two</div>
                    </Route>
                    <Route path="/step-three">
                      <div className={classes.mainContents}>step three</div>
                    </Route>
                  </Switch>
                </Router>
              </Grid>
            </Grid>
          </Container>
        </div>
      </main>
    </>
  );
}
