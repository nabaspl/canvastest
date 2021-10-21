import React, { useState, useEffect } from "react";
import AppBar from "../../components/appBar";
import SideNav from "../../components/sideNavBar";
import useStyle from "./style.js";
import { Button, Box } from "@mui/material";
import Add from "@mui/icons-material/Add";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stepper from "../../components/stepper";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Home() {
  const classes = useStyle();
  const [countLeft, setCountLeft] = useState(0);
  const [countRight, setCountRight] = useState(0);

  const steps = [
    { route: "/step-one", label: "step one" },
    { route: "/step-two", label: "step two" },
    { route: "/step-three", label: "step three" },
  ];

  useEffect(() => {
    if (countLeft < 10) {
      setTimeout(() => {
        setCountLeft(countRight + 1);
      }, 1000);
    }
  }, [countRight]);

  useEffect(() => {
    if (countRight < 9 && countLeft % 2 === 0) {
      setTimeout(() => {
        setCountRight(countLeft + 1);
      }, 1000);
    }
  }, [countLeft]);

  return (
    <>
      <AppBar />
      <main className={classes.mainContainer}>
        <div className={classes.sideNavSection}>
          <SideNav />
        </div>
        <div className={classes.mainSection}>
          {/* <Breadcrumbs /> */}
          <Box>
            <Grid container spacing={3}>
              <Grid item textAlign="center" xs={4}>
                <Paper elevation={3} className={classes.CounterPaper}>
                  {" "}
                  count-{countLeft}
                </Paper>
              </Grid>
              <Grid item textAlign="center" xs={4}>
                <Button variant="contained" className={classes.counterBtn}>
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
                    {steps.map((menu, index) => {
                      return (
                        <Route key={index} path={menu.route}>
                          <div className={classes.mainContents}>
                            {menu.label}
                          </div>
                        </Route>
                      );
                    })}
                  </Switch>
                </Router>
              </Grid>
            </Grid>
          </Box>
        </div>
      </main>
    </>
  );
}
