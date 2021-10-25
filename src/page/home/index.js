import React, { useState, useMemo } from "react";
import useStyle from "./style.js";
import { Button, Box } from "@mui/material";
import Add from "@mui/icons-material/Add";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stepper from "../../components/stepper";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


export default function Home() {
  
  const classes = useStyle();
  const [countLeft, setCountLeft] = useState(0);
  const [countRight, setCountRight] = useState(0);

  const steps = [
    { route: '/step-1', label: "step 1" },
    { route: `/step-2`, label: "step 2" },
    { route: `/step-3`, label: "test nasda asda asdasd" },
    { route: `/step-4`, label: "step 4" },
    { route: `/step-5`, label: "step 5" },
    { route: `/step-6`, label: "step 6" },
    { route: `/step-7`, label: "step 7" },
    { route: `/step-8`, label: "step 8" },
  ];

  // useMemo(() => {
  //   if (countLeft < 100) {
  //     setTimeout(() => {
  //       setCountLeft(countRight + 1);
  //     }, 1000);
  //   }
  //   if (countRight < 99 && countLeft % 2 === 0) {
  //     setTimeout(() => {
  //       setCountRight(countLeft + 1);
  //     }, 1000);
  //   }
  // }, [countRight,countLeft]);
  useMemo(() => {
    setTimeout(() => {
    if (countLeft < 100) 
        setCountLeft(countRight + 1);
    if (countRight < 99 && countLeft % 2 === 0)
        setCountRight(countLeft + 1);
      }, 1000);
  }, [countRight,countLeft]);

  return (
    <Box>
      <Grid container spacing={3} padding="1rem">
        <Grid item textAlign="center" xs={4}>
          <Paper elevation={3} className={classes.CounterPaper}>
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
            count-{countRight}
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
      <Grid item textAlign="center" xs={12}>
          <Router>
            <Stepper steps={steps} />
            <Switch>
              <Route
                exact
                path="/dashboard"
                render={() => {
                  return <Redirect to="/dashboard/step-1" />;
                }}
              />
              {steps.map((menu, index) => {
                return (
                  <Route key={index} path={`/dashboard${menu.route}`}>
                    <div className={classes.mainContents}>{menu.label}</div>
                  </Route>
                );
              })}
            </Switch>
          </Router>
        </Grid>
        </Grid>
    </Box>
  );
}
