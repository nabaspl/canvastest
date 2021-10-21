import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import useStyle from './style.js'
import { Grid } from '@mui/material';
import logo from '../../assets/icons/logo.svg'

export default function DenseAppBar() {
  const classes = useStyle();
  return (
      <AppBar position="sticky" className={classes.header}>
        <Grid container >
          <Grid md={.5} className={classes.headerLeft}>
          <IconButton >
            <img src={logo} alt="logo"/>
          </IconButton>
          </Grid>
          <Grid md={11.5} className={classes.headerRight}>
          <Typography variant="h6" color="inherit" component="div">
            <h1 className={classes.headerRightContent}>Home</h1>
          </Typography>
          </Grid>
        </Grid>
      </AppBar>
  );
}
